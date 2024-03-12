import React from "react"

interface ButtonProps{
  children:React.ReactNode;
}

export default function BtnGenerateLink({children}:ButtonProps){
  return<button>{children}</button>
}