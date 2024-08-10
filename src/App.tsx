import { useState } from 'react'
import './App.css'
import Button from './button'

function App() {
  let nList=[...Array(10).keys()]
  let oList=['+','-',"/",'*','%',"P",'=','C']
  const [display,setDisplay]=useState(0);
  const [buffer,setBuffer]=useState(0);
  const [operation,setOperation]=useState("");
  let nElements=nList.map((num:number)=>{return <Button value={num} clicked={(e:number|string)=>logic(e,setDisplay,setOperation,setBuffer)}></Button>});
  let oElements=oList.map((num:string)=>{return <Button value={num} clicked={(e:number|string)=>logic(e,setDisplay,setOperation,setBuffer)}></Button>});
  
  return (<div className='p-4 div'>
     <div className='div p-1 flex flex-wrap justify-between'>
        <p className='p-2 div text-wrap '>
          {display}
        </p>
        <p className='p-2 div'>
          {operation}
        </p>
        <p className='p-2 div text-wrap '>
          {buffer}
        </p>
     </div>
    <div className='p-2 div'>
    <div className='p-2'> 
          Numbers
     </div>
    <div className='p-5 grid items-center grid-cols-4 gap-4 mx-auto  md:mt-2 md:grid-cols-5 '>
     {nElements}
    </div>
    </div>
    <div className='p-2 div'>
     <p className='p-1'> 
          Operators
     </p>
     <div className='p-5 grid items-center grid-cols-4 gap-4 mx-auto  md:mt-2 md:grid-cols-6'>
      {oElements}
     </div>
    </div>
    
    </div>
  )
    
}

export default App
let display:number=0;
let buffer:number=0;
let operation:string="";
function logic(input:string|number,setDisplay:CallableFunction,setOperation:CallableFunction,setBuffer:CallableFunction){
  if(input==="="){
    display=doOperation(buffer,display,operation);
    setDisplay(display);
    setBuffer(buffer);
    return
  }
  if(input==="C"){
    display=0
    buffer=0
    operation=""
    setDisplay(display);
    setOperation(operation);
    setBuffer(buffer);
    return
  }
  if (typeof input === "number"){
     display=10*display+input
     setDisplay(display)
     return
  }
  if(typeof input === "string"){
      operation=input
      buffer=display
      display=0
      setOperation(operation)
      setDisplay(display)
      setBuffer(buffer)
  }
  
}
function doOperation(operand1:number,operand2:number,operator:string){
 buffer=0;
 display=0;
 if(operand2==0 && (operator=="/"||operator=="%"))return Infinity 
 switch (operator) {
  case '+':return operand1+operand2
  case '-':return operand1-operand2
  case '*':return operand1*operand2
  case '/':return operand1/operand2
  case '%':return operand1%operand2
  case 'P':return operand1**operand2
  default:return 0;
 }
}