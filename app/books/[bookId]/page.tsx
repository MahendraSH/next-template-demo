"use client";
import { useGetApiV1BooksId } from "@/app/generated/fakeRestApi";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle } from "lucide-react";
import { FC } from "react";

interface BookIdPageProps {
  params: { bookId: number };
}

const BookIdPage: FC<BookIdPageProps> = ({ params }) => {
  const { data: book, isLoading, error } = useGetApiV1BooksId(params.bookId);

  if (isLoading) {
    return (
      <Card className="m-5 p-5">
        <CardHeader>
          <Skeleton className="h-8 w-3/4 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
        </CardHeader>
        <CardContent>
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-4 w-full mb-2" />
          ))}
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="m-5 p-5 border-destructive">
        <CardContent className="flex items-center gap-2 text-destructive">
          <AlertCircle className="h-5 w-5" />
          <p>Failed to load book details. Please try again later.</p>
        </CardContent>
      </Card>
    );
  }

  if (!book) return null;

  return (
    <Card className="m-5 transition-all hover:shadow-lg">
      <CardHeader className="space-y-4 pb-4">
        <h1 className="text-3xl font-bold tracking-tight">{book.title}</h1>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>{book.pageCount} pages</span>
          <span>•</span>
          <span>
            {new Date(book.publishDate as string).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h2 className="font-semibold mb-2">Description</h2>
          <p className="text-muted-foreground leading-relaxed">
            {book.description}
          </p>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Excerpt</h2>
          <p className="text-muted-foreground leading-relaxed italic">
            "{book.excerpt}"
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookIdPage;
