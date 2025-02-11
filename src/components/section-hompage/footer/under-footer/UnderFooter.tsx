import MyImage from "../../../my-image/MyImage";
import TopFooter from "../top-footer/TopFooter";
import iconArrowYellow from "../../../../assets/icons/yl-arrowpng.png";
import iconFacebook from "../../../../assets/icons/fb.png";
import iconInsta from "../../../../assets/icons/insta.png";
import iconIn from "../../../../assets/icons/in.png";
import iconX from "../../../../assets/icons/twit.png";
import iconMail from "../../../../assets/icons/mail.png";



const UnderFooter: React.FC = () => {
    const listItem: string[] = ["Tutorials", "Case studies", "Resources"];
    const listIconSocial: string[] = [iconFacebook, iconInsta, iconIn, iconX, iconMail];

    return (
        <div className="under-footer flex-column content-end">
            <TopFooter />
            <div className="under-menu flex-row item-center space-between">
                <div className="flex-row item-center">
                    <MyImage src={iconArrowYellow} className={'icon-arrow-under'} />
                    <p className="medium-title" >Macode</p>
                </div>
                <div className="flex-row item-center gap-20 menu-name">
                    {listItem.map((item) => (
                        <p className="text-menu-under">{item}</p>
                    ))}
                </div>
            </div>
            <hr />
            <div className="under-menu flex-row item-center space-between">
                <div className="flex-row item-center gap-20 box-social">
                    {
                        listIconSocial.map((icon) => (
                            <MyImage src={icon} className={'icon-social'} />
                        ))
                    }
                </div>
                <hr className="hidden-lg w-100"/>
                <p>
                    <span className="text-under-light">© 2021 Copyright. </span>
                    <span className="text-under-light text-end">Macode.io</span>
                </p>
            </div>
        </div>
    );
};

export default UnderFooter;
