import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { InputTextChat } from './InputTextChat';
import { ChatArea } from './ChatArea';
import { useState } from 'react';
import chatbot from '/chatbot.png';

export interface TchatMessage {
  id: string;
  type: 'received' | 'sent';
  text: string;
}

const chatExample: TchatMessage[] = [
  { id: "0", type: 'sent', text: 'Hi' },
  { id: "1", type: 'received', text: 'Hi, lol' },
  {
    id: "3",
    type: 'sent',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: "4",
    type: 'sent',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    id: "5",
    type: 'sent',
    text: 'Quaerat magni facilis deserunt amet adipisci natus rem voluptatum, maiores unde nisi harum explicabo veniam placeat sint temporibus in dolores error rerum.',
  },
  { id: "6", type: 'received', text: 'Neque, optio iure.' },
  { id: "7", type: 'sent', text: '5' },
  {
    id: "8",
    type: 'received',
    text: 'Consequatur delectus saepe aliquam quae, adipisci optio numquam qui sed deleniti ipsum quisquam quam sequi ullam eaque ipsam ducimus.',
  },
  { id: "9", type: 'sent', text: '7' },
  { id: "10", type: 'received', text: '8' },
];

export const ChatBot: React.FC = () => {
  const [chatMessages, setChatMessages] = useState(chatExample);
  const updateChatMessages = (updateFn: (prevMessages: TchatMessage[]) => TchatMessage[]) =>
    setChatMessages((prevMessages) => updateFn(prevMessages));
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="fixed bottom-10 right-10 w-24 h-24 rounded-full cursor-pointer hover:scale-105 hover:translate-x-1 z-20">
        <img src={chatbot} alt="avatar chatbot" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[90%] sm:w-[400px] sm:h-[430px] flex flex-col py-2 mr-10 dark:bg-[#00050D]">
        <ChatArea chatMessages={chatMessages} />
        <InputTextChat updateChatMessages={updateChatMessages} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
