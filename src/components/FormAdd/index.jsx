import { useEffect, useState } from "react";

const FormAdd = ({ userAddHandler, selectUser }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  useEffect(() => {
    if (selectUser) {
      setUserData(selectUser);
    }
  }, [selectUser]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    userAddHandler({ ...userData, ...(selectUser ? {} : { id: Date.now() }) });
    setUserData({
      firstName: "",
      lastName: "",
      age: "",
    });
  };

  const onChangeHandlere = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const { firstName, lastName, age } = userData;
  return (
    <form className="add-form" onSubmit={onSubmitHandler}>
      <label>
        First Name{" "}
        <input
          type="text"
          name="firstName"
          onChange={onChangeHandlere}
          value={firstName}
        />
      </label>
      <label>
        Last Name{" "}
        <input
          type="text"
          name="lastName"
          onChange={onChangeHandlere}
          value={lastName}
        />
      </label>
      <label>
        Age{" "}
        <input
          type="number"
          name="age"
          onChange={onChangeHandlere}
          value={age}
        />
      </label>
      <button>Add</button>
    </form>
  );
};

export default FormAdd;
