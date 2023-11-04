/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigation = useNavigate()
    const handelShowDetails = () => {
        navigation(`/posts/${id}`)
    }
    return (
        <div className='bg-lime-500 hover:bg-lime-600 duration-500 flex flex-col p-6 my-6 rounded-lg space-y-4 relative'>
          <div className="flex-grow">
          <p className='text-xl'>{id}</p>
            <h1 className='text-2xl bold text-center uppercase'>{title}</h1>
            <h1 className=' text-xl text-white'>{body}</h1>
            <br />
          </div>
            <div className=' flex justify-between'>
                <Link to={`/posts/${id}`}><button className='py-2 px-4 rounded-lg bg-slate-700 hover:bg-slate-400 duration-500  text-white'>Click Me</button></Link>
                <Link to={`/posts/${id}`}>
                    </Link>

                    <button onClick={handelShowDetails} className='py-2 px-4 rounded-lg bg-slate-700 hover:bg-slate-400 duration-500  text-white'>Show Details </button>

            </div>
        </div>
    );
};

export default Post;