import { MarketItem } from '@prisma/client';
import React from 'react';
import { CircleLoader } from 'react-spinners';
import useGetNFTS from '../../../../hooks/getNFTS';
import useGetOwnedNFTS from '../../../../hooks/useGetOwnedNFTS';
import useOwnedListedNFTS from '../../../../hooks/useOwnedListedNFTS';
import NFT from './NFT';


const NFTS:React.FC = () => {
   // const {data:nfts,mutate,isLoading}=useGetNFTS(address as string)
   const {loading,ownedNFTS}=useGetOwnedNFTS()
   const {listedNFTS}=useOwnedListedNFTS()
    
    return(
        <>
         {ownedNFTS?.length>=1 &&loading?<div className="flex justify-center items-center h-full">
  <CircleLoader color="#3B82F6" className="" size={50} />
</div> :(<div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-full'>
    {ownedNFTS?.map((item:NFT)=>(
      

            <NFT
            key={item.id}
            item={item}
            />
     
     ))
         
      }
       
</div>
    
    )}
             {listedNFTS?.length>=1 &&loading?<div className="flex justify-center items-center h-full">
  <CircleLoader color="#3B82F6" className="" size={50} />
</div> :(<div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-full'>
    {listedNFTS?.map((item:NFT)=>(
      

            <NFT
            key={item.id}
            item={item}
            />
     
     ))
         
      }
       
</div>
    
    )}
        </>
       
    )
}
export default NFTS;