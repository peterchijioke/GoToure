import React from "react";
import UserList from "../Components/UserList";

const Users = () => {
  const Users = [
    {
      id: "u1",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      name: "peter chijioke",
      places: "3",
    },
  ];
  return <UserList items={Users} />;
};

export default Users;
