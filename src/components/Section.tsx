import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode; // children의 타입 정의
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return <section className="flex-col flex items-center">{children}</section>;
};

export default Section;