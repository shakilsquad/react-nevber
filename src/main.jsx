/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Component/About/About.jsx';
import Home from './Component/Home/Home.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Service from './Component/Service/Service.jsx';
import Menu from './Component/Menu/Menu.jsx';
import User from './Component/User/User.jsx';
import UserDetails from './Component/Users/UserDetails/UserDetails.jsx';
import Posts from './Component/Posts/Posts.jsx';
import PostDetails from './Component/PostDetails/PostDetails.jsx';



const router =  createBrowserRouter([
  {
    path: "/",
    // element: <div>hello router</div>,
    element: <Home></Home>,
    children:[
      {
        path:'/about',

        element: <About></About>
      },
      // {
      //   path:'about/:photosId',
      //   loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/photos/${params.photosId}`),
      //   element:<AboutDetails></AboutDetails>
      // },
      {
        path:'/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:'posts/:postsId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postsId}`),
        element:<PostDetails></PostDetails>

      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path:'/service',
        element:<Service></Service>
      },
      {
        path:'menu',
        element:<Menu></Menu>
      },
      {
        path:'user',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<User></User>
      },
      {
        path:'users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>

      }
    ]

  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
