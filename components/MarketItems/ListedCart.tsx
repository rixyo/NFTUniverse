import { MediaRenderer } from '@thirdweb-dev/react';
import { Contract, ethers } from 'ethers';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useState } from 'react';
import useSigner from '../../context/signer';
import NFTmarket from '../../abi/NFTmarket.json'
import toast from 'react-hot-toast';

type ListedCartProps = {
    item:NFT
    
};

const ListedCart:React.FC<ListedCartProps> = ({item}) => {
    const router=useRouter()
    const [image,setImage]=useState<string>("")
    const [name,setName]=useState<string>("")
    const [price,setPrice]=useState<string>("")
    const {address,signer}=useSigner()
    const convertJsonTOObject=async()=>{
        const response = await fetch(item.tokenURI);
        const data = await response.json();
        setName(data.name)
        setImage(data.image)
        setPrice(item.price as string)
    }
    convertJsonTOObject()
    
    const convertToEth=useMemo(()=>{
        if(item.price){
          return ethers.utils.formatEther(item.price)
        }
        return 0
      
      },[item.price])
      const buy=useCallback(async()=>{
        try {
          const contract = new Contract(process.env.NEXT_PUBLIC_NFT_MARKET_CONTRACT_ADDRESS as string, NFTmarket,signer);
          const transaction = await contract.buyNFT(item.id,{value:item.price})
          await transaction.wait();
          toast.success("Transaction Success")
          router.push(`/collection/${address}`)
        } catch (error:any) {
          console.log(error.message)
          toast.error("Something went wrong")
          
        }
      },[item.id,item.price,signer])
          return(
              <div className='  border-2 border-solid border-gray-300 p-5 cursor-pointer rounded-lg w-auto  self-center  my-5 mx-2 hover:border-gray-200' >
                  <div className='flex flex-col items-start gap-1 '>
                  <MediaRenderer src={image} className="self-center"/>
              
                  <p className='text text-lg font-bold '>{name}</p>
               
                
              
             
      
                  </div>
                  {item.price && item.from !=address?.toLowerCase() &&  <div>
                              <p className='text-lg font-bold'>Price {convertToEth}</p>
                              <button className='text-lg font-bold text-white  border-2 bg-blue-500  p-2 rounded-lg w-full mt-2 flex items-center justify-center gap-5' onClick={buy}>Buy</button>
                              
                          </div>
       } 
     
      
       </div>
          )
}
export default ListedCart;