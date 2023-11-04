/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';


const UserDetails = () => {
    const user = useLoaderData();
    const {name,username,email,phone,website} = user

    const navigation = useNavigate();
    const handelGoBack = () =>{
        navigation(-1);
    }

    return (
        <div className='bg-sky-500 p-8 w-[350px] text-white m-auto rounded-lg'>
            <h1 className='text-2xl'>Name {name}</h1>
            <p  className=''>UserName:{username}</p>
            <p>Email:{email}</p>
            <p>Phon No:{phone}</p>
            <p>Viset: <a href="">{website}</a></p>

            <div className='my-3'>
                <button onClick={handelGoBack}  className='w-full py-3 px-5 rounded-lg bg-emerald-600 hover:bg-emerald-500 duration-500'>Go Back</button>
            </div>
        </div>
    );
};

export default UserDetails;