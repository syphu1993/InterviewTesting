import { InformationProduct } from "../../../model/InformationProduct";
import ItemProduct from "./item-product/ItemProduct";
import "./product.scss";

const Product: React.FC = () => {
  const listProduct: InformationProduct[] = [
    {
      id: 1,
      name: "DEVELOPMENT",
      price: 10,
      modules: ["1 Module Javascript", "1 Module Human Resources"],
      isNew: false,
    },
    {
      id: 2,
      name: "IT & SOFTWARE",
      price: 30,
      modules: [
        "1 Module Javascript",
        "1 Module Human Resources",
        "2 Module Sales Teams",
        "Pack Marketing Skills",
        "5 Module Study Case",
      ],
      isNew: true,
    },
    {
      id: 1,
      name: "BUSINESS",
      price: 30,
      modules: [
        "1 Module Javascript",
        "1 Module Human Resources",
        "2 Module Sales Teams",
      ],
      isNew: false,
    },
  ];
  return (
    <div className="container-product">
      <p className="w-100 large-title">Choose your package</p>
      <p className="short-title">
        We provide various types of packages just for you
      </p>
      <div className="w-100 flex-row item-end space-between cover-box">
        {listProduct.map((item) => (
          <ItemProduct
            name={item.name}
            price={item.price}
            modules={item.modules}
            isNew={item.isNew}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
