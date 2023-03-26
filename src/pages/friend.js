import { useGetUserQuery, useDeleteUserMutation } from "@/redux/profileQuery";

const friend = () => {
  const [deleteUser] = useDeleteUserMutation();
  const { data, isLoading, isError, error } = useGetUserQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <dir>error is {error.error}</dir>;
  }

  return (
    <>
      {data.map((user) => {
        return (
          <div
            key={user.id}
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid grey",
              padding: "10px",
              height: "20px",
            }}
          >
            <h3 onClick={() => deleteUser({ id: user.id })}>{user.id}</h3>
            <p style={{ padding: "10px" }}>{user.username}</p>
          </div>
        );
      })}
    </>
  );
};

export default friend;
