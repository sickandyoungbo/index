import React from "react"
import heartImgUrl from '../assets/images/heart.png'

interface DateProps {
  day: String;
  date: String;
}

const Date = ({day, date}: DateProps) => {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-xs'>{day}</p>
      <div className='pt-[7px] relative'>
        {day === 'Sat.' && <img className="w-6" src={heartImgUrl} />}
        <p className='text-md absolute top-[8px] left-1/2 -translate-x-1/2'>{date}</p>
      </div>
    </div>
  )
}

export default Date;