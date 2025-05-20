// components/SkillBar.tsx
import React from "react";

interface SkillBarProps {
  skill: string;
  level: number; // Percentage (e.g., 80 means 80%)
  color?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({
  skill,
  level,
  color = "bg-blue-500",
}) => {
  return (
    <div className="mb-4 w-full">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium">{skill}</span>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 overflow-hidden">
        <div
          className={`${color} h-3 rounded-full transition-all duration-1000`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
