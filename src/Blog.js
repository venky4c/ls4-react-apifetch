import React from "react";

export default function Blog({ blog }) {
  const { title } = blog;
  return <div>{title}</div>;
}
