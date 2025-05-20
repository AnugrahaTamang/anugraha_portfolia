import { SecondProject } from "@/components/SecondProject";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import React from "react";

const Project = () => {
  return (
    <div className="flex justify-around items-center h-full w-full flex-wrap">
      <SecondProject />
      <ThreeDCardDemo />
    </div>
  );
};

export default Project;
