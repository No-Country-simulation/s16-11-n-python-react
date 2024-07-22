interface ChatMessageProp {
  type: "received" | "sent";
  text: string;
  scrollRef: React.RefObject<HTMLDivElement>;
}

export const ChatMessage: React.FC<ChatMessageProp> = ({
  type,
  text,
  scrollRef,
}) => {
	return(
		<div ref={scrollRef} className={`flex ${type==="received"?"":"flex-row-reverse"} my-2`}>
			<div className={`flex justify-center items-center w-10 h-10 rounded-full ${type==="received"?"bg-slate-500 mr-2":"bg-[#006E2F] ml-2"}`}>{type==="received"?"Bot":"Me"}</div>
			<div className="flex reverse justify-center items-center border-[1px] border-zinc-500 rounded-md min-w-10 max-w-56 p-2">{text}</div>
		</div>
	)
};
