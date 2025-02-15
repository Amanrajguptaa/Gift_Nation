import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://gift-nation.onrender.com/api/user/register",
        { name, email, password }
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleAuth = () => {
	window.open(
		`https://gift-nation.onrender.com/auth/google/callback`,
		"_self"
	);
};

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="flex max-w-4xl w-full bg-white shadow-lg rounded-xl">
        <div className="w-full md:w-1/2 text-white p-6 rounded-l-xl">
          <img className="w-full h-full object-cover rounded-lg" src="/assets/signup.jpg" alt="signup" />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4">Create Account</h2>
          <form onSubmit={formSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-yellow-400 text-white rounded-md hover:bg-yellow-600 transition duration-200"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600">-------------- or 	--------------</p>
            <button className="w-full mt-4 py-4 flex items-center justify-center bg-white text-black rounded-md hover:bg-gray-300 transition duration-200" onClick={googleAuth}>
              <img src="/assets/google.svg" alt="google icon" className="w-5 h-5 mr-2" />
              <span>Sign up with Google</span>
            </button>
          </div>

          <p className="text-center mt-6 text-gray-600">
            Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
