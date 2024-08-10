interface ButtonProp{
    value:number|string
    clicked:Function
}

export default function Button(prop:ButtonProp){
    return <>
      <button onClick={()=>prop.clicked(prop.value)} className='px-1 py-2 shadow-lg shadow-gray-500/50 bg-black text-white rounded-lg text-[15px] active:scale-[.9]'> 
        {prop.value}
     </button>
    </> 
}