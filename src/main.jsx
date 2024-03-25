import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Components/Root';
import ErrorPage from './Components/ErrorPage';
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListedBooks from './Components/ListedBooks.jsx';
import PagesToRead from './Components/PagesToRead.jsx';
import Home from './Components/Home.jsx';


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("book.json")
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
