"use client";
import React, { useState } from "react";

const HomePage = () => {
  const [password, setPassword] = useState(true);

  const handlePassword = (pass: string) => {
    if (!pass) {
      setPassword(false);
    }
  };
  return (
    <div className="flex justify-center items-center mt-40">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>

            {!password ? (
              <div>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="password"
                />
                <p className="text-red-500 text-xs italic">
                  Please choose a password.
                </p>
              </div>
            ) : (
              <div>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="password"
                />
                <p className="text-red-500 text-xs italic hidden ">
                  Please choose a password.
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={() => handlePassword}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-400 hover:text-blue-500"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Fakebook Co. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
