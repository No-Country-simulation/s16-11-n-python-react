interface EmptyCoursesProps  {
    courseState: string;
}
export const EmptyCourses: React.FC<EmptyCoursesProps> = ({courseState}) => {
  return (
    <div className="h-72 w-full flex justify-center items-center">
        <h1>No tienes {courseState}</h1>
    </div>
  )
}