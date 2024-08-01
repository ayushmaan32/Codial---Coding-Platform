import Topbar from "@/components/Topbar/Topbar";
import WorkSpace from "@/components/WorkSpace/WorkSpace";
import React from "react";

type ProblemsPageProps = {};

const ProblemsPage: React.FC<ProblemsPageProps> = () => {
  return (
    <>
      <Topbar problemPage />
      <WorkSpace />
    </>
  );
};
export default ProblemsPage;
