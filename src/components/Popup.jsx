import React, { useRef } from "react";
let nextindx = 0;

function Popup({ tasklist, addT, data, setClick}) {
  const popupRef = useRef(null);
  function showPopUp() {
    setClick(!data);
  }
  function addTask() {
    let titleBox = document.getElementById("task_title");
    let descBox = document.getElementById("task_desc");

    if(titleBox.value && descBox.value){
      addT([
        ...tasklist,
        {title: titleBox.value, desc: descBox.value, i: nextindx++}
    ])
    titleBox.value = "";
    descBox.value = "";
    setClick(!data);
  }
  }
  return (
    <div
      ref={popupRef}
      className={`popup ${
        data ? "animate_popup" : ""
      } absolute rounded-2xl h-[290px] border-[1px] border-zinc-200/15 w-[560px] bg-zinc-950/50`}
    >
      <div className="popWrapper w-full h-full flex items-center justify-center flex-col">
        <div className="titleBox flex items-center justify-center w-full h-[60px] border-b-[1px] border-zinc-200/15 px-1">
          <h2 className="font-semibold text-zinc-200/50 text-xl">
            Add a new Task
          </h2>
        </div>
        <div className="mainbox flex gap-4 items-center justify-center flex-col w-full h-[180px]">
          <input
            id="task_title"
            className="text-zinc-200 px-3 w-[90%] bg-transparent border-[1.5px] outline-none focus-within:border-zinc-200/50 rounded-md border-zinc-200/15 h-9"
            type="text"
            placeholder={"Add Title"}
          />
          <input
            id="task_desc"
            className="text-zinc-200 px-3 w-[90%] bg-transparent border-[1.5px] outline-none focus-within:border-zinc-200/50 rounded-md border-zinc-200/15 h-9"
            type="text"
            placeholder={"Add description"}
          />
        </div>
        <div className="btn flex items-center gap-3 justify-end w-full h-[50px] px-6 pb-6">
          <button
            onClick={addTask}
            className="shadow-md active:scale-[0.97] btn bg-zinc-200 text-zinc-800 text-sm transition-colors font-semibold hover:text-zinc-800 hover:bg-zinc-200 rounded-lg py-2 px-6 outline-none"
          >
            Add
          </button>
          <button
            onClick={showPopUp}
            className="shadow-md active:scale-[0.97] btn text-xs transition-colors font-semibold text-zinc-200 hover:text-zinc-200 hover:bg-zinc-200/15 rounded-lg py-2 px-6 outline-none border-zinc-200/10 border-[2px]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
