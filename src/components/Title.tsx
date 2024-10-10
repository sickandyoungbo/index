import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode; 
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <p className='border-b-[2px] border-black pb-2 dream-cottage text-[22px] font-bold'>{children}</p>
  )
}

export default Title;