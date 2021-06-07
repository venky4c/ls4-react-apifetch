import React from "react";

export default function User({ user }) {
  const { name, id } = user;
  return (
    <div key={id}>
      <p>{name}</p>
    </div>
  );
}
