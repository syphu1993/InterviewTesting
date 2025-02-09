import "./code.scss";
import Loader from "./loader/Loader";
import ToolCode from "./tool-code/ToolCode";
import iconFile from "../../assets/icons/file.png";
import iconShare from "../../assets/icons/share.png";
import iconSearch from "../../assets/icons/search.png";

interface LineLoader {
  id: number;
  width: string | number; 
}

interface BoxCodeProps {
  contentCode: string;
  widthContent: number;
  listLineLoaders: LineLoader[];
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  backgroundTool: string;
}

const BoxCode: React.FC<BoxCodeProps> = ({
  contentCode,
  widthContent,
  listLineLoaders,
  position,
  backgroundTool,
}) => {
  const listIconTool = [
    { id: 1, src: iconFile },
    { id: 2, src: iconSearch },
    { id: 3, src: iconShare },
  ];

  return (
    <div style={{ position }} className="box-code flex-row">
      <ToolCode background={backgroundTool} icons={listIconTool} />
      <div>
        <div
          className="code"
          style={{ width: `${widthContent}px` }}
          dangerouslySetInnerHTML={{ __html: contentCode }}
        />
        {listLineLoaders.map((item) => (
          <Loader key={item.id} width={item.width} />
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default BoxCode;
