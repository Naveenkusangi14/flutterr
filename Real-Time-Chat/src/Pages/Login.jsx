import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

export default function Login() {
  return (
    <div className="flex flex-col items-center p-28">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Login</h1>
          <form className="space-y-4 md:space-y-6" method="POST">

            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-Mail</label>
              <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required="" />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
            </div>
            {/* Use Link to navigate to signup page */}
            <Link to="/signup" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Create an account
            </Link>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">If You don't have an account? <a className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="/signin">Sign up here</a></p>
          </form>
        </div>
      </div>
    </div>
  );
}
