import { Bot } from './Bot';
import { UserAvatar } from './UserAvatar';

interface ChatMessageProp {
  type: 'received' | 'sent';
  text: string;
  scrollRef?: React.RefObject<HTMLDivElement>;
}

export const ChatMessage: React.FC<ChatMessageProp> = ({ type, text, scrollRef }) => {
  return (
    <div ref={scrollRef} className={`flex ${type === 'received' ? '' : 'flex-row-reverse'} my-2`}>
      <div>
        {type === 'received' ? (
          <div className="flex justify-center items-center w-12 h-12 rounded-full">
            <Bot />
          </div>
        ) : (
          <UserAvatar />
        )}
      </div>
      <div
        className={`flex reverse justify-center items-center border-[1px] border-zinc-400 dark:border-none dark:bg-[#040F21] rounded-md min-w-10 max-w-56 p-2 ${type === 'received' ? 'ml-2' : 'mr-2'} my-2`}
      >
        {text}
      </div>
    </div>
  );
};
