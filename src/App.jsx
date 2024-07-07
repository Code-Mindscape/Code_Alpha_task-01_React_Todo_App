import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

import LocomotiveScroll from "locomotive-scroll";
import { Theme } from "@radix-ui/themes/dist/cjs/index.js";
function App() {
  const [click, setClick] = useState(false);
  const scroll = new LocomotiveScroll();
  return (
    <Theme>
      <div
        data-scroll-container
        className="main box-border w-full h-screen bg-zinc-900 flex items-center justify-center"
      >
        <div className="mainContent w-full h-full flex item-center flex-col justify-center">
          <Navbar data={click} setClick={setClick} />
          <Main data={click} setClick={setClick} />
        </div>
      </div>
    </Theme>
  );
}

export default App;
