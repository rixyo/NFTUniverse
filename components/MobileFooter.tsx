import React from 'react';
import Input from './Input';
import Button from './Button';
import { BsTwitter,BsYoutube } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { FaDiscord, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';

const MobileFooter:React.FC = () => {
    
    return (
        <div className='sm:bock md:hidden bg-sky-500 mt-5 w-full h-auto mr-2'>
            <div className='flex  flex-col items-center justify-center p-5'>
            <div className='p-2'>
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
                    <div className='p-5'>
                        <h1 className='text-2xl font-bold text-white text-center'>Join in community</h1>
                        <div className='flex  mt-3 gap-5'> 
                        <div className='border-2 rounded p-4 cursor-pointer'>
                            <BsTwitter className='text-white text-4xl'/>
                        </div>
                        <div className='border-2 rounded p-4 cursor-pointer'>
                            <FiInstagram className='text-white text-4xl'/>
                        </div>
                        <div className='border-2 rounded p-4 cursor-pointer'>
                            <FaDiscord className='text-white text-4xl'/>
                        </div>
                      
                        </div>
                    </div>
                    <div className='flex flex-col  p-3'>
                        <Image src='/giphy (1).gif' width={100} height={100} alt=''/>
                        <h1 className='text-2xl font-bold text-white'>NFTUniverse</h1>
                        <p className='text-white text-xl font-medium mb-4'>NFTUniverse is a NFT marketplace for NFTM</p>

                    </div>
            </div>

        </div>
    )
}
export default MobileFooter;