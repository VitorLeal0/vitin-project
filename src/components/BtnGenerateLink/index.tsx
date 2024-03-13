interface ButtonProps  {
   children: React.ReactNode; 
   onPress: ()=>void; 
}

export default function BtnGenerateLink({children,onPress}:ButtonProps){
  return(
  <button 
      onClick={()=> onPress()}
    >
      {children}
  </button>
  )
}