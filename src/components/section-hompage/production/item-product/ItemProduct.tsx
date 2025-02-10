import Button from "../../../button/Button";

interface ProductProps {
  name: string;
  price: number;
  modules: string[];
  isNew: boolean;
}
const ItemProduct: React.FC<ProductProps> = ({
  name,
  price,
  modules,
  isNew,
}) => {
  const productClass = isNew
    ? "item-product-new color-light"
    : "item-product-nomal";
  return (
    <div className={`item-product flex-column space-between ${productClass}`}>
      <p className="name">{name}</p>
      <span className="large-title">
        <sup style={{ fontSize: "22px" }}>$</sup>
        {price.toFixed(2)}
      </span>
      <div>
        {modules.map((module, index) => (
          <p className="modules" key={index}>
            {module}
          </p>
        ))}
      </div>
      <div className="hidden-sm">
        <Button
          width={306}
          height={56}
          radius={10}
          paddingX={108}
          paddingY={14}
          background={isNew ? "#DDF247" : "#FFFFFF"}
          color={isNew ? "#000000" : "#DDF247"}
          content={"By Now"}
          fontSize={22}
        />
      </div>
      <div className="hidden-lg">
        <Button
          width={267}
          height={50}
          radius={10}
          paddingX={90}
          paddingY={14}
          background={isNew ? "#DDF247" : "#FFFFFF"}
          color={isNew ? "#000000" : "#DDF247"}
          content={"By Now"}
          fontSize={22}
        />
      </div>
    </div>
  );
};

export default ItemProduct;
