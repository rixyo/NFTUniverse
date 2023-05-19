import React from 'react';
import Avatar from '../../../components/Avatar';
import useEditModal from '../../../hooks/useEditModal';
import useUser from '../../../hooks/useUser';
import { CldImage } from 'next-cloudinary';
import {GoVerified} from 'react-icons/go'

import { useRouter } from 'next/router';

import useGetOwnedNFTS from '../../../hooks/useGetOwnedNFTS';

type ProfileItemProps = {

    add:string
};

const ProfileItem:React.FC<ProfileItemProps> = ({add}) => {
    const {data:currentUser}=useUser(add as string)
    const router=useRouter()
    const {address}=router.query
    const {loading,ownedNFTS}=useGetOwnedNFTS()
  



    
    const editModal=useEditModal()
    
    return(
        <>
             <div className='bg-blue-100 h-48 relative'>
                {currentUser?.bannerImage &&<CldImage src={currentUser.bannerImage} fill  alt="Cover Image" style={{ objectFit: 'cover' }} />}
                <div className='absolute -bottom-12 left-1 '>
                    <Avatar address={currentUser?.address}/> 
                </div>
               
            </div>
            <div className='flex justify-between items-center mx-5 '>

            <div className='flex flex-col justify-start  mt-16'>
                <div className='flex items-center gap-2'>
                <h1 className='text-2xl font-bold'>{currentUser?.studioName}</h1>
                {currentUser?.isVerified &&<GoVerified className='inline-block text-blue-500 cursor-pointer' title='this is a verify account'/> }
                

                </div>
               {currentUser && <h1 className='text-md font-semibold'>By <span className='cursor-pointer hover:underline  text-lg font-bold'>{currentUser?.username}</span></h1> } 
             
                <h1>Number of NFTs <span>{ownedNFTS?.length}</span></h1>

            </div>
            <div className='flex justify-around mt-5'>
               {currentUser?.address===address &&<button className='bg-indigo-500 text-md font-bold p-3 w-36  self-center rounded-full mt-5 text-white text-xl' onClick={editModal.onOpen}>Edit</button> } 
            </div>
            </div>
        </>
    )
}
export default ProfileItem;