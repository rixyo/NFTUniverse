import React from 'react';

type GiftModalProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

const GiftModal:React.FC<GiftModalProps> = ({isOpen,setIsOpen}) => {
    if(!isOpen) return null;
    return(
        <>
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop:blur-sm flex justify-center items-center '>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                
                  </div>
               
                   
                    <div className="mt-2 flex flex-col grow content-between ">
                    
                     
                    <text className='2xl font-bold text-black'>To:</text>
                        <div className='mb-5 flex flex-col items-center'>
                           
                            <input type="text" className='rounded-lg border-2 border-gray-300 p-3 w-full' placeholder='Enter a wallet address'
                             
                            />
                            <textarea  className='rounded-lg border-2 border-gray-300 p-3 w-full mt-5 mb-2' placeholder='Enter a message'/>
                        <button className='transition ease-in-out delay-150 bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 duration-300 p-1 w-1/2  rounded-full mt-5 text-white text-xl'>
                               Send
                            </button>

                        </div>
                  
                    </div>
                  
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse s">
    
                <button
                  type="button"
                  className="mt-3 w-full  rounded-md border border-red-500 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={()=>setIsOpen(false)}
                  
                  >
                  Cancel
                </button>
              </div>
              </div>
             
            </div>
  


   
      
 



        </>
       
    )
}
export default GiftModal;