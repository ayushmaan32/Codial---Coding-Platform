import React, { useState } from "react";
import PreferenceNav from "./PreferenceNav/PreferenceNav";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { Problem } from "@/utils/types/problem.";

type PlayGroundProps = {
  problem: Problem;
};

const PlayGround: React.FC<PlayGroundProps> = ({ problem }) => {
  const [activeId, setActiveId] = useState<number>(0);
  return (
    <>
      <div className="flex flex-col bg-dark-layer-1 overflow-x-hidden">
        <PreferenceNav />
        <Split
          className="h-[calc(100vh-94px)]"
          direction="vertical"
          minSize={60}
          sizes={[60, 40]}
        >
          <div className="w-full -z-40">
            <CodeMirror
              value={problem?.starterCode}
              extensions={[javascript({ jsx: true })]}
              theme={vscodeDark}
            />
          </div>

          {/* TestCase */}
          <div className="w-full overflow-auto px-5 z-50">
            {/* TestCase heading */}
            <div className="flex h-10 items-center space-x-6">
              <div className="flex flex-col h-full relative justify-center cursor-pointer">
                <div className="text-sm font-medium leading-5 text-white">
                  Testcase
                </div>
                <hr className="absolute bottom-0 bg-white h-0.5 w-full border-none rounded-full" />
              </div>
            </div>

            <div className="flex">
              {/* case 1 */}

              {problem.examples.map((example, index) => (
                <div
                  className="mr-2 items-start mt-2 text-white"
                  key={example?.id}
                  onClick={() => setActiveId(index)}
                >
                  <div className="flex flex-wrap items-center gap-y-4">
                    <div
                      className={`font-medium items-center focus:outline-none bg-dark-fill-3 hover:bg-dark-fill-2 rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap transition-all
                      ${activeId == index ? "text-white" : "text-gray-400"}
                      `}
                    >
                      Case {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="font-semibold my-4">
              <p className="text-white font-medium text-sm mt-4">Input</p>
              <div className="cursor-text w-full rounded-lg px-3 py-[10px] text-white bg-dark-fill-3 mt-2">
                {problem.examples[activeId].input}
              </div>
              <p className="text-white font-medium text-sm mt-4">Output</p>
              <div className="cursor-text w-full rounded-lg px-3 py-[10px] text-white bg-dark-fill-3 mt-2">
                {problem.examples[activeId].output}
              </div>
            </div>
          </div>
        </Split>
      </div>
    </>
  );
};
export default PlayGround;
