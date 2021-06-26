import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <button className='btn' onClick={closeSidebar}>
        <Link to='/'>Home</Link>
      </button>
      <button className='close-btn' onClick={closeSidebar}>
        <FaTimes />
      </button>
      <div className='sidebar'>
        <ul className='sidebar-ul'>
          <li className='sidebar-li' onClick={closeSidebar}>
            <Link to='/about'>About</Link>
          </li>
          <li className='sidebar-li' onClick={closeSidebar}>
            <Link to='/skills'>Skills</Link>
          </li>
          <li className='sidebar-li' onClick={closeSidebar}>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='sidebar-li' onClick={closeSidebar}>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='sidebar-li' onClick={closeSidebar}>
            <Link to='/contact'>Resume</Link>
          </li>
        </ul>
      </div>
      <ul className='sidebar-social'>
        <li className='sidebar-social-li'>
          <AiOutlineGithub />
        </li>
        <li className='sidebar-social-li'>
          <AiOutlineLinkedin />
        </li>
        <li className='sidebar-social-li'>
          <AiOutlineGithub />
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
