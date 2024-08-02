import React from "react";
import PreferenceNav from "./PreferenceNav/PreferenceNav";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

type PlayGroundProps = {};

const PlayGround: React.FC<PlayGroundProps> = () => {
  return (
    <>
      <div className="flex flex-col bg-dark-layer-1">
        <PreferenceNav />
        <Split
          className="h-[calc(100vh-94px)]"
          direction="vertical"
          minSize={60}
          sizes={[60, 40]}
        >
          <div className="w-full">
            <CodeMirror
              value="const a = 1"
              extensions={[javascript({ jsx: true })]}
              theme={vscodeDark}
            />
          </div>
          <div>testcase</div>
        </Split>
      </div>
    </>
  );
};
export default PlayGround;
