import React, { useState, useEffect } from 'react';
import Popup from './Popup';
import Tasks from './Tasks';

function Main({ data, setClick }) {
  const [tasklist, setTasklist] = useState(() => {
    const savedTasks = localStorage.getItem('tasklist');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(tasklist));
  }, [tasklist]);

  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [checkValue, setheckValue] = useState(false);

  return (
    <div className='pt-20 pb-3 main relative flex items-start justify-center w-full h-full'>
      <Popup addT={setTasklist} tasklist={tasklist} data={data} setClick={setClick} />
      <Tasks checkVal={checkValue} setCheckVal={setheckValue} addTask={setTasklist} tasklist={tasklist} />
    </div>
  );
}

export default Main;
