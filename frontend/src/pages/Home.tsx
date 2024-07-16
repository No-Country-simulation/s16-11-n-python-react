import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export function Home() {
  return (
    <>
      <Link href="/about" className="inline-block">
        <Button>About</Button>
      </Link>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        TechIAdemic Home
      </h1>
    </>
  );
}
