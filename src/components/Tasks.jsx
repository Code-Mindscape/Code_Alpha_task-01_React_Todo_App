  import React, { useState } from 'react'
  import '../index.css'

  import LocomotiveScroll from 'locomotive-scroll';
  import Task from './Task';
  const scroll = new LocomotiveScroll();

  function Tasks({tasklist, addTask}) {
    return (
      <div className="wrapper overflow-hidden box-content flex w-[50%] max-h-[95%] rounded-xl">
        <div className='taskBox overflow-y-scroll flex items-center flex-col w-[100%] gap-4 max-h-[100%] py-3 px-3 bg-zinc-800 rounded-xl border-[1px] border-zinc-100/10'>
        {tasklist.length === 0 ? (<h3 className='text-zinc-400 font-semibold text-1xl tracking-wide'>Add tasks Here</h3>): null }
        {tasklist.map((item, index)=>(
          <Task key={index} tasklist={tasklist} addTask={addTask} item={item} index={index}/>
        ))}
      </div>
      </div>
    )
  }

  export default Tasks