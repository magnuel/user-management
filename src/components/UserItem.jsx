function UserItem({ user, deleteUser }) {
    return (
      <div className="bg-gray-200 p-3 flex justify-between items-center mb-2 rounded">
        <span>{user.name}</span>
        <button onClick={() => deleteUser(user.id)} className="bg-red-500 text-white px-2 py-1 rounded">
          Eliminar
        </button>
      </div>
    );
  }
  
  export default UserItem;
