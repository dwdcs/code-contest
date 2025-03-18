import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-atheneum-dark mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-atheneum-dark mb-6">Page Not Found</h2>
      <p className="text-atheneum-gray max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/">
        <Button className="bg-atheneum-red hover:bg-atheneum-red/90 text-white rounded-sm">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
