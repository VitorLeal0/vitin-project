import { useState } from 'react'
import InputOriginalLink from './components/InputOriginalLink'
import Button from './components/Button'
import { ShortenLink } from './components/utils/shortenLink'
import { getRedirectLink } from './components/data/getRedirectLink'
import InputCustomLink from './components/InputCustomLink'
import "./App.scss"
import CopyGeneratedLinkButton from './components/CopyGeneratedLinkButtom'
import copyLink from './components/utils/copyLink'


function App() {
  const [shortLinkState, setShortenLinkState] = useState("")
  const [originalLinkState, setOriginalLinkState] = useState("")
  const [customLink, setCustomLink] = useState("")
  const actual_url = window.location.pathname


  return (
    <>
      <div className='container'>
      {actual_url !== "/" ? (<Button 
      className='clickButton'
      onPress={async () => {
        const link = await getRedirectLink(actual_url.slice(1));

        window.location.href=link?.data().linkToRedirect
      }} >Acesse o Link</Button>) :
        <div>
          <h1 className='title'>Vitin</h1>
          
          <InputOriginalLink
            className='enterLink'
            placeholder="seu link aqui"
            onChange={(e) => {
              setOriginalLinkState(e.target.value)
            }}
          />
          <InputCustomLink 
            className='enterLink'
            placeholder='link personalizado' 
            onChange={(custom) => {
              setCustomLink(custom.target.value)
            }}/>
          <Button
            className='clickButton'
            onPress={async () => {
              setShortenLinkState(await ShortenLink(originalLinkState,customLink))
            }}
          >Encurtar
          </Button>
          <br/><br/>
          <span>{shortLinkState}</span>
          <br/><br/>
          {(shortLinkState === '' || !shortLinkState.startsWith(import.meta.env.VITE_URL)) ? <></>:          
          <CopyGeneratedLinkButton
            className='clickButton'
            onPress={async () => { copyLink(shortLinkState)
            }}
            >
            Copiar
          </CopyGeneratedLinkButton> }
          

        </div>
      }
    </div>
    </>
  )
}

export default App
