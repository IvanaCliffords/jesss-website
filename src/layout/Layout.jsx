import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import Backdrop from "./backdrop/Backdrop";
import MobileNavbar from "./mobile-navbar/MobileNavbar";

const Layout = (props) => {
  const [mobileToggle, setMobileToggle] = useState(false);


  return (
    <div style={{ position: "relative" }}>
      <Navbar show={mobileToggle} click={() => setMobileToggle(true)} />
      <Backdrop show={mobileToggle} click={() => setMobileToggle(false)} />
      <MobileNavbar show={mobileToggle}  click={() => setMobileToggle(false)} />

      <main style={{ marginTop: "100px", minHeight: "65vh" }}>
        {props.children}
      </main>


    </div>
  );
};

export default Layout;
