import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {


  const [count,setCount] = useState(0);

  function DecrementHandler(){
      setCount(count-1);
  }

  function IncrementHandler(){
    setCount(count+1);
  }

  function ResetHandler(){
    setCount(0);
  }




  return (
         <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">

          <div  className="text-[#0398d4] font-medium text-2xl">Increment and Decrement</div>

          <div  className="bg-white flex items-center py-3 rounded-sm text-[#344151]" >

            <button onClick={DecrementHandler} className=" w-20 text-[40px]" >-</button>

            <button className="w-[120px] text-center font-bold gap-12 text-3xl text-[25px] border-[#bfbfbf] border-x-2 ">{count}</button>

            <button onClick={IncrementHandler} className=" w-20 text-[40px]" >+</button>

          </div>

          <button onClick={ResetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg leading-1">Reset</button>
         </div> 
  );
}

export default App;
