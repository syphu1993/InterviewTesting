import "./loader.scss";

interface LoaderProps {
  width?: string | number; 
}

const Loader: React.FC<LoaderProps> = ({ width }) => {
  return (
    <div className="loader" style={{ width: width }}>
    </div>
  );
};

export default Loader;
