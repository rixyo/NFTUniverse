
import React from 'react';
import { CircleLoader } from 'react-spinners';
import useGetOwnedNFTS from '../../../../hooks/useGetOwnedNFTS';
import useOwnedListedNFTS from '../../../../hooks/useOwnedListedNFTS';
import NFT from './NFT';


type NFTSProps = {
    loading:boolean,
    ownedNFTS:NFTType[],


  
}

const NFTS:React.FC<NFTSProps> = ({loading,ownedNFTS}) => {
    const {listedNFTS,loading:Loading}=useOwnedListedNFTS()
  
    
    return(
        <>
        <>
         {loading &&<div className="flex justify-center items-center h-full">
  <CircleLoader color="#3B82F6" className="" size={50} />
</div>
}
 <>
   {ownedNFTS?.length>=1 &&
   <>
   <h1 className='text-2xl font-bold mt-10'>Owned NFTS</h1>
<div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-full'>
    {ownedNFTS?.map((item:NFTType)=>(
      

            <NFT
            key={item.id}
            item={item}
            />
     
     ))
         
      }
       
</div>
   </>
   } 
    </>
    
             {listedNFTS?.length>=1 && Loading&&<div className="flex justify-center items-center h-full">
  <CircleLoader color="#3B82F6" className="" size={50} />
</div> }
  {listedNFTS?.length>=1 &&
  <>
  <h1 className='text-2xl font-bold mt-10'>Listed NFTS</h1>
<div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-full' key="ListedNFTS">
  {listedNFTS?.map((item:NFTType)=>(
    

          <NFT
          key={item.id}
          item={item}
          />
   
   ))
       
    }
     
</div>
</>
  }  
    
    
    
        </>
        </>
       
    )
}
export default NFTS;