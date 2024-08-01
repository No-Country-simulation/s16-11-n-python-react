import { CourseAnswer } from '@/types/types';
import { UserAvatar } from './UserAvatar';
import CourseChat from './CourseChat';
import { Bot } from './Bot';

interface ChatMessageProp {
  type: 'received' | 'sent';
  text: string;
  courses?: CourseAnswer[];
  scrollRef?: React.RefObject<HTMLDivElement>;
}

export const ChatMessage: React.FC<ChatMessageProp> = ({ type, text, courses, scrollRef }) => {
  return (
    <div ref={scrollRef}>
      <div className={`flex${type === 'received' ? '' : ' flex-row-reverse'} my-2`}>
        <div>
          {type === 'received' ? (
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-slate-500">
              <Bot />
            </div>
          ) : (
            <UserAvatar />
          )}
        </div>
        <div
          className={`flex reverse justify-center items-center border-[1px] border-zinc-400 dark:border-none dark:bg-[#040F21] rounded-md min-w-10 max-w-80 p-2 ${type === 'received' ? 'ml-2' : 'mr-2'} my-2`}
        >
          {text}
        </div>
      </div>
      {courses && courses.length > 0 && courses.map((course) => <CourseChat key={course.courseId} course={course} />)}
    </div>
  );
};
