import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return toast.error("Email and password are required");
    }

    // Dummy login check
    if (email === "test@example.com" && password === "123456") {
      toast.success("Login successful!");
      localStorage.setItem("loggedInUser", "Test User");
      setTimeout(() => navigate("/home"), 1000);
    } else {
      toast.error("Invalid credentials. Try test@example.com / 123456");
    }
  };

  return (
    <div >
      <div >
        <h1 >Welcome Back</h1>
        <p >Please login to your account</p>

        <form onSubmit={handleLogin} >
          <div>
            <label  htmlFor="email">
              Email Address
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="example@email.com"
              value={loginInfo.email}
             
            />
          </div>

          <div>
            <label  htmlFor="password">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password"
              value={loginInfo.password}
              
            />
          </div>

          <div >
            <label >
              <input type="checkbox"  />
              Remember me
            </label>
            <Link to="#" >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            
          >
            Login
          </button>
        </form>

        <p >
          Don’t have an account?{" "}
          <Link to="/signup" >
            Sign up
          </Link>
        </p>
      </div>

      <ToastContainer position="top-center" />
    </div>
  );
}

export default Login;
