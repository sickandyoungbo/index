import React from "react"

interface TextCopyButtonProps {
  text: string;
}

const TextCopyButton = ({text}: TextCopyButtonProps) => {
  function handleCopy() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => {
          alert("클립보드에 복사되었습니다.");
        })
        .catch(err => {
          console.error("클립보드 복사 실패: ", err);
        });
    } 
  }

  return (
    <button className="p-[10px] bg-[#F1F1F1] rounded-lg" onClick={handleCopy}>계좌 복사</button>
  )
}

export default TextCopyButton;