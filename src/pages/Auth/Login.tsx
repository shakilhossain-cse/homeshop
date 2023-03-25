import React from "react";

function Login() {
  return (
    <div className="container py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h1 className="text-2xl uppercase font-medium mb-1">Login</h1>
        <p className="text-gray-600 text-sm mb-6">Welcome Back</p>
        <form>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="text-gray-600 mb-2 block">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="Type your email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-600 mb-2 block">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="Type your email address"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="agreement"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  htmlFor="agreement"
                  className="text-gray-600 cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-primary">
                Forgot Password
              </a>
            </div>
            <div>
              <button className="bg-primary w-full text-white py-2 rounded">
                Login
              </button>
              <p className="text-gray-600 my-2">
                Don't have a account
                <a href="#" className="text-primary">
                  Register Here
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
