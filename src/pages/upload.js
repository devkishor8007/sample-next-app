import React, { useState } from "react";
import { useCreateUserMutation } from "../redux/profileQuery";

const upload = () => {
  const [createUser] = useCreateUserMutation();
  const [name, setName] = useState(null);
  const [username, setUsername] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({ name, username });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter a name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter a username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default upload;
