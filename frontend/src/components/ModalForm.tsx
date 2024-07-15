import { FormSingIn } from "./FormSingIn"

export const ModalForm: React.FC = () => {
  
  return (
    <div className="bg-black/75 fixed z-40 top-0 left-0 w-full h-screen ">
        
        <div className="w-[469px] bg-[#101214] h-full flex justify-center flex-col items-center">
            <h1 className="scroll-m-20 text-xl font-bold tracking-tight lg:text-3xl">
                TechIAdemic
            </h1>
            <FormSingIn/>

        </div>
    </div>
  )
}