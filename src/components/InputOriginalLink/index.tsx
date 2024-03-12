import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}

export default function InputOriginalLink({placeholder}: InputProps){
  return <input placeholder={placeholder}/>
}