import React from "react";
import { FaMobile, FaTabletAlt, FaDesktop } from "react-icons/fa";
import useWindowSize from "./hooks/useWindowSize";

const Header = () => {
  const { width } = useWindowSize();
  return (
    <header className="Header">
      Great React Project &nbsp; &nbsp;
      {width < 650 ? (
        <FaMobile />
      ) : width < 800 ? (
        <FaTabletAlt />
      ) : (
        <FaDesktop />
      )}
    </header>
  );
};

export default Header;
