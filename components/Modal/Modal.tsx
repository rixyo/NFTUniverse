import React, { useCallback } from 'react';
import {FaEthereum} from 'react-icons/fa';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
  
   
    body?: React.ReactElement;
    disabled?: boolean;
};

const Modal:React.FC<ModalProps> = ({isOpen,onClose,body,disabled}) => {
    const handleClose = useCallback(() => {
        if (disabled) {
          return;
        }
      
        onClose();
      }, [onClose, disabled]);
      if (!isOpen) {
        return null;
      }
    
    return(
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop:blur-sm flex justify-center items-center '>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                     <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                          <div className="sm:flex sm:items-start">
                            {/** icon  */}
                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-300 sm:mx-0 sm:h-10 sm:w-10">
                               <FaEthereum className='text-4xl text-white'/>
                            </div>
                            {/** body  */}
                            <div className="mt-2 flex flex-col grow content-between ">
                                {body}
                            </div>
                          </div>

                     </div>
                        {/** footer  */}
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                  type="button"
                  className="mt-3 w-full  rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                
                    onClick={handleClose}
                  >
                  Cancel
                </button>
                        </div>

        </div>

        </div>
    )
}
export default Modal;