import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}

export default function InputOriginalLink({placeholder, onChange}: InputProps){
  return <input placeholder={placeholder} onChange={onChange}/>
}