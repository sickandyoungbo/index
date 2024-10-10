import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode; 
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return <section className="flex-col flex items-center pt-[50px]">{children}</section>;
};

export default Section;