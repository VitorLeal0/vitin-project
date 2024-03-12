import { useState } from 'react'
import InputOriginalLink from './components/InputOriginalLink'
import BtnGenerateLink from './components/BtnGenerateLink'


function App() {

  return (
    <>
      <div>
        <h1>Vitin</h1>
        <InputOriginalLink placeholder="seu link aqui"/>
        <BtnGenerateLink>Encurtar</BtnGenerateLink>
      </div>
    </>
  )
}

export default App
