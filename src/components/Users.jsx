/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Users = () => {

    const users = useLoaderData();

    const handleDelete = _id => {
        console.log('delete', _id);
        fetch(`http://localhost:3000/users/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('Deleted successfully!');
            }
        })
    }

    return (
        <>
            {
                users.map(user => <p 
                    key={user._id}
                    >{user.name} : {user.email} <button
                        onClick={() => handleDelete(user._id)}
                    >X</button></p>)
            }
        </>
    );
};

export default Users; 