import React, { ReactNode } from "react";

interface SubTitleProps {
  children: ReactNode; 
}

const SubTitle: React.FC<SubTitleProps> = ({ children }) => {
  return (
    <p className='text-xs leading-[1] pt-4'>{children}</p>
  )
}

export default SubTitle;