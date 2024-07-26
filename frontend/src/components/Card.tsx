import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { FaPlay } from 'react-icons/fa';

interface CardProps {
  courseId: number;
  courseName: string;
  courseThumbnail: string;
  courseDescription: string;
  publicationDate: string;
}

export const Card: React.FC<CardProps> = ({
  courseId,
  courseName,
  courseThumbnail,
  courseDescription,
  publicationDate,
}) => {
  return (
    <HoverCard key={courseId}>
      <HoverCardTrigger asChild>
        <img src={courseThumbnail} alt={`${courseName} thumbnail`} className="w-64 h-36 rounded-lg" />
      </HoverCardTrigger>
      <HoverCardContent className="w-60 h-[300px] p-0 cursor-pointer">
        <div className="flex flex-col justify-center ">
          <img src={courseThumbnail} alt={`${courseName} thumbnail`} className="w-full p-0 h-36 rounded-t" />
          <div className="flex flex-col space-y-1 p-3">
            <div className="flex items-center">
              <div className="w-7 h-7 mr-2 rounded-full bg-white flex justify-center items-center">
                <FaPlay className="h-4 w-4 text-black" />
              </div>
              <span className="text-xs">Reproducir curso</span>
            </div>
            <h4 className="text-sm font-semibold truncate">{courseName}</h4>
            <p className="text-xs">{publicationDate}</p>
            <p className="text-xs w-full h-10">{courseDescription}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
