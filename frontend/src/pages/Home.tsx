import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export function Home() {
  return (
    <>
      <Button asChild>
        <Link href="/course/a21" className="inline-block">
          Curso
        </Link>
      </Button>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        TechIAdemic Home
      </h1>
    </>
  );
}
