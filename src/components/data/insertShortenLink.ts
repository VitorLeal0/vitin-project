import { db } from "../../services/data/databaseService.service";
import { addDoc, collection } from "firebase/firestore";


export function insertShortenLink (linkToRedirect:string, shortenLink:string){
  const linkCollectionRef= collection(db,"links");
  const document = addDoc(linkCollectionRef,{linkToRedirect,shortenLink});
  return document
}