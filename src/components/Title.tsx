import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode; 
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <p className='border-b border-black pb-2 dream-cottage text-[17px] leading-[1]'>{children}</p>
  )
}

export default Title;