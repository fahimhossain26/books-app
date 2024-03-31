import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import Home from './components/home/Home';
import PagesToRead from './components/pagesToRead/PagesToRead';
import ListedBooks from './components/listedBooks/ListedBooks';
import Error from './components/error/Error';
import BooksDetails from './components/bookDetails/BooksDetails';
import About from './components/about/About';
import Contact from './components/contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/pagesTORead',
        element: <PagesToRead></PagesToRead>
      },
      {
      path:'/about',
        element: <About></About>
      },
      {
        path:'/contact',
          element: <Contact></Contact>
        },
      {
        path:'/listedBooks',
        element:<ListedBooks></ListedBooks>,
        loader:()=>fetch('/book.json')
      },
     
      {
        path:'/bookDetails/:bookId',
        element:<BooksDetails> </BooksDetails>,
        loader:()=>fetch('/book.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
