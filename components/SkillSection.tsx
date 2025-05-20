// components/SkillsSection.tsx
import React from "react";
import SkillBar from "./SkillBar";

const SkillsSection = () => {
  return (
    <div className="p-6 bg-white text-black dark:bg-black dark:text-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">My Skills</h2>
      <SkillBar skill="JavaScript" level={75} color="bg-yellow-400" />
      <SkillBar skill="TypeScript" level={60} color="bg-blue-400" />
      <SkillBar skill="Node.js" level={80} color="bg-green-500" />
      <SkillBar skill="React" level={80} color="bg-cyan-500" />
      <SkillBar skill="Express.js" level={70} color="bg-gray-600" />
      <SkillBar skill="Next.js" level={50} color="bg-gray-600" />
      <SkillBar skill="AWS" level={50} color="bg-gray-600" />
    </div>
  );
};

export default SkillsSection;
