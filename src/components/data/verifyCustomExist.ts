import { db } from "../../services/data/databaseService.service";
import { collection, getDocs } from "firebase/firestore";

export async function verifyCustomExist (customLink:string){
  const linksCollectionRef= collection(db,"links");

  const data = await getDocs(linksCollectionRef);
  
  const link = data.docs.find(doc => doc.data().shortenLink === customLink)

  const exist: boolean = customLink === link?.data().shortenLink ? true : false
  
  return exist

}