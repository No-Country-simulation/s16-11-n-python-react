import { CourseAnswer } from '@/types/types';
import { Link } from 'wouter';

interface Props {
  course: CourseAnswer;
}

export default function CourseChat({ course }: Props) {
  return (
    <Link href={`/curso/${course.courseId}`} className="flex gap-2 py-4 mx-6 px-4 bg-sky-950 hover:bg-sky-900 rounded transition-colors duration-300 items-center">
      <img src={course.thumbnail} alt={`Image of the course ${course.courseName}`} className="rounded h-14" />
      <div>
        <h3 className='font-semibold'>{course.courseName}</h3>
        <p className='italic'>{course.channel}</p>
      </div>
    </Link>
  );
}
