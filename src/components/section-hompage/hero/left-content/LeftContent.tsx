import Button from "../../../button/Button";
import Header from "../../header/Header";
import iconCode from "../../../../assets/icons/icon-code.png";
import iconLogo from "../../../../assets/images/logo-hero.png";

const LeftContent: React.FC = () => {
  return (
    <div className="hero-left">
      <Header />
      <div className="content-left flex-column item-start space-between">
        <div className="slogan">
          <span>Improve your</span> <br />
          <span>skills by </span>
          <span>
            <img src={iconCode} alt="Code icon" /> study
          </span>{" "}
          <br />
          with coding
        </div>
        <div className="description-hero flex-column item-start">
          <img className="icon-logo" src={iconLogo} alt="Logo" />
          <span>
            Create, launch, and iterate on new marketing campaigns without
            distracting your product team.
          </span>
        </div>
        <div className="hidden-sm">
          <Button
            width="236px"
            height={75}
            radius={2}
            paddingX={24}
            paddingY={24}
            background="#000000"
            isIcon={true}
            content="Get started"
            fontSize={22}
            color="#FFFFFF"
          />
        </div>
        <div className="hidden-lg">
          <Button
            radius={2}
            paddingX={24}
            paddingY={24}
            width={176}
            height={60}
            background="#000000"
            isIcon={true}
            content="Get started"
            fontSize={16}
            color="#FFFFFF"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
