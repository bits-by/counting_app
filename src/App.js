import { useState } from "react";

function App() {

  const[count,setCount] = useState(0);


  // handler for increment ,decrement and reset..
  function decreseHandler(){
    setCount (count-1);
  }
  function increseHandler(){
    setCount (count+1);
  }
  function resetHandler(){
    setCount (0);
  }


  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10 ">
    
      <div className="text-[#0398d4] font-medium text-2xl" > Increment & decrement</div>

      <div className=" bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decreseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          -
        </button>
        <div className="font-bold g-12 text-5xl">
          {count}
        </div>
        <button onClick={increseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +
        </button>
      </div>

      {/* Reset Button */}
      <button onClick={resetHandler} className="text-white bg-[#0398d4] px-5 py-2 rounded-sm text-lg">
        Reset
      </button>
    </div>
  );
}

export default App;
