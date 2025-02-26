"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "./data-table";
import { User, getColumns } from "./columns";
import { Button } from "@/components/ui/button";

export default function Post() {
  const [posts, setPost] = useState<User[]>([]);
  const [isAdd, setIsAdd] = useState<boolean>(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => {
      setPost(data);
    });
  }, []);
  const handleEditClick = (user: User) => {
    console.log("Edit Clicked:", user);
  };

  const handleDeleteClick = (id: number) => {
    console.log("Delete Clicked:", id);
  };
  const addNew = () => {
    setIsAdd(true);
  };
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-end mb-2">
        <Button onClick={addNew} size={"sm"}>
          Add
        </Button>
      </div>
      <DataTable
        columns={getColumns(handleEditClick, handleDeleteClick)}
        data={posts}
      />
    </div>
  );
}
