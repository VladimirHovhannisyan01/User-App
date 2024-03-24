import React from "react";
import UserRow from "../UserRow";

const UserTable = ({ users, userDeleteHandler, userEditHandler }) => {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            user.firstName && (
              <UserRow
                key={user.id}
                user={user}
                userDeleteHandler={userDeleteHandler}
                userEditHandler={userEditHandler}
              />
            )
          );
        })}
      </tbody>
    </table>
  );
};

export default UserTable;
