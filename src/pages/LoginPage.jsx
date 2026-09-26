import React from "react";
import { useAuth } from "../hooks/authHooks";

const LoginPage = () => {
  
  let {navigate,register,handleSubmit,errors,loginForm} = useAuth();
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#D7F205]">
            SkyMart ⚡
          </h1>

          <p className="text-zinc-400 mt-2">
            Welcome back! Login to your account.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(loginForm)} className="space-y-5">

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-300 mb-2"
            >
              Email
            </label>

            <input
            {...register('email',
              {
                required:"email is required",
              })
            }
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 outline-none focus:border-[#D7F205] transition"
            />
          { errors.email && <p className="text-red-500">{errors.email.message}</p>}            

          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-zinc-300 mb-2"
            >
              Password
            </label>

            <input
            {...register('password',
              {
                required:"password is required",
                minLength:{
                  value:8,
                  message:"minimum 8 characters required"
                }
              })
            }
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 outline-none focus:border-[#D7F205] transition"
            />
            { errors.password && <p className="text-red-500">{errors.password.message}</p>}            

          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#D7F205] text-black font-bold hover:bg-[#c5df00] transition"
          >
            Login
          </button>

        </form>

        {/* Register */}
        <p className="text-center text-sm text-zinc-400 mt-6">
          Don't have an account?{" "}
          <button
            onClick={()=>navigate("/register")}
            href="/register"
            className="cursor-pointer text-[#D7F205] font-semibold hover:underline"
          >
            Register
          </button>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
