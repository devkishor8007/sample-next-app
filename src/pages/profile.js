import { useGetUserProfileByIDQuery } from "@/redux/profileQuery";
import React from "react";

const profile = () => {
  const { isLoading, isError, data, error } = useGetUserProfileByIDQuery(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error occured {error.error}...</div>;
  }

  return (
    <>
      <div
        style={{
          margin: "auto",
          marginTop: "50px",
          alignItems: "center",
          alignContent: "center",
          backgroundColor: "white",
          boxShadow: "0 8px 12px 3px rgba(0,0,0,0.2)",
          width: "40%",
          transition: "0.3s",
          display: "flex",
          padding: "20px",
          gap: "10px",
        }}
      >
        <img
          height="80px"
          src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
          alt=""
        />
        <div
          style={{
            flexDirection: "column",
          }}
        >
          <div>
            userid:
            <span style={{ marginLeft: "5px", fontWeight: "lighter" }}>
              {data.id}
            </span>
          </div>
          <div>
            username:
            <span
              style={{
                marginLeft: "5px",
                fontWeight: "lighter",
                letterSpacing: "1px",
              }}
            >
              {data.username}
            </span>
          </div>
          <div>
            name:
            <span
              style={{
                marginLeft: "5px",
                fontWeight: "lighter",
                letterSpacing: "1px",
              }}
            >
              {data.name}
            </span>
          </div>
          <div>
            email:
            <span
              style={{
                marginLeft: "5px",
                fontWeight: "lighter",
                letterSpacing: "1px",
              }}
            >
              {data.email}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default profile;
