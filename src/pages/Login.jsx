import React from "react";

function Login() {
  return (
    <div className="w-full min-h-screen flex  ">
      <div className="w-full border">
        <h1>login image</h1>
      </div>

      <div className="w-170 border h-screen bg-[#F8F9FF] font-inter px-20 py-22 ">
        <div className="w-full">
          <h1 className="text-3xl font-[500] ">Welcome back</h1>
          <p className="text-sm mt-2 text-[#434655]">
            Log in to your AddHelp dashboard
          </p>

          <div className="flex w-full mt-5 mb-3 gap-4">
            <div>
              <button className="border border-[#C3C6D7] text-sm px-10 py-2 rounded-xl ">
                Google
              </button>
            </div>
            <div>
              <button className="border border-[#C3C6D7] text-sm px-10 py-2 rounded-xl ">
                Apple
              </button>
            </div>
          </div>
          <div className="flex items-center mb-3 ">
            <hr className="w-full border-[#ccc]" />

            <p className="w-full ml-5  text-sm">OR EMAIL</p>

            <hr className="w-full border-[#ccc]" />
          </div>
          <div>
            <form action="">
              <label htmlFor="" className="font-[500] text-sm">
                Email Address
              </label>{" "}
              <br />
              <input
                type="email"
                placeholder="name@company.com"
                className="border text-sm border-[#C3C6D7] w-full px-4 py-2 rounded-md"
              />{" "}
              <br />
              <br />
              <label htmlFor="" className="font-[500] text-sm">
                Password
              </label>{" "}
              <br />
              <input
                type="password"
                className="border border-[#C3C6D7] w-full px-4 py-2 rounded-md text-sm mb-3"
              />{" "}
              <br />
              <div className="flex gap-2 items-center mb-3">
                <input type="checkbox" name="remember" id="" />{" "}
                <p className="text-sm text-[#434655]">Remember me for 30 days</p> <br />
              </div>
              <button className="w-full text-sm py-2 rounded-md bg-[#004AC6] mb-15 text-white">
                Sign In
              </button>
            </form>
            <div className="flex items-center justify-center mb-15 text-sm text-[#434655]">
              <p>New to AddHelp?</p>
              <button className="text-md text-[#004AC6] font-[500]">
                Start your journey
              </button>
            </div>
            <hr className="w-full mb-2 border-[#ccc] "/>
            <div>
              <ul className="flex item-center gap-2 text-xs text-[#434655]">
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
