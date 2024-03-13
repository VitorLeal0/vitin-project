import { useState } from 'react'
import InputOriginalLink from './components/InputOriginalLink'
import Button from './components/Button'
import { ShortenLink } from './components/utils/shortenLink'
import { getRedirectLink } from './components/data/getRedirectLink'


function App() {
  const [shortLinkState, setShortenLinkState] = useState("")
  const [originalLinkState, setOriginalLinkState] = useState("")
  const actual_url = window.location.pathname


  return (
    <>
      {actual_url !== "/" ? (<Button onPress={async () => {
        const link = await getRedirectLink(actual_url.slice(1));
        console.log("actual url ",actual_url)
        console.log("link no app", link)
        window.location.href=link?.data().linkToRedirect
      }} >Acesse o Link</Button>) :
        <div>
          <h1>Vitin</h1>
          <InputOriginalLink
            placeholder="seu link aqui"
            onChange={(e) => {
              setOriginalLinkState(e.target.value)
            }}
          />

          <Button
            onPress={() => {
              setShortenLinkState(ShortenLink(originalLinkState))
            }}
          >Encurtar
          </Button>
          <p>{shortLinkState}</p>
        </div>
      }
    </>
  )
}

export default App
