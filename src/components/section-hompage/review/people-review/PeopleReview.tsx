import "./people.scss";
import imageRedMan from "../../../../assets/images/red-man.png";

const PeopleReview: React.FC = () => {
  return (
    <div className="container-people">
      <div className="sub-image">
        <div className="large-title">
          <p>TUTORS</p>
          <p>Anthoney Mills</p>
        </div>
        <img src={imageRedMan} alt="" />
      </div>
    </div>
  );
};

export default PeopleReview;
