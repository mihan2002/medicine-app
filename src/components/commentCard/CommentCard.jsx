import React from "react";
import "./CommentCard.css";

const Comment = ({ reviewerImage, reviewerName, reviewDate, reviewText }) => {
  return (
    <div className="review">
      <img src={reviewerImage} alt={reviewerName} className="reviewer-img" />
      <div className="review-content">
        <p className="reviewer-name">{reviewerName}</p>
        <p className="review-date">{reviewDate}</p>
        <p className="review-text">{reviewText}</p>
      </div>
    </div>
  );
};

export default Comment;
