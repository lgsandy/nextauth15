"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "./data-table";
import { User, getColumns } from "./columns";

export default function Post() {
  const [posts, setPost] = useState<User[]>([]);
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

  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={getColumns(handleEditClick, handleDeleteClick)}
        data={posts}
      />
    </div>
  );
}
