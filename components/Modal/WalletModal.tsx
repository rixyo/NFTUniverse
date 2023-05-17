"use client"


import useSigner from '../../context/signer';
import React, { useCallback } from 'react';
import Modal from './Modal';
import  useWalletModal  from '../../hooks/useWalletModal';


const WalletModal:React.FC= () => {
 
  const { address, connectWallet, loading, isConnected } = useSigner();
  const walletModal=useWalletModal()

 const body=(
  <>
   <div className="mt-2 flex flex-col grow content-between ">
                    
                    {!isConnected && <p className='text-lg font-light mb-5'>If you don't have a wallet, you can select a provider and create one now.<span className='text-xl font-bold'>Learn more</span> </p> }  
                     
                        <div className='mb-5'  onClick={connectWallet}>
                        <button className='flex flex-row justify-center items-center rounded-full bg-gray-300 p-3 w-full' disabled={isConnected} >
                                <img src="./metamask-icon.png" alt="metamask" className="w-10 h-10"/>
                                <p className="text-lg font-bold ml-10 ">{isConnected?"Connected":"Metamask"}</p>
                              {!isConnected &&  <p className='text-lg font-medium ml-20'>Popular</p> } 
                            </button>
  
                        </div>
                       {!isConnected &&  <div className='mb-5 '>
                        <button className='flex justify-center items-center rounded-full bg-gray-300 p-3 w-full'>
                                <img src="./pthm.jpg" alt="phantom" className="w-10 h-10"/>
                                <p className="text-lg font-bold ml-10  ">Phantom</p>
                                <p className='text-lg font-medium ml-20'>Solana</p>
                            </button>
                          
  
                        </div> }
                      {!isConnected && <div className='mb-5'>
                        <button className='flex  justify-center items-center rounded-full bg-gray-300 p-3 w-full'>
                                <img src="./wallet-connect.png" alt="Wallet Connect" className="w-10 h-10"/>
                                <p className="text-lg font-bold ml-5  ">Wallet Connect</p>
                              
                            </button>
  
                        </div> }  
                    </div>
  </>
 )
 

   
    return (
        <Modal
        isOpen={walletModal.isOpen}
     
        onClose={walletModal.onClose}
        body={body}
        />
       
 

    )
}
export default WalletModal;