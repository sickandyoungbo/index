import React, { ReactNode } from "react";

interface ContentContainerProps {
  children: ReactNode; 
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  return <div className="pt-[30px] px-[30px] w-full">{children}</div>;
};

export default ContentContainer;