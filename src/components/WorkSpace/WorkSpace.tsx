import React from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import PlayGround from "./PlayGround/PlayGround";

type WorkSpaceProps = {};

const WorkSpace: React.FC<WorkSpaceProps> = () => {
  return (
    <Split
      className="split"
      direction="horizontal"
      minSize={0}
      sizes={[33, 77]}
    >
      <ProblemDescription />
      <PlayGround />
    </Split>
  );
};
export default WorkSpace;
