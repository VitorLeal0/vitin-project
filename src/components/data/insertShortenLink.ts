import { db } from "../../services/data/databaseService.service";
import { addDoc, collection } from "firebase/firestore";


export function insertShortenLink (linkToRedirect:string, ShortenLink:string){
  const linCollectionRef= collection(db,"links");
  const document = addDoc(linCollectionRef,{linkToRedirect,ShortenLink});
  return document
}