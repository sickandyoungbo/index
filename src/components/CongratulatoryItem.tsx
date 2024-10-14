import React, { useState } from "react";
import arrowUpPinkUrl from '../assets/icons/arrow_up_pink.png';
import arrowUpBlueUrl from '../assets/icons/arrow_up_blue.png';
import arrowDownPinkUrl from '../assets/icons/arrow_down_pink.png';
import arrowDownBlueUrl from '../assets/icons/arrow_down_blue.png';
import '../style/congratulatoryItem.css'
import TextCopyButton from "./TextCopyButton";

interface CongratulatoryItemProps {
  who: 'groom' | 'bride';
  groomAccount?: string;
  brideAccount?: string;
  groomParent1Account?: string;
  groomParent2Account?: string;
  brideParent1Account?: string;
  brideParent2Account?: string;
}

const CongratulatoryItem = ({
  who,
  groomAccount,
  groomParent1Account,
  groomParent2Account,
  brideAccount,
  brideParent1Account,
  brideParent2Account
}: CongratulatoryItemProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div>
        <div
          className="flex justify-between items-center border-[#CCCCCC] border p-[14px] rounded-xl font-bold z-10 bg-white relative cursor-pointer"
          onClick={toggleDropdown}
        >
          <p className={`${who === 'groom' ? 'text-[#387BF9]' : 'text-[#EF4576]'} font-bold`}>
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
        <div className={`border-[#CCCCCC] border-[1px] -mt-5 rounded-xl slide ${isOpen ? 'open' : ''}`}>
          <div className="p-[18px] border-b border-[#ccc]">
            <p className={`pt-[14px] font-bold ${who === 'groom' ? 'text-[#387BF9]' : 'text-[#EF4576]'} `}>{who === 'groom' ? '신랑' : '신부'}</p>
            <div className="flex justify-between items-center mt-[10px]">
              <p className="whitespace-pre-line font-medium">{who === 'groom' ? groomAccount : brideAccount}</p> 
              <TextCopyButton text={`${who === 'groom' ? groomAccount : brideAccount}`} />
            </div> 
          </div>
          <div className={`p-[14px] ${(groomParent2Account || brideParent2Account) && 'border-b border-[#ccc]'}`}>
            <p className={`font-bold ${who === 'groom' ? 'text-[#387BF9]' : 'text-[#EF4576]'} `}>{who === 'groom' ? '신랑' : '신부'} 아버지</p>
            <div className="flex justify-between items-center mt-[10px]">
              <p className="whitespace-pre-line font-medium">{who === 'groom' ? groomParent1Account : brideParent1Account}</p> 
              <TextCopyButton text={`${who === 'groom' ? groomParent1Account : brideParent1Account}`} />
            </div>  
          </div>
          {
            (groomParent2Account || brideParent2Account) && (
              <div className="p-[14px]">
                <p className={`font-bold ${who === 'groom' ? 'text-[#387BF9]' : 'text-[#EF4576]'} `}>{who === 'groom' ? '신랑' : '신부'} 어머니</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="whitespace-pre-line font-medium">{who === 'groom' ? groomParent2Account : brideParent2Account}</p> 
                  <TextCopyButton text={`${who === 'groom' ? groomParent2Account : brideParent2Account}`} />
                </div>  
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default CongratulatoryItem;