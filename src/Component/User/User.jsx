/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Users from '../Users/Users';

const User = () => {
    const user = useLoaderData();
    return (
        <div>
            <h2 className='text-2xl text-center bg-purple-400 p-5 rounded-lg font-semibold text-white'>Total User:{user.length}</h2>
            <div className='grid md:grid-cols-3 gap-5 mt-5'>
                {
                    user.map(users => <Users key={users.id} users={users}></Users>)
                }
            </div>
        </div>
    );
};

export default User;