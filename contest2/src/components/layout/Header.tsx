import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

export function Header() {
  return (
    <header className="bg-background border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/images/siliconpin-logo.svg"
              alt="SiliconPin Logo"
              width={180}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          <Link href="/" className="px-3 py-2 text-sm text-foreground hover:text-atheneum-red transition-colors">
            Hosting Solutions
          </Link>
          <Link href="/blogs/" className="px-3 py-2 text-sm text-atheneum-red font-medium hover:text-atheneum-red transition-colors">
            Blogs
          </Link>
          <Link href="/about" className="px-3 py-2 text-sm text-foreground hover:text-atheneum-red transition-colors">
            About Us
          </Link>
          <Link href="/pricing" className="px-3 py-2 text-sm text-foreground hover:text-atheneum-red transition-colors">
            Pricing
          </Link>
          <Link href="/faq" className="px-3 py-2 text-sm text-foreground hover:text-atheneum-red transition-colors">
            FAQ
          </Link>
          <Link href="/contact" className="px-3 py-2 text-sm text-foreground hover:text-atheneum-red transition-colors">
            Contact
          </Link>
          <Link href="#" className="px-3 py-2 text-sm text-foreground hover:text-atheneum-red transition-colors">
            <span className="relative">
              <span className="absolute -top-1 -right-1 bg-atheneum-red text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
              Cart
            </span>
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="outline" className="text-foreground text-sm border-muted hidden sm:inline-flex">
            Login
          </Button>
          <Button className="bg-atheneum-red hover:bg-atheneum-red/90 text-sm text-white">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
