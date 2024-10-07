import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode; 
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <p className='border-b-[2px] border-black pb-[7px] dream-cottage pt-[10px] text-[10px] font-bold'>{children}</p>
  )
}

export default Title;