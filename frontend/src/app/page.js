'use server'
import { permanentRedirect } from 'next/navigation'
//import { revalidateTag } from 'next/cache'
 
export default async function Page() {
  permanentRedirect(`/products`) // Navigate to the new user profile
return (<></>)

}