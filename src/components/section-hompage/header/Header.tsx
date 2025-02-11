import "./header.scss";
import iconArrow from "../../../assets/icons/icon-header.png";
import DropdownLanguages from "../../dropdown-languages/DropdownLanguage";
import { JSX, useState } from "react";
import MenuOverlay from "../../menu-overlay/MenuOverlay";
import iconExpand from "../../../assets/icons/icon-expand-menu.png";

const Header: React.FC = () => {
  const listItem: string[] = ["Tutorials", "Case studies", "Resources"];
  const menuItems: JSX.Element[] = [];
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  listItem.forEach((item, index) => {
    menuItems.push(<span className="pointer text-menu-header" key={`item-${index}`}>{item}</span>);
    if (index < listItem.length - 1) {
      menuItems.push(
        <span key={`dot-${index}`} className="dot">
          {" "}•{" "}
        </span>
      );
    }
  });

  return (
    <div className="container-header">
      <div className="flex-row item-center">
        <img className="icon-arrow pointer" src={iconArrow} alt="" />
        <div className="text-brand hidden-lg">macode.</div>
      </div>
      <div className="menu hidden-sm">{menuItems}</div>
      <div className="flex-row item-center">
        <DropdownLanguages />
        <img className="hidden-lg icon-expand" src={iconExpand} alt="" onClick={toggleMenu} />
      </div>
      <MenuOverlay isShow={isMenuVisible} onClose={toggleMenu} />
    </div>
  );
};

export default Header;
