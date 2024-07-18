import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { InputTextChat } from "./InputTextChat";
import { ChatArea } from "./ChatArea";
import { useState } from "react";

export interface TchatMessage {
  type: "received" | "sent";
  text: string;
}

const chatExample: TchatMessage[] = [
  { type: "sent", text: "Hi" },
  { type: "received", text: "Hi, lol" },
  { type: "sent", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { type: "sent", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  { type: "sent", text: "Quaerat magni facilis deserunt amet adipisci natus rem voluptatum, maiores unde nisi harum explicabo veniam placeat sint temporibus in dolores error rerum." },
  { type: "received", text: "Neque, optio iure." },
  { type: "sent", text: "5" },
  { type: "received", text: "Consequatur delectus saepe aliquam quae, adipisci optio numquam qui sed deleniti ipsum quisquam quam sequi ullam eaque ipsam ducimus." },
  { type: "sent", text: "7" },
  { type: "received", text: "8" },
];

export const ChatBot: React.FC = () => {
  const [chatMessages, setChatMessages] = useState(chatExample);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="fixed bottom-10 right-10 w-24 h-24 rounded-full bg-slate-500">
        Chatbot
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[322px] flex flex-col py-2 mr-10">
        <ChatArea chatMessages={chatMessages} />
        <InputTextChat setChatMessages={setChatMessages}/>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
