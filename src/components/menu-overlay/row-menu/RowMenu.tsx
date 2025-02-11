import React from 'react';
import MyImage from '../../my-image/MyImage';
import "./row.scss";
import iconArrowMenu from "../../../assets/icons/linear-arrow.png";

interface RowMenuProps {
    icon: string;
    name: string;
}

const RowMenu: React.FC<RowMenuProps> = ({ icon, name }) => {

    return (
        <div className="container-row flex-row space-between item-center">
            <div className="flex-row item-center">
                <MyImage src={icon} className={'icon-menu-overlay'} />
                <p>{name}</p>
            </div>
            <MyImage src={iconArrowMenu} className={'icon-arrow-menu'} />
        </div>
    );
};

export default RowMenu;
