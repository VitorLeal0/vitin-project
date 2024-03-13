import { useState } from 'react'
import InputOriginalLink from './components/InputOriginalLink'
import BtnGenerateLink from './components/BtnGenerateLink'
import { ShortenLink } from './components/utils/shortenLink'


function App() {
  const [shortLinkState,setShortenLinkState] = useState("")
  const [originalLinkState,setOriginalLinkState] = useState("")
  
  return (
    <>
      <div>
        <h1>Vitin</h1>
        <InputOriginalLink 
          placeholder="seu link aqui"
          onChange={(e)=>{
            setOriginalLinkState(e.target.value)
          }}
        />
        
        <BtnGenerateLink
            onPress={()=> {
            setShortenLinkState(ShortenLink(originalLinkState))
           }} 
        >Encurtar
        </BtnGenerateLink>
        <p>{shortLinkState}</p>
      </div>
    </>
  )
}

export default App
