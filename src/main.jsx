import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Demand from './components/Demand/Demand';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/Error/ErrorPage';
import ViewDetails from './components/ViewDetails';

//import Feature from './components/Job/Feature';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    
    children: [
      {
        path: '/',
        element: <Demand></Demand>,
        loader: () => fetch('/data.json'),
      },
      //{
      //  path: 'feature/:featureId',
      //  element: <Feature></Feature>
      //},
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'applied jobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: '/viewDetails/:id',
        element: <ViewDetails></ViewDetails>,
        loader: ()=>fetch(`/feature.json`)
      
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
