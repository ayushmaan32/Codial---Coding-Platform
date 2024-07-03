import { useAmp } from "next/amp";
import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, app } from "@/firebase/firebase";
import { getAuth } from "firebase/auth";
import Logout from "../Logout/Logout";
import { useSetRecoilState } from "recoil";
import authModalState from "@/atoms/authModalAtom";

type TopbarProps = {};

const Topbar: React.FC<TopbarProps> = () => {
  const [user, loading] = useAuthState(getAuth(app));
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
      <div
        className={`flex w-full items-center justify-center max-w-[1000px] mx-auto`}
      >
        <Link href="/" className="h-[22px] flex-1">
          <img src="/logo-full.png" alt="Logo" className="h-full" />
        </Link>

        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div>
            <a
              href="https://www.buymeacoffee.com/burakorkmezz"
              target="_blank"
              rel="noreferrer"
              className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2"
            >
              Premium
            </a>
          </div>
          {!user && !loading && (
            <Link
              href="/auth"
              onClick={(prev) =>
                setAuthModalState({ ...prev, type: "login", isOpen: true })
              }
            >
              <button className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded ">
                Sign In
              </button>
            </Link>
          )}
          {user && (
            <div className="cursor-pointer group relative">
              <img
                src="/avatar.png"
                alt="avatar"
                className="h-8 w-8 rounded-full"
              />
              <div className="absolute top-11 -right-7 mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-110 scale-0 transition-all duration-300 ease-in-out">
                <p className="text-sm">{user.email}</p>
              </div>
            </div>
          )}
          {user && <Logout />}
        </div>
      </div>
    </nav>
  );
};
export default Topbar;
