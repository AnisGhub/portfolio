/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import useThemeSwitcher from '../../customHooks/useThemeSwitcher';
import Button from '../ui/Button';
import HireMeModal from '../HireMeModal';
import logo from '../../images/logo-placeholder.png';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [theme, toggleTheme] = useThemeSwitcher('dark');

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const showHireMeModal = () => {
    setShowModal(!showModal);
    document.getElementsByTagName('html')[0].classList.toggle('overflow-y-hidden');
  };
  return (
    <header className="header">
      <nav id="nav" className="sm:container sm:mx-auto">
        <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
          {/* Header menu links and small screen hamburger menu */}
          <div className="flex justify-between items-center px-4 sm:px-0">
            <div>
              <NavLink to="/">
                {theme === 'dark' ? (
                  <img src={logo} className="w-36" alt="Dark Logo" />
                ) : (
                  <img src={logo} className="w-36" alt="Light Logo" />
                )}
              </NavLink>
            </div>

            {/* Theme switcher small screen */}
            <div
              onClick={toggleTheme}
              aria-label="Theme Switcher"
              className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
            >
              {theme === 'light' ? (
                <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
              ) : (
                <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
              )}
            </div>

            {/* Small screen hamburger menu */}
            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="focus:outline-none"
                aria-label="Hamburger Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
                >
                  {showMenu ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
                </svg>
              </button>
            </div>
          </div>

          {/* Header links small screen */}
          <div
            className={
              showMenu
                ? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
                : 'hidden'
            }
          >
            <NavLink
              to="/projects"
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="Projects"
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
              aria-label="About Me"
            >
              About Me
            </NavLink>
            <div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
              <span
                onClick={showHireMeModal}
                className="font-nunito-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
                aria-label="Hire Me Button"
              >
                <Button title="Hire Me" />
              </span>
            </div>
          </div>

          {/* Header links large screen */}
          <div className="font-nunito-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
            <NavLink
              to="/projects"
              className="block text-left text-2xl text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="Projects"
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className="block text-left text-2xl text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="About Me"
            >
              About Me
            </NavLink>
          </div>

          {/* Header right section buttons */}
          <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
            <div className="hidden md:flex">
              <span
                onClick={showHireMeModal}
                className="text-md font-nunito-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
                aria-label="Hire Me Button"
              >
                <Button title="Hire Me" />
              </span>
            </div>

            {/* Theme switcher large screen */}
            <div
              onClick={toggleTheme}
              aria-label="Theme Switcher"
              className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
            >
              {theme === 'light' ? (
                <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
              ) : (
                <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
              )}
            </div>
          </div>
          {/* Hire Me Modal */}
          {showModal && <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
