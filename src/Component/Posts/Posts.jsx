/* eslint-disable no-unused-vars */
import React from 'react';
import Post from '../Post/Post';
import { useLoaderData } from 'react-router-dom';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2 className='text-2xl text-center bg-purple-400 p-5 rounded-lg font-semibold text-white'>Total Posts:{posts.length}</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;