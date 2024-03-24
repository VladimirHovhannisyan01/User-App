const UserRow = ({ user, userDeleteHandler, userEditHandler }) => {
  return (
    <tr>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.age}</td>
      <td>
        <button onClick={() => userEditHandler(user.id)}>Edit</button>
      </td>
      <td>
        <button onClick={() => userDeleteHandler(user.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default UserRow;
