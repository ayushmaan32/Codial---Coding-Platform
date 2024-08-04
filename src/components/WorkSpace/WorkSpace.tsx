import React from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import PlayGround from "./PlayGround/PlayGround";
import { problemList } from "@/utils/Problems";
import { Problem } from "@/utils/types/problem.";

type WorkSpaceProps = {
  problem: Problem;
};

const WorkSpace: React.FC<WorkSpaceProps> = ({ problem }) => {
  return (
    <Split
      className="split"
      direction="horizontal"
      minSize={0}
      sizes={[38, 62]}
    >
      <ProblemDescription problem={problem} />
      <PlayGround problem={problem} />
    </Split>
  );
};
export default WorkSpace;
