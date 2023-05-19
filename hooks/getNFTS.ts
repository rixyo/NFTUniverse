import { MarketItem } from '@prisma/client';
import useSWR from 'swr';
import fatcher from '../libs/fatcher';

const useGetNFTS = (ownerAddress?: string) => {
    const url=ownerAddress?`/api/mint?ownerAddress=${ownerAddress}`:"/api/mint"
    const {data,error,isLoading,mutate}=useSWR<MarketItem[]>(url,fatcher)
    return {
        data,
        isLoading,
        error,
        mutate
    }
}
export default useGetNFTS