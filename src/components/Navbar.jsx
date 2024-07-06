import React, { useState } from "react";

function Navbar({ data, setClick }) {
  return (
    <div className="z-10 navbar fixed top-0 px-40 flex item-center justify-between w-full h-[70px] bg-zinc-800">
      <div className="logo flex items-center h-full w-[15%]">
        <h2 className="font-bold text-3xl text-zinc-200">Taski</h2>
      </div>
      <div className="link flex items-center justify-end h-full w-[85%]">
        <button
          onClick={()=>setClick(!data)}
          className="shadow-md btn text-xs transition-colors font-semibold text-zinc-200 hover:text-zinc-100 hover:bg-zinc-200zz rounded-lg py-2 px-4 outline-none border-zinc-200 border-[1px]"
        >
          Add new
        </button>
      </div>
    </div>
  );
}

export default Navbar;
