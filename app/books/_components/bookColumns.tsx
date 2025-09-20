"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Book } from "../../generated/fakeRestApi";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

export const bookColumns: ColumnDef<Book>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="font-medium">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <div>{(row.getValue("description") as string)?.substring(0, 30)}</div>
    ),
  },
  {
    accessorKey: "pageCount",
    header: "Page Count",
    cell: ({ row }) => <div>{row.getValue("pageCount")}</div>,
  },

  {
    accessorKey: "publishDate",
    header: "Publish Date",
    cell: ({ row }) => (
      <div>{new Date(row.getValue("publishDate")).toLocaleDateString()}</div>
    ),
  },
  {
    accessorKey: "id",
    header: "Actions",
    cell: ({ row }) => (
      <Link
        href={`/books/${row.getValue("id")}`}
        className="font-medium text-blue-600 cursor-pointer"
      >
        <LinkIcon />
      </Link>
    ),
  },
];
