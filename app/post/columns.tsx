"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArchiveX, Delete, DeleteIcon, FilePenLine } from "lucide-react";

export type User = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getColumns = (
  onEditClick: (user: User) => void,
  onDeleteClick: (id: number) => void
): ColumnDef<User>[] => [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "userId",
    header: "User Id",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "body",
    header: "Body",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onEditClick(row.original)}
        >
          <FilePenLine />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => onDeleteClick(row.original.id)}
        >
          <ArchiveX color="red" />
        </Button>
      </div>
    ),
  },
];
