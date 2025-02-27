 import { useState } from "react";

function AddUser({ addUser }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addUser({ id: Date.now(), name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-3 mr-2"
        placeholder="Nombre del usuario"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded">
        Agregar
      </button>
    </form>
  );
}

export default AddUser;
