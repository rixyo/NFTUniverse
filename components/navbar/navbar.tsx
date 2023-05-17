"use client"
import {BsSearch} from 'react-icons/bs';
import {CiWallet} from 'react-icons/ci';
import {VscAccount} from 'react-icons/vsc';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useWalletModal from '../../hooks/useWalletModal';
import useSigner from '../../context/signer';




const navbar:React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const router = useRouter();
    const { address, isConnected } = useSigner();
    const walletModal=useWalletModal()

    return(
        <>
        <div className=' md:m-2 flex justify-between items-center sticky'>
           <div className='flex  items-center m-0 focus: cursor-pointer mt-1' onClick={()=>router.push("/")}>
            
            <img className='h-10 w-16' src ="/giphy (1).gif"/>
           
            <text className='hidden md:block text-2xl font-bold  '>NFT Universe</text>
           </div>
           <div className='sm:w-auto md:basis-1/2  ' >
    
            <div className=' md:justify-items-center text-gray-500 focus-within:text-gray-600 mt-3 mb-1  '>


            <BsSearch className='w-5 h-5 absolute mt-1 ml-1 '/>
            <input
                type="text"
                placeholder="Search"
                className="border-2 border-none  h-8 pr-3 pl-10 py-2 font-semibold place-holder-gray-500 text-black rounded-lg ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent w-full"
                
                />
            </div>
      
           
           </div>
           <div className=' ml-5   basis-1/3 flex items-center gap-5  focus: cursor-pointer mt-5  '>
            <div className=' md:flex justify-center p-2 border-2 border-solid border-gray-500 ml-1 rounded-lg ' onClick={walletModal.onOpen} >
            <CiWallet className=' md:w-5 h-5 mr-1 '/>
                <p className={`hidden md:block text-sm font-bold overflow-hidden ${isConnected?"w-20":"w-auto"} ${isConnected?"text-blue-400":"text-black"}`}>{isConnected?address:"connect wallet"}</p>
               
            </div>
            {isConnected &&  <div className='ml-5 border-2 border-solid border-l-gray-500 border-r-gray-500 p-2 mr-5' onClick={()=>router.push(`/collection/${address}`)}>
             <VscAccount className='w-7 h-7 mr-1 '/>
               </div>}  
          <div className=' md:border-2 border-solid border-gray-500 rounded-lg mr-3'>
            <AiOutlineShoppingCart className='w-7 h-7'/>
          </div>
      
           </div>
          
        </div>
   

   
                </>
    )
}
export default navbar;