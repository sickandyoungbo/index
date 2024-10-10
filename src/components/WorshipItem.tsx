import React from "react"

interface WorshipItemProps {
  leftText: String;
  middleText?: String;
  rightText: String;
  isFirst?: Boolean;
  hasMiddle?: Boolean;
}

const WorshipItem = ({ leftText, middleText, rightText, isFirst, hasMiddle } : WorshipItemProps) => {
  return (
    <div className={`flex justify-between items-center w-full ${isFirst ? '' : 'pt-4'}`}>
      <p className="text-sm font-medium pr-5">{leftText}</p>
      <div className="flex-1 h-[1px] bg-[#F7C9D9]"></div>
      {
        hasMiddle && (
          <>
            <p className="text-sm font-medium px-5">{middleText}</p>
            <div className="flex-1 h-[1px] bg-[#F7C9D9]"></div>
          </>
        )
      }
      <p className="text-sm font-medium pl-5">{rightText}</p>
    </div>
  )
}

export default WorshipItem;