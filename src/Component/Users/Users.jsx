/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Users = ({ users }) => {
    const { id, name, email, phon } = users;
    return (
        <div className='p-5 bg-purple-600 hover:bg-purple-900 duration-500 cursor-pointer space-y-3 rounded-lg text-white '>
            <p>{id}</p>
            <h2 className='text-2xl'>{name}</h2>
            <p className='text-sm '>User Email:{email}</p>
            <p className='text-sm '>Phon Number:{phon}</p>
            <div className='ml-16 gap-6 flex'>
                <Link className='bg-purple-950 p-5 rounded-lg hover:bg-purple-500 duration-500 mb-3' to={`/users/${id}`}>Show Details</Link>
                <Link className='bg-purple-950 p-5 rounded-lg hover:bg-purple-500 duration-500 mb-3' to={`/users/${id}`}>
                    <button>Click Me</button>
                </Link>
            </div>
        </div>
    );
};

export default Users;