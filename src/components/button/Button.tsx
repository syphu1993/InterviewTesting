import iconVector from "../../assets/icons/vector-btn.png";
import "./button.scss";

interface ButtonProps {
  width: string | number;
  height: number;
  radius?: number;
  background?: string;
  content: string;
  isIcon?: boolean;
  paddingX?: number;
  paddingY?: number;
  fontSize?: number;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  width,
  height,
  radius,
  background,
  content,
  isIcon,
  paddingX,
  paddingY,
  fontSize=22,
  color,
}) => {

  const classBtn: string = "btn flex-row item-center space-between"
  return (
    <button
      className= {isIcon ? classBtn : `${classBtn} content-center`} 
      style={{
        width: width,
        height: `${height}px`,
        borderRadius: `${radius}px`,
        background: background,
        padding: `${paddingY}px ${paddingX}px`,
      }}
    >
      <span style={{ fontSize: `${fontSize}px`, color: color }}>{content}</span>
      {isIcon && <img className="icon-button" src={iconVector} alt="" />}
    </button>
  );
};

export default Button;
