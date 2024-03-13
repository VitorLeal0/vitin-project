import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}

export default function InputCustomLink({placeholder, onChange}: InputProps){
  return <input placeholder={placeholder} onChange={onChange}/>
}