import { DropdownMenuUser } from "./DropdownMenuUser";
import { ModalForm } from "./ModalForm";
import { useStore } from "@/contexts/store";

export const UserIcon: React.FC = () => {
  const isLogin = useStore((state) => state.register);

  return isLogin ? <DropdownMenuUser /> : <ModalForm />;
};
