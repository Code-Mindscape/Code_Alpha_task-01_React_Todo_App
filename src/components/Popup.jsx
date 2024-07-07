import { Flex, Radio } from "@radix-ui/themes/dist/cjs/index.js";
import React, { useRef, useEffect } from "react";

let nextIndex = 0;

function Popup({ tasklist, addT, data, setClick }) {
  const popupRef = useRef(null);

  function showPopUp() {
    setClick(!data);
  }

  function addTask() {
    const titleBox = document.getElementById("task_title");
    const descBox = document.getElementById("task_desc");
    const priorityBoxes = document.getElementsByName("priority");

    let selectedPriority;
    for (let i = 0; i < priorityBoxes.length; i++) {
      if (priorityBoxes[i].checked) {
        selectedPriority = priorityBoxes[i].id;
        break;
      }
    }

    if (titleBox.value && descBox.value && selectedPriority) {
      addT([
        ...tasklist,
        { title: titleBox.value,
          desc: descBox.value, 
          priority: selectedPriority,
          isCompleted: false,
          id: nextIndex++ }
      ]);
      titleBox.value = "";
      descBox.value = "";
      setClick(!data);
    }
  }

  return (
    <div
      ref={popupRef}
      className={`popup ${data ? "animate_popup" : ""} absolute rounded-2xl h-[290px] border-[1px] border-zinc-200/15 w-[560px] bg-zinc-950/50`}
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
            placeholder="Add Title"
          />
          <input
            id="task_desc"
            className="text-zinc-200 px-3 w-[90%] bg-transparent border-[1.5px] outline-none focus-within:border-zinc-200/50 rounded-md border-zinc-200/15 h-9"
            type="text"
            placeholder="Add Description"
          />
        </div>
        <div className="priority_Box py-3 flex justify-start items-center w-[90%]">
          <Flex as="span" gap="3">
            <label htmlFor="high" className="text-zinc-100 flex items-center justify-center gap-1">
              <Radio color="crimson" id="high" name="priority" />High
            </label>
            <label htmlFor="normal" className="text-zinc-100 flex items-center justify-center gap-1">
              <Radio color="orange" id="normal" name="priority" />Normal
            </label>
            <label htmlFor="low" className="text-zinc-100 flex items-center justify-center gap-1">
              <Radio color="cyan" id="low" name="priority" />Low
            </label>
          </Flex>
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
