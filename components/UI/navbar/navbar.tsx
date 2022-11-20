import useWindowDimensions from "../../helper/WindowDimensions";
import { useState,useContext } from "react";
import MediaContext from "../../../store/media-context";



import NavMenu from "./MenuItem";

const NavBar = () => {
  type menuitem = {
    name: string;
    id: number;
    hovering?: boolean;
    submenu?: { title: string; adress: string }[];
    target?: string;
  };

  const mediCtx = useContext(MediaContext);

  const menu = mediCtx.menuitem;

  const [menuItems, setMenuItems] = useState<menuitem[]>(menu);

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
