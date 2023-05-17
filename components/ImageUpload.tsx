import React,{useCallback} from 'react';
import {CldUploadWidget,CldImage} from "next-cloudinary"
import Image from "next/image"
import {TbPhotoPlus}from "react-icons/tb"

declare global {
    var cloudinary: any;
}
type FormImageUploadProps = {
    value:string;
    onChange:(value:string)=>void;
    label:string;
  

    
};
const ImageUpload:React.FC<FormImageUploadProps> = ({onChange,value,label}) => {
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    const handleUplaoad=useCallback((result:any)=>{
        onChange(result.info.secure_url)

    },[onChange])

    return (
        <CldUploadWidget 
      onUpload={handleUplaoad} 
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
        maxFileSize: 1048576,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
              relative
              cursor-pointer
              hover:opacity-70
              transition
              border-dashed 
              border-2 
              p-10
              
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-
              mt-2
            "
          >
            <TbPhotoPlus
              size={20}
            />
            <div className="font-semibold text-lg">
            {label}
            </div>
            {value && (
              <div className="absolute inset-0 w-full h-full "
              >
          <CldImage
                 fill
                  style={{ objectFit: 'cover', }} 
                  src={value}
                  alt="image" 
                  className='rounded-md object-cover'
                />
            
              </div>
            )}
          </div>
        ) 
    }}
    </CldUploadWidget>
  )
}
    
export default ImageUpload;