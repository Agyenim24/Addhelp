import React, { use, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import LoginImage from "../assets/log.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("")
  
 const [password, setPassword] = useState("")
  function handleChange(e){
    setEmail(e.target.value);
    
  }
  function handleSubmit(e){
      e.preventDefault();
      alert(email);
  }
  return (
    <div className="w-full min-h-screen flex  ">
      <div className="w-full  ">
        <img src={LoginImage} alt="login" className="object-cover h-auto" />
      </div>

      <div className="w-170  h-screen bg-[#F8F9FF] font-inter px-20 py-22 ">
        <div className="w-full">
          <h1 className="text-3xl font-[500] ">Welcome back</h1>
          <p className="text-sm mt-2 text-[#434655]">
            Log in to your AddHelp dashboard
          </p>

          <div className="flex w-full mt-5 mb-3 gap-4">
            <div>
              <button className="border w-full border-[#C3C6D7] text-sm px-10 py-2 rounded-lg flex  items-center gap-2 cursor-pointer hover:bg-[#DBE1FF] transition duration-300 ease-in-out">
                <span>
                  {" "}
                  <FcGoogle size={23} />
                </span>
                Google
              </button>
            </div>
            <div className="w-full">
              <button className="border w-full cursor-pointer border-[#C3C6D7] text-sm px-10 py-2 rounded-lg flex items-center gap-2 hover:bg-[#DBE1FF] transition duration-300 ease-in-out">
                <SiApple size={23} />
                Apple
              </button>
            </div>
          </div>
          <div className="flex items-center mb-3 gap-4">
            <hr className=" flex-1 border-[#ccc]" />

            <span className="  text-sm tracking-wider">OR EMAIL</span>

            <hr className=" flex-1 border-[#ccc]" />
          </div>
          <div>
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="" className="font-[500] text-sm">
                Email Address
              </label>{" "}
              <br />
              <input
                onChange={handleChange}
                value={email}
                type="email"
                required
                placeholder="name@company.com"
                className="border text-sm border-[#C3C6D7] w-full px-4 py-2 rounded-lg outline-[#ccc]"
              />{" "}
              <br />
              <br />
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="" className="font-[500] text-sm">
                    Password
                  </label>
                </div>
                <button className="text-sm text-[#004AC6] cursor-pointer font-[500] hover:text-blue-500 transition duration-300 ease-in-out ">
                  Forget Password?
                </button>
              </div>
              <div className="relative">
                <input
                onChange={handleChange}
                  vlaue={password}
                  required
                  type={showPassword ? "text" : "password"}
                  className="border border-[#C3C6D7] w-full px-4 py-2 rounded-lg text-sm outline-[#ccc] "
                />
                <button
                  className="absolute   right-3 top-1/2 -translate-y-1/2"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FiEyeOff className="cursor-pointer" />
                  ) : (
                    <FiEye className="cursor-pointer" />
                  )}{" "}
                </button>
              </div>
              <br />
              <div className="flex gap-2 items-center mb-3">
                <input type="checkbox" name="remember" id="" />{" "}
                <p className="text-sm text-[#434655]">
                  Remember me for 30 days
                </p>{" "}
                <br />
              </div>
              <input type="submit" value='Sign In' className="w-full cursor-pointer text-sm py-2 rounded-lg bg-[#004AC6] mb-15 text-white hover:bg-blue-500 transition duration-300 ease-in-out"/>
            </form>
            <div className="flex items-center justify-center mb-15 text-sm text-[#434655] gap-2">
              <p>New to AddHelp?</p>
              <button className="text-md cursor-pointer text-[#004AC6] font-[500] hover:text-blue-500 transition duration-300 ease-in-out">
                Start your journey
              </button>
            </div>
            <hr className="w-full mb-2 border-[#ccc] " />
            <div>
              <ul className="flex item-center gap-2 text-xs  justify-center">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Help Center</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
