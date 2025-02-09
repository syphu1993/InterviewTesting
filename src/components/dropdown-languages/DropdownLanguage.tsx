import "./languages.scss";
import iconLanguageEn from "../../assets/icons/icon-english.png";
import iconLanguageVn from "../../assets/icons/icon-vn.png";
import iconLineArrow from "../../assets/icons/linear-arrow.png";
import iconExpand from "../../assets/icons/icon-expand-menu.png";

import React, { useState, useEffect, useRef } from "react";

interface Language {
  id: number;
  icon: string;
  name: string;
  shortName: string;
}

const DropdownLanguages: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>({
    id: 1,
    icon: iconLanguageEn,
    name: "ENLISH",
    shortName: "EN",
  });
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const listLanguage: Language[] = [
    {
      id: 1,
      icon: iconLanguageEn,
      name: "ENLISH",
      shortName: "EN",
    },
    {
      id: 2,
      icon: iconLanguageVn,
      name: "VIET NAM",
      shortName: "VN",
    },
  ];

  const handleOptionClick = (event: React.MouseEvent<HTMLDivElement>, language: Language) => {
    event.stopPropagation();
    setLanguage(language);
    setIsOpen(false);
  };

  const openDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div onClick={openDropdown} className="flex-row item-center" ref={dropdownRef}>
      <div className="language flex-row item-center space-between">
        <img width={20} height={20} src={language.icon} alt="" />
        <span>{language.shortName}</span>
        <img
          width={20}
          height={20}
          src={iconLineArrow}
          alt=""
          className={`arrow ${isOpen ? "rotated" : ""}`}
        />
      </div>
      <img className="hidden-lg icon-expand" src={iconExpand} alt="" />
      {isOpen && (
        <div className="dropdown-menu flex-column">
          {listLanguage.map((lang) => (
            <div
              className="item-language flex-row item-center"
              onClick={(event) => handleOptionClick(event, lang)}
              key={lang.id}
            >
              <img
                width={20}
                height={20}
                src={lang.icon}
                alt={lang.name}
              />
              <span className="small-text">
                {lang.name.toLocaleUpperCase()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownLanguages;
