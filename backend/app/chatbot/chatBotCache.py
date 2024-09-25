"""
Install the Google AI Python SDK

$ pip install google-generativeai

See the getting started guide for more information:
https://ai.google.dev/gemini-api/docs/get-started/python
"""

import os
import time

import google.generativeai as genai

API_KEY_BOT = os.getenv("API_KEY_BOT")
genai.configure(api_key=API_KEY_BOT)


def upload_to_gemini(path, mime_type=None):
    """
    Uploads a file to Gemini and returns the uploaded file object.
    Args:

        path(str): Path of the file to upload.
        mime_type(str, opcional): MIME type of the file, if specified.
    Returns:
        file: Object of the uploaded file.
    """
    # Upload the specified file to Gemini.
    file = genai.upload_file(path, mime_type=mime_type)
    print(f"Uploaded file '{file.display_name}' as: {file.uri}")
    return file


def wait_for_files_active(files):
    """
    Please wait until the files uploaded to Gemini are in "ACTIVE" status.
    Args:
        files(list): List of uploaded file objects.
    Raises:
        Exception: If any file is not in 'ACTIVE' status.
    """
    print("Waiting for file processing...")
    for name in (file.name for file in files):
        file = genai.get_file(name)
        while file.state.name == "PROCESSING":
            print(".", end="", flush=True)
            time.sleep(10)
            file = genai.get_file(name)
        if file.state.name != "ACTIVE":
            raise Exception(f"File {file.name} failed to process")
    print("...all files ready")
    print()


# Set the generation parameters for the model.
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}
# Initializes a Gemini generative model with the specified settings.
model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config,
    # safety_settings = Adjust safety settings
    # See https://ai.google.dev/gemini-api/docs/safety-settings
    # System instruction for the AI ​​model, specifying the expected behavior.
    system_instruction="""You are a software instructor from an e-learning platform, and your job is to answer user's query based on the course list file, extracted of our platform, you have access to. If the course that the user is looking for is not in the file, try to give the best answer possible based only on the file. You must not recommend or mention any other platform. Reply in Spanish most of the time, except if the query is in English.
    If you recommend a course, include the course that you mentioned/recommended in the courses property, answer using this JSON schema don't include anything else:
    {
      answer: "Your answer",
      courses: [
        {
          course_id: "course's id",
          course_name: "course's name",
          thumbnail: "thumbnail's of the course's first class",
          channel: "course's channel",
          classes:[
            class_id: "The id of the mentioned class",
            class_title: "The title of the mentioned class"
          ]
        }
      ]
    }

    Only include the property 'classes' if you have mentioned a class or classes from the course/courses that you gave in you answer, otherwise don't send the property classes.
    Your answer must be in text format, in any case reply in Markdown format, generate the answer in the JSON Schema I provided before, include every comma, period, bracket, etc because it will be parsed.
    """,
)

files = [
    upload_to_gemini("courses_list.csv", mime_type="text/csv"),
]

wait_for_files_active(files)

chat_session = model.start_chat(
    history=[
        {
            "role": "user",
            "parts": [
                files[0],
            ],
        },
    ]
)
