import {
  v4 as uuid 
} from "uuid"
import { insertShortenLink } from "../data/insertShortenLink"



export function ShortenLink (link: string): string {
  const host = import.meta.env.VITE_URL
  const id: string = uuid()
  const shortenedLink = `${host}/${id}`
  
  insertShortenLink(link,id)

  return shortenedLink
}

