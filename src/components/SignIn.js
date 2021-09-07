import React from "react";

import logo from "../logo512.png";

export default function SignIn() {
  return (
    <div className="w-screen h-[calc(100vh-4rem)] bg-white flex items-center justify-center">
      <form className="w-[300px] rounded-2xl bg-gray-100 shadow-md p-8 text-black relative">
        <img
          className="w-24 h-24 border-8 border-gray-100 rounded-2xl bg-white mx-auto -mt-16"
          src={logo}
          alt=""
        ></img>
        <h3 className="mt-4 text-2xl text-center">Sign in to your account</h3>
        <h4 className="text-gray-500 mt-8 text-sm">Email:</h4>
        <input
          type="email"
          className="w-full h-8 bg-gray-200 rounded-md outline-none px-2"
        ></input>
        <h4 className="text-gray-500 mt-2 text-sm">Password:</h4>
        <input
          type="password"
          className="w-full h-8 tracking-widest bg-gray-200 rounded-md outline-none px-2"
        ></input>
        <p className="text-sm text-right text-gray-500 hover:underline cursor-pointer">
          Forgot password?
        </p>
        <div className="flex items-center mt-4">
          <input type="checkbox" className="mr-2"></input>
          <label className="text-sm text-gray-500">Remember me</label>
        </div>
        <div className="flex justify-center">
          <button className="mt-1 px-2 py-1 w-full rounded-md bg-gray-300 hover:bg-accent hover:text-white">
            Log in
          </button>
        </div>

        <button className="mt-8 text-sm text-gray-500">
          Not a member?
          <span className="ml-2 text-black hover:underline">Sign up now</span>
        </button>
      </form>
    </div>
  );
}
