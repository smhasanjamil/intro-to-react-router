import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import First from './components/First/First';
import Friends from './Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//   },
//   {
//     path: "/about",
//     element: <About></About>,
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <First></First>,
      },
      {
        path: "friends",
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: "/friend/:friendID",
        element: <FriendDetails></FriendDetails>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`)
      },
      {
        path: "/post",
        element: <Posts />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: "/post/:postID",
        element: <PostDetails></PostDetails>,
        loader: (params) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.params.postID}`)
        // loader: (params) => console.log(params.params.postID)
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      // {
      //   path: "*",
      //   element: <div>404</div>
      // },
      {
        path: "*",
        element: <NotFoundPage></NotFoundPage>,
      }
    ],

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
