import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'wouter';
import { Tcourse } from './TestArrayCourses';

export const Card: React.FC<Tcourse> = ({
  courseId,
  courseName,
  courseThumbnail,
  courseDescription,
  publicationDate,
}) => {
  const date = new Date(publicationDate).toLocaleDateString();

  return (
    <HoverCard>
      <Link to={`~/curso/${courseId}`}>
        <HoverCardTrigger asChild>
          <img
            src={courseThumbnail}
            alt={`${courseName} thumbnail`}
            className="rounded-lg cursor-pointer w-full aspect-video hover:scale-105 transition-all duration-300"
            style={{objectFit:'cover'}}
          />
        </HoverCardTrigger>
        <HoverCardContent className="p-0 cursor-pointer z-[5]">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col space-y-1 p-3">
              <div className="flex items-center">
                <div className="w-7 h-7 mr-2 rounded-full bg-white flex justify-center items-center">
                  <FaPlay className="h-4 w-4 text-black" />
                </div>
                <span className="text-xs">Reproducir curso</span>
              </div>
              <h4 className="text-sm font-semibold truncate">{courseName}</h4>
              <p className="text-xs">{date}</p>
              <p className="text-xs w-full">{courseDescription}</p>
            </div>
          </div>
        </HoverCardContent>
      </Link>
    </HoverCard>
  );
};
