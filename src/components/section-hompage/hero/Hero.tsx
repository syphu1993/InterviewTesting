import "./hero.scss";
import LeftContent from "./left-content/LeftContent";
import RightContent from "./right-content/RightContent";

const Hero: React.FC = () => {
  return (
    <div id="hero" className="hero-section">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Hero;
