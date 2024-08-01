import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { InputTextChat } from './InputTextChat';
import { ChatArea } from './ChatArea';
import { useState } from 'react';
import chatbot from '/chatbot.png';
import { getSmartResponse } from '@/services/api';
import { CourseAnswer } from '@/types/types';

export interface TchatMessage {
  id: string;
  type: 'received' | 'sent';
  text: string;
  courses?: CourseAnswer[]
}

const INITIAL_CHAT: TchatMessage[] = [
  { id: crypto.randomUUID(), type: 'received', text: 'Hola, en que puedo ayudarte?' },
];

export const ChatBot: React.FC = () => {
  const [chatMessages, setChatMessages] = useState(INITIAL_CHAT);
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);

  const updateChatMessages = (message: TchatMessage) => {
    setChatMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleSubmit = async (question: string) => {
    setIsLoadingAnswer(true);
    const response = await getSmartResponse(question);

    updateChatMessages({
      id: crypto.randomUUID(),
      type: 'received',
      text: response.answer,
      courses: response.courses
    });
    setIsLoadingAnswer(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="fixed bottom-10 right-10 w-24 h-24 rounded-full cursor-pointer hover:scale-105 hover:translate-x-1 z-20">
        <img src={chatbot} alt="avatar chatbot" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[90%] sm:w-[450px] sm:h-[550px] flex flex-col py-2 mr-10 dark:bg-[#00050D]">
        <ChatArea chatMessages={chatMessages} isLoadingAnswer={isLoadingAnswer} />
        <InputTextChat
          updateChatMessages={updateChatMessages}
          handleSubmit={handleSubmit}
          isLoadingAnswer={isLoadingAnswer}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
