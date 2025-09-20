"use client";
import React from "react";
import { useGetApiV1Books } from "../generated/fakeRestApi";
import { DataTableDemo } from "@/components/ui/data-table";
import { bookColumns } from "./_components/bookColumns";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CreateUpdateBookForm from "./_components/create-update-book";

const BooksPage = () => {
  const { data: books, isLoading, error } = useGetApiV1Books();
  return (
    <div>
      <div className=" flex mx-5 p-2  items-center justify-between mb-5">
        <h1 className="text-4xl font-extrabold">Books Page</h1>
        <CreateUpdateBookForm />
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading books</p>}
      <Card className="m-3.5">
        {books && (
          <DataTableDemo
            columns={bookColumns}
            data={books}
            filter={{ key: "title", placeholder: "Search by title" }}
          />
        )}
      </Card>
    </div>
  );
};

export default BooksPage;
