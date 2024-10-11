import React, { ReactNode } from "react";

interface SubTitleProps {
  children: ReactNode; 
}

const SubTitle: React.FC<SubTitleProps> = ({ children }) => {
  return (
    <p className='text-sm font-semibold pt-5'>{children}</p>
  )
}

export default SubTitle;