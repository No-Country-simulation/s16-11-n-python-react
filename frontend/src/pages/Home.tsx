import { Link } from 'wouter';

export function Home() {
  return (
    <>
      <Link href="/about">About</Link>
      <h1 className="text-2xl">Home</h1>
    </>
  );
}
