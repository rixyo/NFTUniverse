import Textarea from '../../../components/Textarea';
import Input from '../../../components/Input';
import axios from 'axios';
import React, { useState } from 'react';

import {Contract, ethers}from "ethers"


const AiGeneratedNFT:React.FC = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [url, setURL] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")



  


    return(
    
        <div className='gird gap-2 sm:grid-cols-1 md:grid md:grid-cols-2 items-center w-full'>

      <div className=' mb-5  mr-5 ml-5 rounded-xl p-3 sm:w-auto   md:w-1/2 '>
       
        <div className='flex flex-col  w-full'>
        <h1 className='  md:block text-2xl text-center mb-5 text-indigo-500 underline underline-offset-1 '>A.I Generated NFTS</h1>
       <Input
       onChange={(e:any)=>setName(e.target.value)}
        value={name}
        placeholder='Title of the NFT'
        type='text'
        label='Title'
        
       />
     <Textarea
      onChange={(e:any)=>setDescription(e.target.value)}
        value={description}
        placeholder='provide prompt for the A.I'
        label='Description'
     />
     
       
        <button className='transition ease-in-out delay-150 bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 duration-300 p-2 w-auto self-center rounded-lg mt-5 text-white text-xl' >{loading?message:"Generate"}</button>
        </div>
      </div>
      <div className='sm:w-auto md:w-1/2  flex flex-col mb-5  ml-5 mr-5  border-2 border-solid border-gray-400 rounded-xl'>
        <img className='md:w-30 h-30 m-5' src={image||'./giphy (1).gif'}/>
        <div className='flex justify-around mb-5  '>
        <button className='transition text-md font-bold ease-in-out delay-150 bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 duration-300 p-1 w-1/3 self-center rounded-full mt-5 text-white text-xl' >Mint</button>
        <button className='bg-red-500 text-md font-bold p-1 w-1/3 self-center rounded-full mt-5 text-white text-xl' >Remove</button>
        </div>
        {error && <p className='text-red-500 p-2 text-center'>{error}</p>}
        </div>
        </div>
     
    )
}
export default AiGeneratedNFT;