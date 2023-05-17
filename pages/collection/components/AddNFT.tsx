import React, { useEffect, useRef, useState } from 'react';
import {ethers} from "ethers"
import Input from '../../../components/Input';
import Textarea from '../../../components/Textarea';
import useSigner from '../../../context/signer';

const MintNFT:React.FC = () => {
   const [name,setName]=useState<string>("")
    const [description,setDescription]=useState<string>("")
    const [loading, setLoading] = useState<boolean>(false);
    const {signer}=useSigner()
   
   
    return (
        <>
        <div className='sm:w-auto md:w-1/3 flex flex-col content-center ml-5 mr-5  h-auto border-2 border-solie border-gray-300 shadow-xl shadow-gray-300/50 rounded-lg p-3   '>
        <h1 className='text-3xl text-center mb-5 text-indigo-500 underline underline-offset-3'>Mint NFT</h1>
        <div className='flex flex-col w-auto  '>
        {/* image logic */}
        <div className='flex flex-col w-auto  '>
        <label className='text-xl text-indigo-500'>Upload Image</label>
        <input type="file"   className='border-2 border-solie border-gray-300 shadow-xl shadow-gray-300/50 rounded-lg p-3   ' />
        </div>
      
   
        
        
            <Input
            label='Name'
            placeholder='Name'
            type='text'
            onChange={(e:any)=>{setName(e.target.value)}}
            value={name}
            />
         <Textarea
            label='Description'
            placeholder='Description'
            onChange={(e:any)=>{setDescription(e.target.value)}}
            value={description}
         />
            <button className='transition ease-in-out text-md font-bold delay-150 bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 duration-300 p-1 w-1/2 self-center rounded-full mt-5 text-white text-xl'>{loading?"Minting..":"Mint"}</button>
        </div>
        
   

      </div>
        </>
    )
}
export default MintNFT;


