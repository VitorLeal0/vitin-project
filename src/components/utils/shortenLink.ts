import { v4 as uuid } from "uuid"
import { insertShortenLink } from "../data/insertShortenLink"
import removeSpaces from "./removeSpaces"
import { verifyCustomExist } from "../data/verifyCustomExist"



export async function ShortenLink (link: string, customLink: string): Promise<string> {
  const host = import.meta.env.VITE_URL
  if (link !== '') {
    let id: string
    customLink=removeSpaces(customLink)

    if (customLink === ''){
      id = uuid()
    
    } else { 
      id = customLink
    }

    const shortenedLink = `${host}/${id}`
    
    if ( await verifyCustomExist(id) === false ){
      insertShortenLink(link,id)
      return shortenedLink
    } else{
      return "URL Personalizada já existe \n Tente inserir outro termo"    
    }
  } else return "Insira uma url"

}

