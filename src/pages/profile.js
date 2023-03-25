import { useGetPostByNameQuery } from "@/redux/profileQuery";
import React from "react";

const profile = () => {
  const { isLoading, isError, data, error } = useGetPostByNameQuery(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error occured {error.error}...</div>;
  }

  return (
    <>
      <div>UserId: {data.id}</div>
      <div>title: {data.title}</div>
      completed: {data.completed ? "true" : "false"}
    </>
  );
};

export default profile;
