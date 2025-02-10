import "./feature.scss";
import Carousel from "./carousel/Carousel";
import { FeatureItem } from "../../../model/ItemFeature";
import iconFirst from "../../../assets/icons/ft1.png";
import iconSecond from "../../../assets/icons/ft2.png";
import iconThird from "../../../assets/icons/ft3.png";


const Feature: React.FC = () => {
  const items: FeatureItem[] = [
    {
      id: 1,
      icon: iconFirst,
      title: "Best Tutors",
      content: "Bring your design vision to life in clean, semantic HTML5",
      isActive: false
    },
    {
      id: 2,
      icon: iconSecond,
      title: "Flexible",
      content: "Connect your marketing tools with built-in integrations",
      isActive: false
    },
    {
      id: 3,
      icon: iconThird,
      title: "Easy Access",
      content: "Easy Access Connect your marketing tools with built-in integrations",
      isActive: false
    },
    {
      id: 4,
      icon: iconFirst,
      title: "Other",
      content: "Easy Access Connect your marketing tools with built-in integrations",
      isActive: false
    }
  ];

  return (
    <div className="container-feature">
      <Carousel items={items} />
    </div>
  );
};

export default Feature;
