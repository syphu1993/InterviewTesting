import ItemReview from "./item-review/ItemReview";
import iconUni from "../../../assets/images/icon-uni.png";
import iconShowCase from "../../../assets/images/icon-show-case.png";
import React from "react";
import "./review.scss";
import { InformationReview } from "../../../model/ItemReview";
import PeopleReview from "./people-review/PeopleReview";

const Review: React.FC = () => {
  const listItems: InformationReview[] = [
    {
      icon: iconUni,
      title: "University",
      content: `Browse hundreds of in-depth videos, courses, and guides to get up and running fast`,
    },
    {
      icon: iconShowCase,
      title: "Showcase",
      content: `Get inspired by the incredible websites built by members of the community`,
    },
  ];

  return (
    <div className="container-review flex-row space-between">
      <div className="left-box flex-column item-start">
        <p className="large-title w-75 title-big">
          Get up and running fast together{" "}
        </p>
        <div className="box-item w-100 flex-row">
          {listItems.map((item, index) => (
            <React.Fragment key={index}>
              <ItemReview
                icon={item.icon}
                title={item.title}
                content={item.content}
              />
              {index < listItems.length - 1 && (
                <div className="vertical-line"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <PeopleReview />
    </div>
  );
};

export default Review;
