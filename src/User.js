import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query {
    user {
      name
      age
    }
  }
`;

const User = () => {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;
  return (
    <div>
      <p>Data: {JSON.stringify(data)}</p>
      <p>Name: {data.user.name}</p>
      <p>Age: {data.user.age}</p>
    </div>
  );
};

export default User;
