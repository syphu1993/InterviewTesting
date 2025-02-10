import "./people.scss";
import imageRedMan from "../../../../assets/images/red-man.png";
import MyImage from "../../../my-image/MyImage";

const PeopleReview: React.FC = () => {
  return (
    <div className="container-people">
      <div className="sub-image">
        <div className="large-title">
          <p>TUTORS</p>
          <p>Anthoney Mills</p>
        </div>
        <MyImage className={'img-red-man'} src={imageRedMan} alt="RedMan"/>
      </div>
    </div>
  );
};

export default PeopleReview;
