import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext.jsx";

export default function Dasboard() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1>DASHBOARD</h1>
      {!!user && <h2>HI {user.name} ! </h2>}
    </div>
  );
}
// error hai tera about cookies se related
