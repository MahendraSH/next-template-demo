"use client";
import { useGetApiV1BooksId } from "@/app/generated/fakeRestApi";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FC } from "react";

interface BookIdPageProps {
  params: { bookId: number };
}

const BookIdPage: FC<BookIdPageProps> = ({ params }) => {
  const { data: book, isLoading, error } = useGetApiV1BooksId(params.bookId);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading book</p>}
      {book && (
        <Card className="m-5 p-5 border rounded-lg shadow-md bg-card text-card-foreground">
          <CardHeader>
            <h1 className="text-3xl font-bold mb-3 ">{book.title}</h1>
            <p className="mb-2">
              <span className="font-semibold ">Description:</span>{" "}
              {book.description}
            </p>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <span className="font-semibold ">Page Count:</span>{" "}
              {book.pageCount}
            </p>
            <p className="mb-2">
              <span className="font-semibold ">Publish Date:</span>{" "}
              {new Date(book?.publishDate as string).toLocaleDateString()}
            </p>
            <p className="mb-2">
              <span className="font-semibold ">Excerpt:</span> {book.excerpt}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BookIdPage;
