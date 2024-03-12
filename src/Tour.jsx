import React, {useState} from "react";

export default function Tour({data,removeTour}) {
    const [readToggle,setReadToggle] = useState(false)
    console.log(data)
 
    const trimText = (text) =>{
        const trimmedText = text.split(' ').slice(0,35).join(' ');
        return trimmedText;
    }
return (
    <div className='shadow-md max-w-[300px] h-full flex flex-col relative'>
  <div className='absolute right-0 bg-green-400 text-white text-sm px-2 py-1'> ${data.price}</div>

    <img src={data.image} className='w-full h-[250px]'></img>
    <div className='flex flex-col items-center flex-grow '>
        <h3 className='font-semibold px-5 pt-4'>{data.name}</h3>
        {readToggle? 
        <p className='text-gray-500 text-xs px-4 py-4'>{data.info}</p>
        :
        <p className='text-gray-500 text-xs px-4 py-4'>{trimText(data.info)} ... <span onClick={()=>setReadToggle(!readToggle)} className='font-semibold cursor-pointer block text-green-500'>Read more</span></p>
}

        <button onClick={()=>removeTour(data.id)} className='mt-auto btn-primary mb-3 text-xs w-[90%] rounded-sm border-[1px] border-green-400 text-green-400 ' type='button'>Not Interested</button>
    {/* </div> */}
  </div></div>
);
}

