import UserItem from "./UserItem";

function UserList({ users, deleteUser }) {
  return (
    <div className="mt-5">
      {users.length === 0 ? (
        <p className="text-gray-500 text-center">No hay usuarios registrados.</p>
      ) : (
        users.map((user) => <UserItem key={user.id} user={user} deleteUser={deleteUser} />)
      )}
    </div>
  );
}

export default UserList;
