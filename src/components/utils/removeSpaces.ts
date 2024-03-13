
export default function removeSpaces(text: string){
  const newText = text.replace(/\s+/g, '-');
  return newText
}