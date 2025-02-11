import React from 'react';
import './menu.scss';
import MyImage from '../my-image/MyImage';
import iconClose from "../../assets/icons/close.png";
import { ItemRowMenu } from '../../model/ItemRowMenu';
import iconSetting from "../../assets/icons/setting.png";
import iconCase from "../../assets/icons/detail.png";
import iconResource from "../../assets/icons/bold-setting.png";
import RowMenu from './row-menu/RowMenu';



interface MenuOverlayProps {
    isShow: boolean;
    onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isShow, onClose }) => {
    const listItemRow: ItemRowMenu[] = [
        {
            id: 1,
            name: 'Tutorials',
            icon: iconSetting,
        },
        {
            id: 1,
            name: 'Case studies',
            icon: iconCase,
        },
        {
            id: 1,
            name: 'Resources',
            icon: iconResource,
        },
    ]
    return (
        <>
            {/* Overlay menu */}
            {isShow && (
                <div className="menu-overlay">
                    <div className="menu-content flex-column">
                        <div className='flex content-end' >
                            <div onClick={onClose}>
                                <MyImage src={iconClose} className={'icon-close'} />
                            </div>
                        </div>
                        <div className='cover-row flex-column'>
                            {listItemRow.map((item)=>(
                                <RowMenu icon={item.icon} name={item.name} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MenuOverlay;
