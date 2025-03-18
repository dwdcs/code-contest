import { Card, CardContent } from '@/components/ui/card';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <div className="relative w-full h-48 md:h-64 bg-gray-200 animate-pulse" />

      {/* Blogs Section Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col items-center">
            <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-4" />
            <div className="h-4 w-96 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(9)
              .fill(0)
              .map((_, i) => (
                <Card key={i} className="overflow-hidden border border-gray-200 h-full flex flex-col">
                  <div className="h-48 w-full bg-gray-200 animate-pulse" />
                  <CardContent className="flex-grow p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                    </div>
                    <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-3" />
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2" />
                    <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse mb-2" />
                    <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse mb-4" />
                    <div className="h-8 w-28 bg-gray-200 rounded animate-pulse" />
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
