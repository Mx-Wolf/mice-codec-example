import {decode, encode, getRandomString} from 'mx-wolf-mice-codec';
const text = `text to present. Prepared at ${new Date().toISOString()}`;
const makeBlobFromString = ():Blob =>{
   const writer = new TextEncoder();
   const array = writer.encode(text);
   return new Blob([array]);
}
const makeStringFromBlob = async (blob: Blob)=>{
  const reader = new TextDecoder();
  return  reader.decode(await blob.arrayBuffer())
}
export const makeDemo = async ()=>{

  const passString = await getRandomString();
  const encoded = await encode(passString, makeBlobFromString());
  const decoded = await decode(passString, encoded);
  const result = await makeStringFromBlob(decoded);

  return {
    text,
    result,
  }
}
