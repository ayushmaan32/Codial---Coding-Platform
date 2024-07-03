import { problems } from "@/Problems/problem";
import Link from "next/link";
import React, { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import YouTube from "react-youtube";
import { IoClose } from "react-icons/io5";
type ProblemtableProps = {};

const Problemtable: React.FC<ProblemtableProps> = () => {
  const [youtubePlayer, setYoutubePlayer] = useState({
    isOpen: false,
    videoId: "",
  });
  return (
    <>
      <tbody className="text-white text-sm">
        {problems?.map((item, index) => {
          return (
            <tr
              key={item.id}
              className={`${index % 2 == 1 ? "bg-dark-layer-1" : ""}`}
            >
              <td className="px-2 py-4  font-medium whitespace-nowrap text-dark-green-s">
                <BsCheckCircle fontSize={18} width={18} />
              </td>
              <td className="px-6 py-4">
                <Link
                  href={`/problem-${item.id}`}
                  className="hover:text-blue-500 cursor-pointer"
                >
                  {item.title}
                </Link>
              </td>
              <td
                className={`${
                  item.difficulty === "Easy"
                    ? "text-dark-green-s"
                    : item.difficulty === "Medium"
                    ? "text-dark-yellow"
                    : "text-dark-pink"
                }`}
              >
                {item.difficulty}
              </td>
              <td className="px-6 py-4">{item?.category}</td>
              <td className="px-6 py-4">
                {item?.videoId ? (
                  <AiFillYoutube
                    onClick={() =>
                      setYoutubePlayer({
                        isOpen: true,
                        videoId: item?.videoId as string,
                      })
                    }
                    fontSize={30}
                    className="hover:text-red-600 cursor-pointer"
                  />
                ) : (
                  <p className="">Coming Soon</p>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
      {youtubePlayer.isOpen && (
        <tfoot className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
          <div
            className="bg-black z-10 opacity-60 top-0 left-0 w-screen h-screen absolute"
            onClick={() => setYoutubePlayer({ isOpen: false, videoId: "" })}
          ></div>
          <div className="w-full h-full z-50 px-6 relative max-w-4xl">
            <div className="w-full h-full relative flex items-center justify-center">
              <div className="w-full relative">
                <IoClose
                  fontSize={35}
                  className="absolute top-2 right-0 cursor-pointer"
                  onClick={() =>
                    setYoutubePlayer({ isOpen: false, videoId: "" })
                  }
                />
                <YouTube
                  videoId={youtubePlayer.videoId}
                  loading="lazy"
                  iframeClassName="w-full min-h-[500px]"
                />
              </div>
            </div>
          </div>
        </tfoot>
      )}
    </>
  );
};

export default Problemtable;
