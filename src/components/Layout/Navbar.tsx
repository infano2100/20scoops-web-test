import { useState, useEffect } from "react";
import styled from "styled-components";

import { IconWeb, IconPhone } from "../SVG";
import { menu } from "@constants/menu";

const Nav = () => {
  const [stickyClass, setStickyClass] = useState<string>("");
  const [stickyBtnClass, setStickyBtnClass] = useState<string>("");
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpenMenuMobile) {
      setStickyClass("");
      setStickyBtnClass("");
    }
  }, [isOpenMenuMobile]);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;

      if (windowHeight > 10) {
        setStickyClass("bg-primary-500 duration-1000");
        setStickyBtnClass("border-2 border-solid border-white");
      } else {
        setStickyClass("");
        setStickyBtnClass("");
      }
    }
  };

  return (
    <nav className={`fixed z-[100] block w-full overflow-y-hidden`}>
      <div
        className={`set-padding ${stickyClass} ${
          isOpenMenuMobile ? "ease bg-primary-500" : ""
        }  w-full px-6 transition md:px-8 max-h-90-px`}
      >
        <div
          id="desktop-navbar"
          className="mx-auto flex h-[90px] w-full flex-row items-center justify-between text-lg text-white lg:max-w-[1144px]"
        >
          <a href="/">
            <IconWeb />
          </a>
          <div className="flex gap-x-8">
            {menu.map((val: string) => (
              <a className="hidden lg:block text-white" href="/">
                {val}
              </a>
            ))}
          </div>
          <div className="flex items-center ">
            <button
              className={`null mx-6 hidden h-14 w-[186px] items-center justify-center border-white text-lg text-white md:flex lg:mx-0 flex bg-primary-500 hover:bg-primary-600 active:bg-primary-700  min-w-[140px] rounded-[100px] px-4 py-3  font-semibold leading-4 text-white ${
                isOpenMenuMobile ? "hidden" : ""
              } ${stickyBtnClass}`}
            >
              <IconPhone />
              02303 942370
            </button>

            <MenuMobile
              onClick={() => setIsOpenMenuMobile((preState) => !preState)}
              className={`block lg:hidden ${
                isOpenMenuMobile ? "openMenu" : "closeMenu "
              }`}
            >
              {Array.from({ length: 3 }, (_: number) => (
                <span></span>
              ))}
            </MenuMobile>
          </div>
        </div>
        <div id="mobile-navbar" className="flex h-screen flex-col lg:hidden">
          <div
            className={`flex flex-grow flex-col gap-y-6 bg-white pt-8 pb-14 text-center md:gap-y-10 md:pt-44 lg:hidden ${
              isOpenMenuMobile ? "" : "hidden "
            }`}
          >
            {menu.map((val: string) => (
              <a className="text-black" href="/">
                {val}
              </a>
            ))}
            <button
              className={`null mx-auto h-14 items-center px-8 text-lg md:mt-16 flex bg-primary-500 hover:bg-primary-600 active:bg-primary-700 min-w-[140px] rounded-[100px]  py-3  font-semibold leading-4 text-white`}
            >
              <IconPhone />
              02303 942370
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

const MenuMobile = styled.div`
  user-select: none;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1) 0s;
  transform: translateY(3px);
  cursor: pointer;

  &.openMenu {
    & span:first-child {
      transform-origin: 0% 0%;
    }
    & span:nth-last-child(2) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }
    span:nth-last-child(1) {
      transform: rotate(-45deg) translate(-2px, 1px);
      transform-origin: 0% 100%;
    }
    & > span {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, -1px);
    }
    & > span {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;
      background: rgb(255, 255, 255);
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1) 0s,
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1) 0s,
        opacity 0.55s ease 0s;
    }
  }
  &.closeMenu {
    & > span:first-child {
      transform-origin: 0% 0%;
    }
    & > span:nth-last-child(1) {
      transform-origin: 0% 100%;
    }
    & > span {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;
      background: rgb(255, 255, 255);
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1) 0s,
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1) 0s,
        opacity 0.55s ease 0s;
    }
  }
`;
