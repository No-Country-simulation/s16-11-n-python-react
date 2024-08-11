import { BiLoaderAlt } from 'react-icons/bi';

interface Props {
  className?: string;
}

export default function Loader({ className }: Props) {
  return (
    <div className={`mx-auto w-20 ${className}`}>
      <BiLoaderAlt className="text-4xl animate-spin" />
    </div>
  );
}
