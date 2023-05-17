import React from 'react';

type ListNFTProps = {
    
};

const ListNFT:React.FC<ListNFTProps> = () => {
    
    return (
        <>
      
        
        
        <div className='sm:w-auto md:w-1/3 flex flex-col content-center ml-5 mr-5  h-auto border-2 border-solie border-gray-300 shadow-xl shadow-gray-300/50 rounded-lg p-3   '>
        <h1 className='text-3xl text-center mb-5 text-indigo-500 underline underline-offset-4 '>List NFT</h1>
        <div className='flex flex-col w-full  '>
        <button className='bg-cyan-500 text-white text-xl rounded-full w-1/4 p-1 mb-5 shadow-lg shadow-cyan-500/50'>Upload</button>
            <input className='border-2 border-solid border-gray-400 rounded-lg p-3  ' placeholder='Title'/>
            <textarea className='border-2 border-solid border-gray-400 rounded-lg p-3 focus: mt-3' placeholder='Description'/>
            <input className='border-2 border-solid border-gray-400 rounded-lg p-3 mt-3 ' placeholder='Price in Eth'/>
            <button className='transition text-md font-bold ease-in-out delay-150 bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 duration-300 p-1 w-1/3 self-center rounded-full mt-5 text-white text-xl'>List</button>
        </div>
        
   

      </div>
        </>
    )
}
export default ListNFT;