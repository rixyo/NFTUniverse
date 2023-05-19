import React, { useCallback, useState } from 'react';
import useListModal from '../../hooks/useListModal';
import Input from '../Input';
import {BigNumber,Contract, ethers, Transaction } from "ethers";
import { useRouter } from 'next/router';

import NFTmarket from "../../abi/NFTmarket.json"
import useSigner from '../../context/signer';

import toast from 'react-hot-toast';
import { TransactionResponse } from '@ethersproject/providers';
import useGetOwnedNFTS from '../../hooks/useGetOwnedNFTS';

type ListModalProps = {
  
  isOpen:boolean
  setIsOpen:(isOpen:boolean)=>void
  id:string
}

const ListModal:React.FC<ListModalProps>= ({id,isOpen,setIsOpen}) => {
  const listModal=useListModal()
  const [error,setError]=useState<string>("")
  const [price,setPrice]=useState('')
  const router=useRouter()
  const [loading,setLoading]=useState<boolean>(false)
  const [message,setMessage]=useState<string>("")
  const {}= useGetOwnedNFTS()



  const {signer,address}=useSigner()


    if(!isOpen) return null;
    const list=async()=>{
      try {
        setLoading(true)
        setMessage("Listing...")
        if (!price) return setError("Must be a valid number");
        const wei = ethers.utils.parseEther(price);
        if (wei.lte(0)) return setError("Must be a greater than 0");
        const contract = new Contract(process.env.NEXT_PUBLIC_NFT_MARKET_CONTRACT_ADDRESS as string, NFTmarket, signer);
        const transaction = await contract.listNFT(id,wei)
        await transaction.wait();
        setLoading(false)
        toast.success("NFT listed successfully")
        setIsOpen(false)
        setMessage("List")
        
      } catch (error:any) {
        setError(error.message)
        setLoading(false)
        return
        
      }
  
    

    }
   

    return(
        <>
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop:blur-sm flex justify-center items-center '>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                
                  </div>
               
                   
                    <div className="mt-2 flex flex-col grow content-between ">
                    
                     
                
                        <div className='mb-5 flex flex-col items-center'>
                          <Input
                          placeholder='Enter your price in ETH'
                          type='number'
                          value={price}
                          onChange={(e)=>{setPrice(e.target.value)}}
                          />

                           
                          
                        <button className='transition ease-in-out delay-150 bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 duration-300 p-1 w-1/2  rounded-full mt-5 text-white text-xl' onClick={list} >
                          {loading ?message:"List" }
                            </button>
      {error && <p className="text-red-500 text-lg font-bold">{error}</p>}
                        </div>
                  
                    </div>
                  
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse s">
    
                <button
                  type="button"
                  className="mt-3 w-full  rounded-md border border-red-500 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={()=>setIsOpen(!isOpen)}
                  
                  >
                  Cancel
                </button>
              </div>
              </div>
             
            </div>
  


   
      
 



        </>
       
    )
}
export default ListModal;