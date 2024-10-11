import React, { useState } from "react";
import arrowUpPinkUrl from '../assets/icons/arrow_up_pink.png';
import arrowUpBlueUrl from '../assets/icons/arrow_up_blue.png';
import arrowDownPinkUrl from '../assets/icons/arrow_down_pink.png';
import arrowDownBlueUrl from '../assets/icons/arrow_down_blue.png';
import '../style/congratulatoryItem.css'

interface CongratulatoryItemProps {
  who: 'groom' | 'bride';
  bankName: string;
  accountNumber: string;
}

const CongratulatoryItem = ({
  who,
  bankName,
  accountNumber
}: CongratulatoryItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={`${who === 'groom' ? 'text-[#387BF9]' : 'text-[#EF4576]'}`}>
        <div
          className="flex justify-between items-center border-[#CCCCCC] border-[1px] py-5 px-7 rounded-xl font-bold z-10 bg-white relative cursor-pointer"
          onClick={toggleDropdown}
        >
          <p className="text-xl font-bold">
            {who === 'groom' ? '신랑측' : '신부측'}
          </p>
          <img
            className="w-7"
            src={
              isOpen
                ? who === 'groom'
                  ? arrowUpBlueUrl
                  : arrowUpPinkUrl
                : who === 'groom'
                ? arrowDownBlueUrl
                : arrowDownPinkUrl
            }
            alt="arrow icon"
          />
        </div>
        <div className={`font-medium text-xl border-[#CCCCCC] border-[1px] -mt-5 rounded-xl slide ${isOpen ? 'open' : ''}`}>
          <p className="pt-[45px] px-[30px]">{accountNumber}</p>
          <p className="pb-[30px] px-[30px]">{bankName}</p>
        </div>
      </div>
    </>
  );
};

export default CongratulatoryItem;