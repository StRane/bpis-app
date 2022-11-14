import useWindowDimensions from "../../helper/WindowDimensions";
import { useState } from "react";

import NavMenu from "./MenuItem";

const NavBar = () => {
  type menuitem = {
    name: string;
    id: number;
    hovering?: boolean;
    submenu?: { title: string; adress: string }[];
    target?: string;
  };

  const [menuItems, setMenuItems] = useState<menuitem[]>([
    {
      name: "About BPIS",
      id: 0,
      hovering: false,
      submenu: [
        { title: "Our History", adress: "/history" },
        { title: "Our Vision and Mission", adress: "/vision" },
        { title: "Achievements", adress: "/achievements" },
      ],
    },
    {
      name: "Admissions",
      id: 1,
      hovering: false,
      submenu: [
        { title: "School Fees", adress: "/school-fees" },
        { title: "Procedure", adress: "/procedure" },
      ],
    },
    {
      name: "Academics",
      id: 2,
      hovering: false,
      submenu: [
        { title: "Yr. 7-9 (Key Stage3)", adress: "/yr7-9-program" },
        { title: "Yr. 10-11 (IGCSE)", adress: "/yr10-11-program" },
        { title: "Yr. 12-13 (A-Level)", adress: "/yr12-13-program" },
      ],
    },
    {
      name: "Connect",
      id: 3,
      hovering: false,
      submenu: [
        { title: "Activities", adress: "/activities" },
        { title: "Gallery", adress: "/gallery" },
        { title: "School Magazine", adress: "/school-magazine" },
      ],
    },
    {
      name: "Schedule",
      id: 4,
      target: "/schedule",
    },
    {
      name: "Contact Us",
      id: 5,
      target: "/contact-us",
    },
  ]);

  const itemActivationHandler = (id: number) => {
    const newMenu = [...menuItems];
    const item: menuitem | undefined = newMenu.find((item) => item.id === id);
    if (item) {
      item.hovering = !item.hovering;
      setMenuItems(newMenu);
    }
  };

  const window = useWindowDimensions();

  const checkStyle = () => {
    return(window.width > 800? "desktop" : "mobile")
 }

 const currentStyle = checkStyle();

  return (
    <NavMenu
      content={menuItems}
      isActive={itemActivationHandler}
      type={currentStyle}
    />
  );
};

export default NavBar;
