import "./item.scss";

interface ItemReviewProps {
  icon: string;
  title: string;
  content: string;
}

const ItemReview: React.FC<ItemReviewProps> = ({ icon, title, content }) => {
  return (
    <div className="container-item flex-column item-start space-between">
      <img src={icon} alt={title} />
      <div>
        <p className="medium-title title">{title}</p>
        <p className="small-text">{content}</p>
      </div>
    </div>
  );
};

export default ItemReview;
