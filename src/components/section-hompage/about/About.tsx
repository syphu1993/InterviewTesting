import "./about.scss";
import imageFirstAbout from "../../../assets/images/first-about.png";
import imageSecondAbout from "../../../assets/images/second-about.png";
import imageThirdAbout from "../../../assets/images/third-about.png";
import { IconTool } from "../../../model/IconTool";
import MyImage from "../../my-image/MyImage";

const About: React.FC = () => {
  const listLogo: IconTool[] = [
    {
      id: 1,
      src: imageFirstAbout,
    },
    {
      id: 2,
      src: imageSecondAbout,
    },
    {
      id: 3,
      src: imageThirdAbout,
    },
  ];

  return (
    <div className="container-about flex-row item-center space-between">
      {listLogo.map((item) => (
        <MyImage key={item.id} src={item.src} alt={`About image ${item.id}`} />
      ))}
    </div>
  );
};

export default About;
