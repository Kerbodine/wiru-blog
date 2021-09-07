import React from "react";

import logo from "../logo512.png";

export default function Signup() {
  return (
    <div className="w-screen h-[calc(100vh-4rem)] bg-white flex items-center justify-center">
      <form className="w-[300px] rounded-2xl bg-gray-100 shadow-md p-8 text-black relative">
        <img
          className="w-24 h-24 border-8 border-gray-100 rounded-2xl bg-white mx-auto -mt-16"
          src={logo}
          alt=""
        ></img>
        <h3 className="mt-4 text-2xl text-center">Create a new account</h3>
        <h4 className="text-gray-500 mt-8 text-sm">Display name:</h4>
        <input className="w-full h-8 bg-gray-200 rounded-md outline-none px-2"></input>
        <h4 className="text-gray-500 mt-2 text-sm">Email:</h4>
        <input
          type="email"
          className="w-full h-8 bg-gray-200 rounded-md outline-none px-2"
        ></input>
        <h4 className="text-gray-500 mt-2 text-sm">Password:</h4>
        <input
          type="password"
          className="w-full h-8 tracking-widest bg-gray-200 rounded-md outline-none px-2"
        ></input>
        <div className="flex justify-center mt-8">
          <button className="mt-1 px-2 py-1 w-full rounded-md bg-gray-300 hover:bg-accent hover:text-white">
            Create account
          </button>
        </div>

        <button className="mt-8 text-sm text-gray-500">
          Already have an account?
          <span className="ml-2 text-black hover:underline">Sign in</span>
        </button>
      </form>
    </div>
  );
}
