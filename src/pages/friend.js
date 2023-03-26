import { useGetPostQuery, useDeletePostMutation } from "@/redux/profileQuery";

const friend = () => {
  const [deletePost] = useDeletePostMutation();
  const { data, isLoading, isError, error } = useGetPostQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <dir>error is {error.error}</dir>;
  }

  return (
    <>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid grey",
              padding: "10px",
              height: "20px",
            }}
          >
            <h3 onClick={() => deletePost({ id: item.id })}>{item.id}</h3>
            <p style={{ padding: "10px" }}>{item.title}</p>
          </div>
        );
      })}
    </>
  );
};

export default friend;
