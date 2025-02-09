import "./hero.scss";
import LeftContent from "./left-content/LeftContent";
import RightContent from "./right-content/RightContent";

const Hero: React.FC = () => {
  return (
    <div className="hero-section">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Hero;
