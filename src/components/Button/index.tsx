import React from "react";


interface ButtonProps  {
    children: React.ReactNode; 
    onPress: ()=>void;
    className?: string; 
}

export default function BtnGenerateLink({children,onPress,className}:ButtonProps){
  return(
  <button 
     className={className}
      //className="clickButton"
      onClick={()=> onPress()}
    >
      {children}
  </button>
  )
}