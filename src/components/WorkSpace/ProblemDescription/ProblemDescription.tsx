import { DBProblem, Problem } from "@/utils/types/problem.";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "@/firebase/firebase";

import CircleSkeleton from "@/components/LoadingSkeleton/CircleSkeleton";
import RectangleSkeleton from "@/components/LoadingSkeleton/RectangleSkeleton";

type ProblemDescriptionProps = {
  problem: Problem;
};

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problem }) => {
  const { currentProblem, loading } = useGetCurrentProblelem(problem.id);
  return (
    <div className="bg-dark-layer-1">
      {/* TAB */}
      <div className="flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden">
        <div
          className={
            "bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"
          }
        >
          Description
        </div>
      </div>

      <div className="flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto">
        <div className="px-5">
          {/* Problem heading */}
          <div className="w-full">
            <div className="flex space-x-4">
              <div className="flex-1 mr-2 text-lg text-white font-medium">
                {problem.title}
              </div>
            </div>
            {!loading && currentProblem && (
              <div className="flex items-center mt-3">
                <div
                  className={`${
                    currentProblem?.difficulty === "Easy"
                      ? "text-dark-green-s bg-dark-green-s"
                      : currentProblem?.difficulty === "Medium"
                      ? "text-dark-yellow bg-dark-yellow"
                      : "text-dark-pink bg-dark-pink"
                  } inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
                >
                  {!loading && currentProblem?.difficulty}
                </div>
                <div className="rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s">
                  <BsCheck2Circle />
                </div>
                <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6">
                  <AiFillLike />
                  <span className="text-xs">
                    {!loading && currentProblem?.likes}
                  </span>
                </div>
                <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6">
                  <AiFillDislike />
                  <span className="text-xs">
                    {!loading && currentProblem?.dislikes}
                  </span>
                </div>
                <div className="cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 ">
                  <TiStarOutline />
                </div>
              </div>
            )}
            {loading && (
              <div className="flex items-center space-x-2 mt-3">
                <RectangleSkeleton />
                <CircleSkeleton />
                <RectangleSkeleton />
                <RectangleSkeleton />
                <CircleSkeleton />
              </div>
            )}
            {/* Problem Statement(paragraphs) */}
            <div className="text-white text-sm">
              <div
                dangerouslySetInnerHTML={{ __html: problem.problemStatement }}
              />
            </div>
            {/* Examples */}
            <div className="mt-4">
              {problem?.examples.map((example, index) => (
                <div key={example?.id}>
                  <p className="font-medium text-white ">
                    Example 1:{index + 1}{" "}
                  </p>
                  {example?.img && (
                    <Image
                      src={example?.img}
                      alt="example_img"
                      width={300}
                      height={120}
                      className="mt-3"
                    />
                  )}
                  <div className="example-card">
                    <pre>
                      <strong className="text-white">
                        Input: {example?.input}{" "}
                      </strong>
                      <br />
                      <strong>Output:</strong> {example?.output} <br />
                      {example?.explanation && (
                        <>
                          <strong>Explanation:</strong>
                          {example?.explanation}
                        </>
                      )}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
            {/* Constraints */}
            <div className="my-5 pb-4">
              <div className="text-white text-sm font-medium">Constraints:</div>
              <ul className="text-white ml-5 list-disc">
                <div
                  dangerouslySetInnerHTML={{ __html: problem.constraints }}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProblemDescription;

function useGetCurrentProblelem(problemId: string) {
  const [currentProblem, setCurrentProblem] = useState<DBProblem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const getCurrentProblem = async () => {
      const docRef = doc(firestore, "problems", problemId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCurrentProblem({
          id: docSnap.id,
          ...docSnap.data(),
        } as DBProblem);
        console.log("Document data:", typeof docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      setLoading(false);
    };

    getCurrentProblem();
  }, [problemId]);

  return {
    currentProblem,
    loading,
  };
}
