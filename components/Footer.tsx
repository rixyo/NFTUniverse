import React from 'react';
import Image from 'next/image'
import Input from './Input';
import Button from './Button';
import { BsTwitter,BsYoutube } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { FaDiscord, FaTiktok } from 'react-icons/fa';

const Footer:React.FC = () => {
    
    return(
        <div className='hidden md:block bg-sky-500 mt-5 w-full h-auto mr-2'>
            <div className='flex  flex-col items-center justify-center p-5'>
                <div className='flex gap-20 border-b-4 border-dashed w-full'>
                    <div className='p-10'>
                        <h1 className='text-lg font-bold text-white'>Stay in the loop</h1>
                        <p className='text-white text-xl font-medium mb-4'>Subscribe to our newsletter to get updates on our latest products and announcements.</p>
                        <div className='flex'>

                        <Input
                        placeholder='Enter your email'
                        onChange={()=>{}}
                        />
                        <Button
                        label='Subscribe'
                        onClick={()=>{}}
                        />
                        </div>
                    </div>
                    <div className='p-10'>
                        <h1 className='text-2xl font-bold text-white'>Join in community</h1>
                        <div className='flex items-center mt-3 gap-5'> 
                        <div className='border-2 rounded p-4 cursor-pointer'>
                            <BsTwitter className='text-white text-4xl'/>
                        </div>
                        <div className='border-2 rounded p-4 cursor-pointer'>
                            <FiInstagram className='text-white text-4xl'/>
                        </div>
                        <div className='border-2 rounded p-4 cursor-pointer'>
                            <FaDiscord className='text-white text-4xl'/>
                        </div>
                        <div className='border-2 rounded p-4 cursor-pointer'>
                            <BsYoutube className='text-white text-4xl'/>
                        </div>
                        <div className='border-2 rounded p-4 cursor-pointer'>
                            <FaTiktok className='text-white text-4xl'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full items-center gap-10'>
                    <div className='flex flex-col  p-10'>
                        <Image src='/giphy (1).gif' width={100} height={100} alt=''/>
                        <h1 className='text-2xl font-bold text-white'>NFTUniverse</h1>
                        <p className='text-white text-xl font-medium mb-4'>NFTUniverse is a NFT marketplace for NFTM</p>

                    </div>
                    <div className='p-10'>
                        <h1 className='text-2xl font-bold text-white'>Quick Links</h1>
                        <div className='flex flex-col gap-2 mt-5'>
                            <p className='text-white text-xl font-medium mb-4 cursor-pointer'>Home</p>
                            <p className='text-white text-xl font-medium mb-4 cursor-pointer'>Marketplace</p>
                            <p className='text-white text-xl font-medium mb-4 cursor-pointer'>About</p>
                            <p className='text-white text-xl font-medium mb-4 cursor-pointer'>Contact</p>
                            </div>
                    </div>
                    <div className='p-10'>
                        <h1 className='text-2xl font-bold text-white'>Resources</h1>
                        <div className='flex flex-col gap-2 mt-5'>
                            <p className='text-white text-xl font-medium mb-4 cursor-pointer'>Blog</p>
                            <p className='text-white text-xl font-medium mb-4 cursor-pointer'>Learn</p>
                            <p className='text-white text-xl font-medium mb-4 cursor-pointer'>Help Center</p>
                            <p className='text-white text-xl font-medium mb-4 cursor-pointer'>Taxes</p>
                            </div>

                    </div>
                </div>

            </div>
            
           

        </div>
    )
}
export default Footer;