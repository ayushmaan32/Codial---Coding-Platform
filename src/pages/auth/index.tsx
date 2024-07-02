import AuthModal from "@/components/Modals/AuthModal";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { useRecoilValue } from "recoil";
import authModalState from "@/atoms/authModalAtom";

type AuthProps = {};

const index: React.FC<AuthProps> = () => {
  const authModal = useRecoilValue(authModalState);
  return (
    <div className="bg-gradient-to-b from-gray-500 to-black h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
      <div className="flex items-center justify-center select-none pointer-events-none">
        <img src="/hero.png" alt="img" />
      </div>
      {authModal.isOpen && <AuthModal />}
    </div>
  );
};
export default index;
