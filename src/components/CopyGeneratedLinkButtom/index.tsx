import React from "react";


interface ButtonProps  {
    children: React.ReactNode;
    onPress: ()=>void;
    className?: string; 
}


export default function CopyGeneratedLinkButton  ({children,onPress,className}:ButtonProps){
  return(
  <button 
     className={className}
     onClick={()=> onPress()}
    >
      {children}
  </button>
  )
}