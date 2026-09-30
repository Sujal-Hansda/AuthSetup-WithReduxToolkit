import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useSearchParams } from 'react-router'
import { store } from '../../app/store'
import { Navigate } from 'react-router'

const MainProtected = () => {

  let {user} = useSelector((store)=>store.auth)

  if (!user)
  {
    return <Navigate to={"/"}/>
  }

  return <Outlet />
}

export default MainProtected