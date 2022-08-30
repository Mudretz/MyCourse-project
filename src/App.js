import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";
import SearchStatus from "./components/searchStatus";


function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
      setUsers(users.filter((allUsers) => {
        return allUsers._id != userId._id
      }))
    };
  return (
  <>
    <SearchStatus length={users.length}/>
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Качества</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретился, раз</th>
        <th scope="col">Оценка</th>
        <th scope="col">Избранное</th>
        <th scope="col"></th>
      </tr>
    </thead>
    {users.map((user) => (
      <Users key={user._id} {...user} onDelete={handleDelete}/>
    ))}
    </table>
  </>
  );
}
export default App;