import React, { useState } from "react";


interface ButtonProps  {
    children: React.ReactNode;
    onPress: ()=>void;
    className?: string; 
}


export default function CopyGeneratedLinkButton  ({children,onPress,className}:ButtonProps){
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    onPress();
    setCopied(true);
    setTimeout(() =>{
      setCopied(false);
    },3000)
  };
  return(
  <button 
     className={copied ? "greenButton" :className} onClick={handleClick}
 >
     {copied ? "Copiado" : children}
  </button>
  )
}