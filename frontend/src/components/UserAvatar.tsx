import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const UserAvatar = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt='avatar of example'/>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
