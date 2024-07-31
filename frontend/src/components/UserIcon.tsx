import { DropdownMenuUser } from './DropdownMenuUser';
import { ModalForm } from './ModalForm';
import { useStore } from '@/contexts/store';

export const UserIcon: React.FC = () => {
  const isLogin = useStore((state) => state.isLoggedIn);

  return isLogin ? <DropdownMenuUser /> : <ModalForm />;
};
