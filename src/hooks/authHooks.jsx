import { useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import { toast } from "react-toastify";


export const useAuth = ()=>
{

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers")) || [])

  const registerForm = (data) => {
   let arr = ([...registeredUsers,data]);
   toast.success("user registered...");
   setRegisteredUsers(arr)
    localStorage.setItem('registeredUsers',JSON.stringify(arr));
  }
  const loginForm = (data) => {
    let user = registeredUsers.find((val)=>
    {
      return val.email === data.email && val.password===data.password;
    })
    if (!user)
    {
      toast.error("invalid something...")
      return;
    }
    if (user)
    {
      dispatch(addUser(user));
      localStorage.setItem('loggedInUser',JSON.stringify(user));
      toast.success("User logged in...")
      reset();
      
    }
    
  }

  let {register,handleSubmit,reset,formState:{errors}} = useForm()

  return {
    navigate,
    register,handleSubmit,
    reset,errors,
    loginForm,
    registerForm
  }
}