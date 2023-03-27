import { useIntl } from "react-intl";
import {useState} from "react";

export const Counter = ()=>{
    const [count,setCount]=useState(0);
    const {formatMessage}=useIntl();

    return <div className='flex flex-col gap-4 items-center'>
        {formatMessage({id:'count'})}
        <div className='bg-green-100 text-black text-3xl rounded-full font-bold w-20 h-20 items-center flex justify-center'>{count}</div>
        <div className='flex gap-4'>
        <button className='bg-white text-black py-2 px-4 rounded-full' onClick={()=>setCount(count+1)}>Increment</button>
        <button className='bg-white text-black py-2 px-4 rounded-full' onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    </div>
}