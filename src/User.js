import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

const GET_USER = gql`
  query {
    user {
      name
      age
    }
  }
`;

const ADD_USER = gql`
  mutation AddUser($name: String!, $age: Int) {
    addUser(input: { name: $name, age: $age }) {
      name
      age
    }
  }
`;
const User = () => {
  const { loading, error, data } = useQuery(GET_USER);
  const [addUser] = useMutation(ADD_USER);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;
  return (
    <div>
      {data.user.map((details) => {
        return (
          <div key={Math.random(1 * 1000)}>
            <p>Name: {details.name}</p>
            <p>Age: {details.age}</p>
          </div>
        );
      })}
      <button
        onClick={(e) => {
          e.preventDefault();
          addUser({ variables: { name: "John", age: 26 } });
        }}
      >
        Add User
      </button>
    </div>
  );
};

export default User;
