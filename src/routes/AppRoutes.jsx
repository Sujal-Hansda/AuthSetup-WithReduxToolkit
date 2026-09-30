import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import MainLayout from "../layout/MainLayout"
import Homepage from '../pages/HomePage'
import { RouterProvider } from 'react-router'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/authSlice'
import PublicProtected from './protected/PublicProtected'
import MainProtected from './protected/MainProtected'
import ShopPage from '../pages/ShopPage'
import AboutPage from '../pages/AboutPage'

const AppRoutes = () => {

  let {dispatch} = useDispatch()



  const hydrateUser = ()=>
  {
    console.log("Hydration Processed...");
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser)
    {
      toast.error("Unauthorized user")
      return;
    }
     dispatch(addUser(loggedInUser)); 
  }

  useEffect(()=>
  {
    hydrateUser;
  },[])

  let router = createBrowserRouter([
    {
      path:"/",
      element:<PublicProtected/>,
      children:[{
        path:"",
        element:<AuthLayout/>,
      children:[{
        path:"",
        element:<LoginPage/>

      },
      {
        path:"register",
        element:<RegisterPage/>
      },
    ]
  
    }]

    },
    {
      path:"/main",
      element:<MainProtected/>,
      children:[{
        path:"",
        element:<MainLayout />,
      children:[{
        path:"",
        element:<Homepage />
      },
      {
        path:"shop",
        element:<ShopPage/>
      },
      {
        path:"about",
        element:<AboutPage/>
      }
      

    ]
      }]
    }

  ])




  return <RouterProvider  router={router}/>
}

export default AppRoutes