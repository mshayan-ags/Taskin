import { useState } from "react";
import Button from "./Components/button";
import Checkbox from "./Components/checkbox";

function App() {
  const [allChecked, setAllCheked] = useState(false)
  return (
    <div className="flex flex-col  align-center items-center justify-center h-[100vh]">
      <div className="w-[30%] flex flex-col align-center items-center justify-center p-[20px] shadow-xl ">
        <div className="flex flex-row align-center items-center justify-between w-full px-[10px] py-[20px]">
          <p>All Pages</p>
          <Checkbox state={allChecked} setState={setAllCheked} />
        </div>
        <div className="flex flex-col align-center items-center justify-between w-full mx-[10px] my-[20px] py-[20px] border-y-[1px]">
          {[1, 2, 3, 4].map((a) => (
            <div className="flex flex-row align-center items-center justify-between w-full px-[10px] py-[10px]">
              <p>Page {a}</p>
              <Checkbox state={allChecked || null} setState={() => { }} />
            </div>
          ))}
        </div>
        <Button />
      </div>
    </div>
  );
}

export default App;
