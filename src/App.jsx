import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => setUsers(res.data));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("users", JSON.stringify(users));
  // }, [users]);

  const addUser = (user) => {
    axios.post("http://localhost:5000/users", user).then((res) => {
      setUsers([...users, res.data]);
    });
  };

   const deleteUser = (id) => {
    axios.delete("http://localhost:5000/users/${id}").then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold text-center mb-4">Gestión de Usuarios</h1>
      <AddUser addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
