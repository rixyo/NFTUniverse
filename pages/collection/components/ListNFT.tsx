import React from 'react';
import Input from '../../../components/Input';
import Textarea from '../../../components/Textarea';



const ListNFT:React.FC= () => {
    
    return (
        <>
        
        <div className='sm:w-auto md:w-1/3 flex flex-col content-center ml-5 mr-5  h-auto border-2 border-solie border-gray-300 shadow-xl shadow-gray-300/50 rounded-lg p-3   '>
        <h1 className='text-3xl text-center mb-5 text-indigo-500 underline underline-offset-4 '>List NFT</h1>
        <div className='flex flex-col w-full  '>
            <Input
                label='TokenURI'
                placeholder='TokenURI'
                type='text'
                value=''
                onChange={()=>{}}
            />
               <Input
                label='title'
                placeholder='title'
                type='text'
                value=''
                onChange={()=>{}}
            />
            <Textarea
                label='description'
                placeholder='description'
                value=''
                onChange={()=>{}}
            />
            <Input
                label='price'
                placeholder='price'
                type='text'
                value=''
                onChange={()=>{}}
            />
      
           
            <button className='transition text-md font-bold ease-in-out delay-150 bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 duration-300 p-1 w-1/3 self-center rounded-full mt-5 text-white text-xl'>List</button>
        </div>
        
   

      </div>
        </>
    )
}
export default ListNFT;