import authModalState from "@/atoms/authModalAtom";
import React from "react";
import { useSetRecoilState } from "recoil";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleClick = (type: "login" | "register" | "forgotPassword") => {
    setAuthModalState((prev) => ({ ...prev, type }));
  };

  return (
    <form className="space-y-6 px-6 pb-4">
      <h3 className="text-white text-xl font-medium">Sign in</h3>
      <div>
        <label
          htmlFor="email"
          className="font-medium text-sm mb-2 block text-gray-200"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-200 text-white"
          placeholder="name@gmail.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="font-medium text-sm mb-2 block text-gray-200"
        >
          Your password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-200 text-white"
          placeholder="*********"
        />
      </div>
      <button
        type="submit"
        className="text-white bg-brand-orange rounded-lg font-medium text-sm px-5 py-2.5 text-center w-full focus:ring-blue-300 hover:bg-brand-orange-s"
      >
        Login
      </button>
      <button
        className="flex justify-end w-full"
        onClick={() => handleClick("forgotPassword")}
      >
        <a
          href="#"
          className="text-sm block text-brand-orange hover:underline w-full text-right"
        >
          forget password?
        </a>
      </button>
      <div
        className="text-sm font-medium text-gray-500"
        onClick={() => handleClick("register")}
      >
        Not Registered?{" "}
        <a href="#" className="text-blue-700 hover:underline ">
          create account
        </a>
      </div>
    </form>
  );
};
export default Login;
