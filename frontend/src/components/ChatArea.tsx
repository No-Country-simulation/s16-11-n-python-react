import { ScrollArea } from '@/components/ui/scroll-area';
import { TchatMessage } from './ChatBot';
import { useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';

interface ChatAreaProp {
  chatMessages: Array<TchatMessage>;
}
export const ChatArea: React.FC<ChatAreaProp> = ({ chatMessages }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      }); //esta funcion escrolea hasta el final del chat
    }
  }, [chatMessages]);

  return (
    <ScrollArea className="w-full h-56 mb-2 mx-auto flex justify-center items-center p-3 overflow-y-auto">
      {chatMessages.map((message) => (
        <ChatMessage type={message.type} text={message.text} scrollRef={scrollRef} />
      ))}
    </ScrollArea>
  );
};
