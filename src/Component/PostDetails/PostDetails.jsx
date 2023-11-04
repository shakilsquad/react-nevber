/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {

    const post = useLoaderData();
    const { id, title, body } = post;
    
    const navigation = useNavigate();

    const handelGoBack = () =>{
        navigation(-1)
    }

    return (
        <div className='bg-sky-500 hover:bg-sky-600 duration-500  cursor-pointer p-8 w-[350px] text-white m-auto rounded-lg'>
            <p className='text-xl text-black'>Post id:{id}</p>
            <h1 className='text-2xl'>Title:{title}</h1>
            <p className='text-[20px]'><small>{body}</small></p>
            <div className='my-3'>
                <button onClick={handelGoBack} className='w-full py-3 px-5 rounded-lg bg-emerald-600 hover:bg-emerald-500 duration-500'>Go Back</button>
            </div>
        </div>
    );
};

export default PostDetails;