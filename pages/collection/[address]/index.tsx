import React,{useState} from 'react';
import { IconType } from 'react-icons';
import { HiOutlinePencil } from 'react-icons/hi';
import {GoOctoface} from 'react-icons/go';
import {SiCoinmarketcap} from 'react-icons/si';
import AddNFT from '../components/AddNFT';
import AiGeneratedNFT from '../components/AiGeneratedNFT';
import ListNFT from '../components/ListNFT';
import ProfileItem from '../components/ProfileItem';
import useSigner from '../../../context/signer';
import useUser from '../../../hooks/useUser';
import { CircleLoader } from 'react-spinners';
import NFTS from '../components/NFTS';
import {withAuth} from '../../../libs/withAuth'
import useGetOwnedNFTS from '../../../hooks/useGetOwnedNFTS';
import TabItems from '../components/TabItems';



export type Tab = {
    title: string;
    icon: IconType

}
const tabItems: Tab[] = [{
        title: 'Mint NFTS',
    icon: HiOutlinePencil
},
{
    title:'A.I Generated',
    icon: GoOctoface
},
{
    title:'List NFTS',
    icon: SiCoinmarketcap
},

]
const index:React.FC = () => {
    const {loading,ownedNFTS}=useGetOwnedNFTS()
    const [selectedTab,setSelectedTab]=useState<string>("")
  const {address}=useSigner()

    
    return(
        <>
     
       <div className=' mt-5 flex  w-auto h-auto cursor-pointer ml-10'>
     
        <div className=' flex flex-cols  border-2 border-solid border-gray-400 h-auto p-5 mr-20  rounded-lg w-full  ' key={`items${Math.random()}`}>
          {tabItems.map((item, index) => (
              <TabItems key={index} item={item} selected={item.title===selectedTab} setSelectedTab={setSelectedTab}  />
              ))}
            </div>
           
       </div>

       
       <div className='md:flex  justify-center    mt-10'>
                {
                    selectedTab==="Mint NFTS" && <AddNFT/>
                }
                 {
                     selectedTab==="A.I Generated" && <AiGeneratedNFT/>
                    }
                {
                    selectedTab==="List NFTS" && <ListNFT/>
                }
             

            </div>
       <>
    {selectedTab==="" && <ProfileItem/>}
   
       </>
      

     
    
        
        
       
              </>
           
    )
}
export default withAuth(index);