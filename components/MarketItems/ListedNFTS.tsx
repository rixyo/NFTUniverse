import React from 'react';
import { CircleLoader } from 'react-spinners';
import ListedCart from './ListedCart';
type ListedNFTSProps = {
    loading:boolean,
    listedNFTS:NFT[]
    
};

const ListedNFTS:React.FC<ListedNFTSProps> = ({loading,listedNFTS}) => {
    
    return (
        <>
            {listedNFTS&&listedNFTS?.length>=1 &&loading?<div className="flex justify-center items-center h-full">
  <CircleLoader color="#3B82F6" className="" size={50} />
</div> :(<div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-full'>
    {listedNFTS?.map((item:NFT)=>(
      

            <ListedCart
            key={item.id}
            item={item}
            />
     
     ))
         
      }
       
</div>
    
    )}
    {listedNFTS?.length===0 && <div className="flex justify-center items-center h-full">
    <h1 className="text-2xl text-gray-400">No NFTS Listed</h1>
        </div>}
        </>
    )
}
export default ListedNFTS;