import MyImage from "../../../my-image/MyImage";


interface ItemFeatureProps {
    icon: string;
    title: string;
    content: string;
    isActive: boolean;
}

const ItemFeature: React.FC<ItemFeatureProps> = ({ icon, title, content, isActive }) => {
    const activeColor: string = '#DDF247';
    const noneColor: string = '#FFFFFF';

    return (
        <div style={{ background: isActive ? activeColor : noneColor }} className="item-feature flex-column item-start">
            <div className="cover-item flex content-center item-center">
                <MyImage className="icon-feature" src={icon} alt={title} />
            </div>
            <div>
                <p className="medium-title title">{title}</p>
                <p className="small-text">{content}</p>
            </div>
        </div>
    );
};

export default ItemFeature;
