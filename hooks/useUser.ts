import { User } from "@prisma/client"
import useSWR from "swr"
import fetcher from  "../libs/fatcher"

const useUser=(address:string)=>{
    const {data,error,isLoading,mutate}=useSWR<User>(address?`/api/user/${address}`:null,fetcher)
    return {
        data,
        isLoading,
        error,
        mutate
    }
}
export default useUser