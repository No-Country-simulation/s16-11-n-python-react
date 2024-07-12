import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export function Home() {
  return (
    <>
      <Link href="/about" className="inline-block">
        <Button>About</Button>
      </Link>
      <h1 className="text-2xl">Home</h1>
    </>
  );
}
