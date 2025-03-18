import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  slug: string;
}

export function BlogCard({ id, title, excerpt, imageUrl, date, author, slug }: BlogCardProps) {
  return (
    <Card className="overflow-hidden border border-gray-200 h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="flex-grow p-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1">
            <Image
              src="/images/logo.png"
              alt="Author"
              width={16}
              height={16}
              className="h-4 w-4 rounded-full"
            />
            <span className="text-xs text-atheneum-gray">{date}</span>
          </div>

          <div className="flex items-center gap-1">
            <Image
              src="/images/logo.png"
              alt="Calendar"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <span className="text-xs text-atheneum-gray">{author}</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-atheneum-dark mb-2 line-clamp-2">{title}</h3>

        <p className="text-sm text-atheneum-gray line-clamp-3 mb-2">{excerpt}</p>
      </CardContent>

      <CardFooter className="pb-5 px-5 pt-0">
        <Link href={`/blogs/${slug}/`} passHref>
          <Button className="bg-atheneum-red hover:bg-atheneum-red/90 text-white rounded-sm text-sm">
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
