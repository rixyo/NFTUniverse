import React from 'react';
import { Tab } from '../[address]';

type TabItemProps = {
    item: Tab,
    selected:boolean,
    setSelectedTab:(value:string)=>void
};

const TabItems:React.FC<TabItemProps> = ({item,selected,setSelectedTab}) => {
    
    return (
        <div className={`flex w-full p-2   cursor-pointer ${selected ? 'text-blue-500' : 'gray-500'} ${selected? 'border-b-2 border-blue-500':'gray-500'}`} onClick={()=>setSelectedTab(item.title)} title={item.title}>
          
                <item.icon size={24} />
                <p className= 'hidden md:block text-sm ml-2' >{item.title}</p>
       
            
        </div>
    )
}
export default TabItems;