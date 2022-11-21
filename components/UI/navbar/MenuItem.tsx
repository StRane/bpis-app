import React from "react";

import Link from "next/link";
import { useState } from "react";

import useScrollPosition from "../../../hooks/useScrollPosition";

import HomeIcon from "../../../images/header/logo_bpis.webp";
import SocialMedia from "./SocialMedia";

const NavMenu: React.FC<{
  content: {
    id: number;
    name: string;
    hovering?: boolean;
    submenu?: { title: string; adress: string }[];
    target?: string;
  }[];
  isActive: (val: number) => void;
  type: string;
}> = (props) => {
  //Desktop Menu props

  const scrolling = useScrollPosition();

  const scrollingStyle = () => {
    return scrolling === "down" ? "-translate-y-full" : "";
  };

  //Company Logo
  const logo = (
    <div className="inline-block absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2">
      logo
    </div>
  );
  //Note: check top alignment

  const desktopStyle =
    "text-center inline-grid grid-cols-[6rem_1fr] grid-rows-[40px_50px] text-lg gap-x-0 tracking-wide w-full shadow-sm fixed top-0 left-0 z-50 transition-all ease-in-out duration-1000 " +
    scrollingStyle();

  //Desktop style end
  //Mobile style start
  const [showMenu, setShowMenu] = useState(false);

  const mobileMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const mobileMenuStyle = (condition: boolean) => {
    return condition
      ? "w-full bg-white/90 min-h-2/5"
      : `bg-white h-1/12 w-full ${scrollingStyle()}`;
  };

  const mobileStyle =
    "transition-all duration-1000 fixed z-50 col-span-2 " +
    mobileMenuStyle(showMenu);

  //Button of mobile menu style
  const buttonLines =
    "block h-px w-6 transition-transform duration-500 border-black origin-left";

  const linesTransition = (check: boolean, position: string) => {
    return check
      ? position === "top"
        ? "rotate-45 translate-x-1"
        : position === "bottom"
        ? "-rotate-45 translate-x-1"
        : "opacity-0"
      : "";
  };

  const mobileButton = (
    <button
      className="h-4 m-3 border-black text-black border p-8 group"
      onClick={mobileMenuHandler}
    >
      <hr
        className={`-translate-y-2 ${linesTransition(
          showMenu,
          "top"
        )} ${buttonLines}`}
      />
      <hr className={`${linesTransition(showMenu, "")} ${buttonLines}`} />
      <hr
        className={`translate-y-2 ${linesTransition(
          showMenu,
          "bottom"
        )} ${buttonLines}`}
      />
    </button>
  );
  //Button design end

  //Mobile style end

  //Menu Style start
  const menuStyle = () => {
    return props.type === "desktop" ? desktopStyle : mobileStyle;
  };

  const currentStyle: string = menuStyle();
  //Menu Style end

  //Screen size theme
  const themeSelector = (type: string) => {
    const desktop = {
      mainListStyle:
        "col-start-2 col-end-13 grid grid-cols-6 divide-x-1 divide-dashed items-center bg-white",
      listItemBehavior: "hover:text-bpisg my-auto",
      activeItemS:
        "absolute z-50 flex flex-col space-y-1.5 w-[16%] text-base shadow-md px-5 py-3 bg-white",
      subMenuStyle: "text-bpisgry hover:text-bpisg text-left text-base mt-5",
    };
    const mobile = {
      mainListStyle: "text-black uppercase text-left",
      listItemBehavior: "",
      activeItemS: "flex flex-col leading-5",
      subMenuStyle: "text-xs",
    };
    return type === "desktop" ? desktop : mobile;
  };

  const currentListTheme = themeSelector(props.type);

  //Screen size theme end

  const menu = (
    <nav className={currentStyle}>
      {props.type === "desktop" ? (
        <>
          <Link
            href="/"
            className="col-span-1 row-span-2 object-cover bg-white"
          >
            <img
              className="w-[4.3125rem] h-[5.1875rem] mx-auto my-1 inline"
              src={HomeIcon.src}
              alt="BPIS school logo"
            />
          </Link>
          <SocialMedia />
        </>
      ) : (
        <></>
      )}
      {props.type === "desktop" ? <></> : <>{mobileButton}</>}
      {props.type === "mobile" && !showMenu ? (
        <></>
      ) : (
        <div>
          <Link href="/">HOME</Link>
          <div className={currentListTheme.mainListStyle}>
            {props.content.map((item) => (
              <ul
                onMouseEnter={
                  props.type === "desktop"
                    ? () => props.isActive(item.id)
                    : undefined
                }
                onMouseLeave={
                  props.type === "desktop"
                    ? () => props.isActive(item.id)
                    : undefined
                }
                onClick={
                  props.type === "mobile"
                    ? () => props.isActive(item.id)
                    : undefined
                }
                className="text-center align-center w-full"
                key={`navItem_${props.type}__${item.id}`}
              >
                <li
                  className={currentListTheme.listItemBehavior}
                  key={`navItem__${item.id}`}
                >
                  {item.target ? (
                    <Link href={item.target}>{item.name}</Link>
                  ) : (
                    <>{item.name}</>
                  )}
                  {item.submenu ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="fill-current top-7 h-5 w-5 inline-block"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  ) : (
                    <></>
                  )}
                </li>
                {item.submenu ? (
                  <>
                    {item.hovering ? (
                      <div className={currentListTheme.activeItemS}>
                        {item.submenu.map((item, index) => (
                          <Link
                            href={item.adress}
                            className={currentListTheme.subMenuStyle}
                            key={`navItem__${props.type}__${index}`}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </ul>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  return <>{menu}</>;
};

export default NavMenu;
