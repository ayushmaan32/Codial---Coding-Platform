import Navbar from "@/components/Navbar/Navbar";
import React from "react";

type AuthProps = {};

const index: React.FC<AuthProps> = () => {
  return (
    <div className="bg-gradient-to-b from-gray-500 to-black h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
      <div className="flex items-center justify-center select-none pointer-events-none">
        <img src="/hero.png" alt="img" />
      </div>
    </div>
  );
};
export default index;
