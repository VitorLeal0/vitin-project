import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}

export default function InputCustomLink({className,placeholder, onChange}: InputProps){
  return <input className={className} placeholder={placeholder} onChange={onChange}/>
}