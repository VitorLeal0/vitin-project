import { db } from "../../services/data/databaseService.service";
import { collection, getDocs } from "firebase/firestore";

export async function getRedirectLink (idlink:string){
  const linksCollectionRef= collection(db,"links");
  console.log(linksCollectionRef)
  console.log("idlink ",  idlink)

  const data = await getDocs(linksCollectionRef);
  
  console.log("data ", data.docs.find(doc => doc.data().shortenLink === idlink))

  const link = data.docs.find(doc => doc.data().shortenLink == idlink)
  console.log("link ",link)

  return link

}