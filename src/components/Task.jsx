import { Checkbox } from '@radix-ui/themes/dist/cjs/index.js';
import React from 'react'
import { MdDelete } from "react-icons/md";


function Task({item, addTask, tasklist, checkValue, setCheckValue}) {
  const handleCheckBox = ( taskli, id ) =>{
    taskli.filter((task) =>(
      task === id
    ))
  }
  return (
    <div key={item.i} className={`task flex items-center border ${item.priority=== "high"? "border-[#e93d82]" : "" } ${item.priority=== "normal"? "border-[#F76B15]" : "" }  ${item.priority=== "low"? "border-[#00A2C7]" : "" } justify-center w-full min-h-[70px] border-t-0 border-l-0 border-b-0 bg-zinc-600/50 rounded-lg border-r-8 `}>
          <div className="checkBox w-[10%] h-[70px] flex items-center justify-center">
          <Checkbox color="gray" onCheckedChange={handleCheckBox(tasklist, item.i)} checked={checkValue} />
          </div>
          <div className="textBox w-[80%] h-[70px] flex flex-col items-start justify-center">
              <div className="title text-lg font-bold flex text-zinc-300 items-end  w-full h-1/2  px-3">{item.title}</div>
              <div className="desc text-sm font-normal flex text-zinc-200/75 items-start w-full h-1/2  px-3">{item.desc}</div>
          </div>
          <div onClick={()=>{
            addTask(
              tasklist.filter(a => a.i !== item.i)
            )
          }} className="DeleteBox w-[10%] h-[70px] flex items-center justify-center">
            <span className='cursor-pointer text-2xl transition-colors text-zinc-400 hover:text-zinc-200 rounded-lg py-2 px-2 hover:bg-red-300/40'><MdDelete/></span>
          </div>
        </div>
  )
}

export default Task