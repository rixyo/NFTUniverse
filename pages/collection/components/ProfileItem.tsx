import React from 'react';
import Image from 'next/image';
import Avatar from '../../../components/Avatar';
import useEditModal from '../../../hooks/useEditModal';
import useUser from '../../../hooks/useUser';
import { CldImage } from 'next-cloudinary';

type ProfileItemProps = {

    address:string
};

const ProfileItem:React.FC<ProfileItemProps> = ({address}) => {
    const {data:currentUser}=useUser(address as string)
    console.log(currentUser)
    
    const editModal=useEditModal()
    
    return(
        <>
             <div className='bg-blue-100 h-44 relative'>
                {currentUser?.bannerImage &&<CldImage src={currentUser.bannerImage} fill    alt="Cover Image" style={{ objectFit: 'cover' }} />}
                <div className='absolute -bottom-12 left-1 '>
                    <Avatar address={currentUser?.address}/> 
                </div>
               
            </div>
            <div className='flex justify-between items-center mx-5 '>

            <div className='flex flex-col justify-start  mt-16'>
                <h1 className='text-2xl font-bold'>{currentUser?.studioName}</h1>
                <h1 className='text-md font-semibold'>By <span className='cursor-pointer hover:underline  text-lg font-bold'>{currentUser?.username}</span></h1>
             
                <h1>Number of NFTs</h1>

            </div>
            <div className='flex justify-around mt-5'>
                <button className='bg-indigo-500 text-md font-bold p-3 w-36  self-center rounded-full mt-5 text-white text-xl' onClick={editModal.onOpen}>Edit</button>
            </div>
            </div>
        </>
    )
}
export default ProfileItem;