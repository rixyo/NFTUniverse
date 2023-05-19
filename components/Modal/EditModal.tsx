import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useSigner from '../../context/signer';
import useEditModal from '../../hooks/useEditModal';
import useUser from '../../hooks/useUser';
import ImageUpload from '../ImageUpload';
import Input from '../Input';
import FormModal from './FormModal';
const EditModal:React.FC = () => {
    const [studioName,setStudioName]=useState<string>('')
    const [username,setUserName]=useState<string>('')
    const [profileImage,setProfileImage]=useState<string>('')
    const [bannerImage,setBannerImage]=useState<string>('')
    const editModal=useEditModal()
    const {address}=useSigner()
    const {mutate:mutatedUser,data:user}=useUser(address as string)
    useEffect(()=>{
        if(user){
            setStudioName(user.studioName)
            setUserName(user.username)
            setProfileImage(user.profileImage as string)
            setBannerImage(user.bannerImage as string)
        }
    },[user])
    const onSubmit=useCallback(async()=>{
        await axios.patch("/api/edit",{
            studioName,
            username,
            profileImage,
            bannerImage,
            address
          

        }).then((res)=>{
            toast.success("Profile Updated")
            editModal.onClose()
            mutatedUser()
            setStudioName('')
            setUserName('')
            setProfileImage('')
            setBannerImage('')
        }).catch((err)=>{
            toast.error("Profile Not Updated")
        })

    },[studioName,username,profileImage,bannerImage,address])
    const body=(
        <>
        <div className='flex flex-col justify-start   gap-5'>
            <ImageUpload
                label='Cover Image'
                value={bannerImage}
                onChange={(value)=>{setBannerImage(value)}}
            />
            <ImageUpload
                label='Profile Image'
                value={profileImage}
                onChange={(value)=>{setProfileImage(value)}}
            />
            <Input
           
                placeholder='Studio Name'
                type='text'
                value={studioName}
                onChange={(e)=>{setStudioName(e.target.value)}}
            />
                 <Input
                placeholder='creator Name'
                type='text'
                value={username}
                onChange={(e)=>{setUserName(e.target.value)}}
            />
              
        </div>
        </>
    )
  
    
    return (
        <FormModal
            isOpen={editModal.isOpen}
            onClose={editModal.onClose}
            body={body}
            title='Edit Profile'
            actionLabel='Save'
            onSubmit={onSubmit}

        

        />
    )
}
export default EditModal;