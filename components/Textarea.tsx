import React from 'react';

type TextareaProps = {
    placeholder?: string;
    value?: string;
 
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    label?: string;
    
};

const Textarea:React.FC<TextareaProps> = ({label,placeholder,value,disabled,onChange}) => {
    
    return (
        <div className="w-full">
          {label && <p className="text-xl text-white font-semibold mb-2">{label}</p>}
          <textarea
            disabled={disabled}
            onChange={onChange}
            value={value}
            required
            placeholder={placeholder}
            className="
              w-full
              p-4 
              text-lg 
              bg-white
              border-2
              border-gray-400 
              rounded-md
              outline-none
              text-black
              focus:border-indigo-500
              focus:border-2
              transition
              disabled:bg-neutral-900
              disabled:opacity-70
              disabled:cursor-not-allowed
            "
          
          />
        </div>
       );
}
export default Textarea;