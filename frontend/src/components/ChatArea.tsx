import { ScrollArea } from "@/components/ui/scroll-area";
import { TchatMessage } from "./ChatBot";
import { useEffect, useRef } from "react";

interface ChatAreaProp {
  chatMessages: Array<TchatMessage>;
}
export const ChatArea: React.FC<ChatAreaProp> = ({ chatMessages }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      }); //esta funcion escrolea hasta el final del chat
    }
  }, [chatMessages]);
  const chatMessage = (type: "received" | "sent", text: string) => {
    if (type === "received")
      return (
        <div ref={scrollRef} className="flex justify-start my-2">
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-slate-500 mr-2">
            {"Bot"}
          </div>
          <div className="flex justify-center items-center border-[1px] border-zinc-500 rounded-md min-w-10 max-w-56 p-2">
            {text}
          </div>
        </div>
      );
    if (type === "sent")
      return (
        <div ref={scrollRef} className="flex justify-end my-2">
          <div className="flex justify-center items-center border-[1px] border-zinc-500 rounded-md min-w-10 max-w-56 p-2">
            {text}
          </div>
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-500 ml-2">
            {"Me"}
          </div>
        </div>
      );
    return <>Tipo invalido</>;
  };
  return (
    <ScrollArea className="w-full h-56 mb-2 mx-auto  flex justify-center items-center p-3 overflow-y-auto">
      {chatMessages.map((message) => (
        <>{chatMessage(message.type, message.text)}</>
      ))}
    </ScrollArea>
  );
};
