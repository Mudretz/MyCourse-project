import React, { useState } from "react";
import api from "../api";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
      setUsers(users.filter((allUsers) => {
        return allUsers._id != userId._id
      }))
    };
    const renderPhrase = (number) => {
      if (number.length > 0) {
      let word = ``;
      number.length >= 2 && number.length <= 4 ? word = 'человека' : word = 'человек'
      let phrase = `${number.length} ${word} тусанет с тобой сегодня`;
      return phrase } else if (number.length === 0) {
        return 'Никто с тобой не тусанет'
      }
    };

    const reverseColorPhrase = () => {
      let reverseColor = '';
      users.length > 0 ? reverseColor = 'primary' : reverseColor = 'danger'
      return reverseColor;
    };

    return (  
  <> 
    <h1 className={`badge fs-3 bg-${reverseColorPhrase()}`}>{renderPhrase(users)}</h1>
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Качества</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретился, раз</th>
        <th scope="col">Оценка</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
        {users.map((user) => (
            <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.qualities.map((quality) => (
                <span className={`badge m-1 bg-${quality.color}`}> {quality.name} </span>
                ))}</td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{`${user.rate}/5`}</td>
                <td><button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={() => handleDelete(user)}
                        >
                          delete
                        </button></td>
            </tr>   
        ))}
    </tbody>
  </table>
  </>
  );
};

export default Users;