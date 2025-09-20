"use client";
import React from "react";
import { useGetApiV1Books } from "../generated/fakeRestApi";
import { DataTableDemo } from "@/components/ui/data-table";
import { bookColumns } from "./_components/bookColumns";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Library, AlertCircle } from "lucide-react";
import CreateUpdateBookForm from "./_components/create-update-book";

const BooksPage = () => {
  const { data: books, isLoading, error } = useGetApiV1Books();

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-3">
          <Library className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-extrabold tracking-tight">
            Books Library
          </h1>
        </div>
        <CreateUpdateBookForm />
      </div>

      {isLoading && (
        <Card className="p-6">
          <div className="space-y-4">
            <Skeleton className="h-10 w-[200px]" />
            <div className="space-y-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          </div>
        </Card>
      )}

      {error && (
        <Alert variant="destructive" className="my-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            There was an error loading the books. Please try again later.
          </AlertDescription>
        </Alert>
      )}

      {books && (
        <Card className="border shadow-lg">
          <DataTableDemo
            columns={bookColumns}
            data={books}
            filter={{
              key: "title",
              placeholder: "Search books by title...",
            }}
          />
        </Card>
      )}
    </div>
  );
};

export default BooksPage;
