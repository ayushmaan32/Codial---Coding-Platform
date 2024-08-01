import React from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";

type WorkSpaceProps = {};

const WorkSpace: React.FC<WorkSpaceProps> = () => {
  return (
    <Split className="split" direction="horizontal" minSize={0}>
      <ProblemDescription />
      <div>editor</div>
    </Split>
  );
};
export default WorkSpace;
