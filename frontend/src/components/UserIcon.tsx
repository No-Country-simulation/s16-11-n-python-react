import { useState } from "react";
import { DropdownMenuUser } from "./DropdownMenuUser";
import { ModalForm } from "./ModalForm";

export const UserIcon:React.FC = () => {
    const [isLogin, setIsLogin] = useState(false);
  return (
    <>
        {isLogin?<DropdownMenuUser/>:<ModalForm/>}
    </>
  )
}

