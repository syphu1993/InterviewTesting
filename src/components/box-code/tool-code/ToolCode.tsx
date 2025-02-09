import "./tool.scss";
import iconUser from "../../../assets/icons/user.png";

interface Icon {
  id: number;
  src: string;
}

interface ToolCodeProps {
  background: string; 
  icons: Icon[];
}

const ToolCode: React.FC<ToolCodeProps> = ({ background, icons }) => {
  return (
    <div className="tool-code flex-column space-between" style={{ background }}>
      <div className="flex-column item-center list-tools">
        {icons.map((item) => (
          <img key={item.id} className="icon-tool" src={item.src} alt="" />
        ))}
      </div>
      <img className="icon-tool" src={iconUser} alt="" />
    </div>
  );
};

export default ToolCode;
