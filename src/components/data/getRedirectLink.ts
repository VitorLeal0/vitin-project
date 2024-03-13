import { db } from "../../services/data/databaseService.service";
import { collection, getDocs } from "firebase/firestore";

export async function getRedirectLink (idlink:string){
  const linksCollectionRef= collection(db,"links");

  const data = await getDocs(linksCollectionRef);

  const link = data.docs.find(doc => doc.data().shortenLink == idlink)

  return link

}