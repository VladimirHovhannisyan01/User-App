import { useState, useEffect } from "react";
import UserTable from "./components/UserTable";
import FormAdd from "./components/FormAdd";

function App() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const userAddHandler = (user) => {
    const userIndex = users.findIndex((el) => el.id === user.id);
    if (userIndex !== -1) {
      setUsers((prev) => {
        prev[userIndex] = user;
        return prev;
      });
      setEdit(null);
      return;
    }
    console.log(user);
    setUsers((pre) => [user, ...pre]);
  };

  const userDeleteHandler = (id) => {
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  };

  const userEditHandler = (id) => {
    setEdit(users.find((user) => user.id === id));
  };

  return (
    <div className="app">
      <FormAdd userAddHandler={userAddHandler} selectUser={edit} />
      <UserTable
        users={users}
        userDeleteHandler={userDeleteHandler}
        userEditHandler={userEditHandler}
      />
    </div>
  );
}

export default App;
