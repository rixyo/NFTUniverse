import { useRouter } from "next/router";
import { useCallback } from "react";
import Image from "next/image";
import useUser from "../hooks/useUser";
import { CldImage } from "next-cloudinary";

type AvatarProps ={
  address?: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ address, isLarge}) => {

  const {data:user}=useUser( address as string)


  

  return (
    <div
      className={`
     
        ${isLarge ? 'h-32' : 'h-32'}
        ${isLarge ? 'w-32' : 'w-32'}
        rounded
        hover:opacity-90 
        transition 
        cursor-pointer
        relative
        border-2 border-gray-400
        p-2
        
      `}
    >
      <Image
       height={200}
       width={200}
        style={{
          objectFit: 'cover',
          borderRadius: '100'
        }}
        
        alt="Avatar"
     
        src={user?.profileImage || '/random.jpg'}
      
      />
    </div>
  );
}
 
export default Avatar;