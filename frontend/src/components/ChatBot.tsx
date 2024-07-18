import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { InputTextChat } from "./InputTextChat";

export const ChatBot: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="fixed bottom-10 right-10 w-24 h-24 rounded-full bg-slate-500">
        Chatbot
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[322px] flex flex-col py-2 mr-10">
        <div className="w-[90%] min-h-56 mb-2 mx-auto border-[1px] border-zinc-500 rounded-lg flex justify-center items-center">
          chatArea
        </div>
				<InputTextChat />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
