import "./header.scss";
import iconArrowDesk from "../../../assets/icons/icon-header.png";
import iconArrowMobile from "../../../assets/icons/icon-header-mb.png";

import DropdownLanguages from "../../dropdown-languages/DropdownLanguage";
import { JSX, useState } from "react";
import MenuOverlay from "../../menu-overlay/MenuOverlay";
import iconExpand from "../../../assets/icons/icon-expand-menu.png";
import MyImage from "../../my-image/MyImage";

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

  const srcSet = `${iconArrowMobile} 500w, ${iconArrowDesk} 2000w`
  const size = `(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw`

  return (
    <div className="container-header">
      <div className="flex-row item-center">
        <MyImage srcSet={srcSet} className={'icon-arrow pointer'} size={size} />
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
