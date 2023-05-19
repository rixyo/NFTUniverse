
import { MediaRenderer } from '@thirdweb-dev/react';
import React, { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import ListModal from '../../../../components/Modal/List';
import { Contract, ethers } from 'ethers';
import signer from '../../../../context/signer';
import NFTmarket from "../../../../abi/NFTmarket.json"
import useSigner from '../../../../context/signer';
type NFTProps = {
    item:any
    
};

const NFT:React.FC<NFTProps> = ({item}) => {
  let data;
  const {address,signer}=useSigner()
    const [name,setName]=useState<string>("")
    const [price,setPrice]=useState<string>("")
    const [description,setDescription]=useState<string>("")
    const [image,setImage]=useState<string>("")

    const [open,setOpen]=useState<boolean>(false)

const convertJsonToObject=async()=>{
  const response = await fetch(item.tokenURI);
   data = await response.json();
   setName(data.name)
    setDescription(data.description)
    setImage(data.image)
    setPrice(item.price)
}
convertJsonToObject()
const cancle=async()=>{
  try {
    const contract = new Contract(process.env.NEXT_PUBLIC_NFT_MARKET_CONTRACT_ADDRESS as string, NFTmarket,signer);
    const transaction = await contract.cancelListing(item.id)
    await transaction.wait();
    
  } catch (error:any) {
    console.log(error.message)
    toast.error("Something went wrong")
    
  }
}
const convertToEth=useMemo(()=>{
  if(price){
    return ethers.utils.formatEther(price)
  }
  return 0

},[price])
    return(
        <div className='  border-2 border-solid border-gray-300 p-5 cursor-pointer rounded-lg w-auto  self-center  my-5 mx-2 hover:border-gray-200' >
            <div className='flex flex-col items-start gap-1 '>
            <MediaRenderer src={image} className="self-center"/>
        
            <p className='text text-lg font-bold '>{name}</p>
         
           {item.to ===address?.toLowerCase() && <button className='text-lg font-bold text-white  border-2 bg-blue-500  p-2 rounded-lg w-full mt-2 flex items-center justify-center gap-5' onClick={()=>setOpen(true)}>sell</button>}
           <ListModal isOpen={open} setIsOpen={()=>setOpen(false)} id={item.id} />
        
       

            </div>
            {item.price && item.from !=address?.toLowerCase() &&  <div>
                        <p className='text-lg font-bold'>Price {convertToEth}</p>
                        <button className='text-lg font-bold text-white  border-2 bg-blue-500  p-2 rounded-lg w-full mt-2 flex items-center justify-center gap-5'>Buy</button>
                        
                    </div>
 } 
            {item.price && item.from ===address?.toLowerCase() &&  <div>
                        <p className='text-lg font-bold'>Price {convertToEth}</p>
                        <button className='text-lg font-bold text-white  border-2 bg-blue-500  p-2 rounded-lg w-full mt-2 flex items-center justify-center gap-5' onClick={cancle}>Cancle</button>
                        
                    </div>
 } 

        </div>
    )
}
export default NFT;