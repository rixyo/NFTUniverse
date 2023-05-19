import Textarea from '../../../components/Textarea';
import Input from '../../../components/Input';
import axios from 'axios';
import React, { useCallback, useState } from 'react';

import {Contract, ethers}from "ethers"
import { NFTStorage,File } from 'nft.storage';
import useSigner from '../../../context/signer';

import AIgenerate from "../../../abi/AIgenerate.json"
import toast from 'react-hot-toast';
import useUser from '../../../hooks/useUser';

const AiGeneratedNFT:React.FC = () => {
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [image, setImage] = useState<string>("")
  const [url, setURL] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const {signer,address}=useSigner()
  const {data:user}=useUser(address as string)
  const submitHandler = async (e:any) => {
    e.preventDefault()

    if (name === "" || description === "") {
      window.alert("Please provide a name and description")
      return
    }

    setLoading(true)

    // Call AI API to generate a image based on description
    const imageData = await AIGenerateImage()

    // Upload image to IPFS (NFT.Storage)
    const url = await uploadImage(imageData)

    // Mint NFT
    await mintImage(url)
    const response = await fetch(url);
    const data = await response.json();
    const contractAddress=process.env.NEXT_PUBLIC_AI_CONTRACT_ADDRESS
    await axios.post("/api/mint",
    {title:name,description, tokenURI:url,imageURI:data.image,
        contractAddress:contractAddress,
        ownerId:user?.id,
        ownerAddress:address,
     }).then(()=>{

        setLoading(false);
        setImage("")
        setMessage("")
       
        setName("")
        setDescription("")
        toast.success("NFT Minted Successfully")

    }).catch((err)=>{
        setLoading(false);
    
        toast.error("Something went wrong")
    })

  
  }

  const AIGenerateImage=useCallback(async()=>{
    setMessage("Generating...")
    const huggingFaceUrl="https://api-inference.huggingface.co/models/hakurei/waifu-diffusion"
    const response = await axios(
      {
        url: huggingFaceUrl,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGING_FACE_API_KEY as string}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        inputs: description, options: { wait_for_model: true },
      }),
      responseType: 'arraybuffer',
    })

    const type = response.headers['content-type']
    const data = response.data

    const base64data = Buffer.from(data).toString('base64')
    const img = `data:${type};base64,` + base64data // <-- This is so we can render it on the page
    setImage(img)

    return data
  

    
  },[setImage,description])
  const uploadImage = async (imageData:File) => {
    setMessage("Uploading Image...")

    // Create instance to NFT.Storage
    const nftstorage = new NFTStorage({ token: process.env.NEXT_PUBLIC_NFT_STORAGE_KEY as string })

    // Send request to store image
    const { ipnft } = await nftstorage.store({
      image: new File([imageData], "image.jpeg", { type: "image/jpeg" }),
      name: name,
      description: description,
    })

    // Save the URL
    const url = `https://ipfs.io/ipfs/${ipnft}/metadata.json`
    setURL(url)
    setMessage("Uploaded Image!")

    return url
  }
  const mintImage = async (tokenURI:string) => {
    setMessage("Waiting for Mint...")
    const contract = new Contract(process.env.NEXT_PUBLIC_AI_CONTRACT_ADDRESS as string, AIgenerate, signer);
    const transaction = await contract.mint(tokenURI,{value:ethers.utils.parseUnits("0.001","ether")});
    await transaction.wait();

    setMessage("Minted!")
  }

    return(
    
        <div className='gird gap-2 sm:grid-cols-1 md:grid md:grid-cols-2 items-center w-full'>

      <div className=' mb-5  mr-5 ml-5 rounded-xl p-3 sm:w-auto   md:w-1/2 '>
       
        <div className='flex flex-col  w-full'>
        <h1 className='  md:block text-2xl text-center mb-5 text-indigo-500 underline underline-offset-1 '>A.I Generated NFTS</h1>
       <Input
        value={name}
       onChange={(e:any)=>setName(e.target.value)}
        placeholder='Title of the NFT'
        type='text'
        label='Title'
        
       />
     <Textarea
        value={description}
      onChange={(e:any)=>setDescription(e.target.value)}
        placeholder='provide prompt for the A.I'
        label='Description'
     />
     
       
        <button className='transition ease-in-out delay-150 bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 duration-300 p-2 w-auto self-center rounded-lg mt-5 text-white text-xl' onClick={submitHandler} >{loading?message:"Generate"}</button>
        </div>
      </div>
      <div className='sm:w-auto md:w-1/2  flex flex-col mb-5  ml-5 mr-5  border-2 border-solid border-gray-400 rounded-xl'>
        <img className='md:w-30 h-30 m-5' src={image}/>
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