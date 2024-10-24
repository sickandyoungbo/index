import React from "react"
import heartImgUrl from '../assets/images/heart.png'

interface DateProps {
  day: String;
  date: String;
}

const Date = ({day, date}: DateProps) => {
  return (
    <div className='flex flex-col items-center'>
      <p>{day}</p>
      <div className={`${day === 'Sat.' ? 'pt-3' : 'pt-5'} relative`}>
        {day === 'Sat.' && <img className="w-8" src={heartImgUrl} />}
        <p className='absolute top-4 left-1/2 -translate-x-1/2'>{date}</p>
      </div>
    </div>
  )
}

export default Date;