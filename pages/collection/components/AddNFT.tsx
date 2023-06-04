import React, {  useState } from 'react';
import {Contract} from "ethers"
import Input from '../../../components/Input';
import Textarea from '../../../components/Textarea';
import useSigner from '../../../context/signer';
import { NFTStorage, File } from 'nft.storage'
import NFTmarket from "../../../abi/NFTmarket.json"
import toast from 'react-hot-toast';
import Image from 'next/image';



const MintNFT:React.FC = () => {
   const [name,setName]=useState<string>("")
    const [description,setDescription]=useState<string>("")
    const [loading, setLoading] = useState<boolean>(false);
    const [metadata, setMetadata] = useState<string>("");
    const [image, setImage] = useState<File>();
    const [showPreview, setShowPreview] = useState<string>("");
    const {signer,address}=useSigner()

    const client = new NFTStorage({ token: process.env.NEXT_PUBLIC_NFT_STORAGE_KEY as string })
   
    const handleChange = (e:any) => {
        e.preventDefault();
    
        const file = e.target.files[0];
        const fileType = file['type'];
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/jpg', 'image/webp', 'image/avif'];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setShowPreview(reader.result as string);
        
        }
        if (!validImageTypes.includes(fileType)) {
            console.log('invalid file type');
        }
        else{
            setImage(file);
        }
       
     

        
    }
    const uploadToIPFS = async () => {
        if(!image || !name || !description) return
       
      
        
        const {ipnft} = await client.store({
            name: name,
            description: description,
            image: new File([image!], 'image.png', { type: 'image/png' })

        })
        const url = `https://ipfs.io/ipfs/${ipnft}/metadata.json`
        setMetadata(url)
    
    
        return url


    }
    const mintNFT = async (tokenURI:string) => {
     
        const contract = new Contract(process.env.NEXT_PUBLIC_NFT_MARKET_CONTRACT_ADDRESS as string, NFTmarket, signer);
        const transaction = await contract.createNFT(tokenURI)
        await transaction.wait();
    }
    const handleSubmit = async () => {
        setLoading(true);
        try {
            
            const tokenURI = await uploadToIPFS();
            await mintNFT(tokenURI as string);
       
           toast.success("NFT Minted Successfully")
            setLoading(false);
            setDescription("");
            setName("");
            setShowPreview("");
            
        } catch (error:any) {
            setLoading(false);
            toast.error("Minint Failed")
            console.log(error);
            
        }
     
   
       
        
    
       
    }
  
   
   
    return (
        <>
        <div className='sm:w-auto md:w-1/3 flex flex-col content-center ml-5 mr-5  h-auto border-2 border-solie border-gray-300 shadow-xl shadow-gray-300/50 rounded-lg p-3   '>
        <h1 className='text-3xl text-center mb-5 text-indigo-500 underline underline-offset-3'>Mint NFT</h1>
        <div className='flex flex-col w-auto  '>
        {/* image logic */}
        <div className='flex flex-col w-auto  '>
        <label className='text-xl text-indigo-500'>Upload Image</label>
        <input type="file" onChange={handleChange}   className='border-2 border-solie border-gray-300 shadow-xl shadow-gray-300/50 rounded-lg p-3   ' />
        </div>
      {showPreview!=="" &&
       <Image src={showPreview} className='w-1/2 h-1/2 self-center' alt={'preview'} width={100} height={100} />

      } 
      
      
        
        
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
            <button className='transition ease-in-out text-md font-bold delay-150 bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 duration-300 p-1 w-1/2 self-center rounded-full mt-5 text-white text-xl' onClick={handleSubmit}>{loading?"Minting..":"Mint"}</button>
        </div>
        
   

      </div>
        </>
    )
}
export default MintNFT;


