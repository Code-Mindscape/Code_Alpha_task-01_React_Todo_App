import React, { useState } from 'react'
import Popup from './Popup'
import Tasks from './Tasks'
function Main({data, setClick}) {
  const [tasklist, addTask] = useState([]);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  console.log(tasklist)
  return (
    <div className='pt-20 pb-3 main relative flex items-start justify-center w-full h-full'>
        <Popup addT={addTask} tasklist={tasklist} data={data} setClick={setClick}/>
        <Tasks addTask={addTask} tasklist={tasklist}/>
    </div>
  )
}

export default Main