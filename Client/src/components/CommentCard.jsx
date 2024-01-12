import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

function CommentCard({ subs, onDelete }) {
  // Initialize state variable showFullComment and its setter function
  const [showFullComment, setShowFullComment] = useState(false);

  // Function to toggle the visibility of the full comment
  const toggleShowComment = () => {
    setShowFullComment(!showFullComment);
  };

  const currentDate = new Date();

  // Format date to display month/year
  const monthYearOptions = {
    year: "2-digit",
    month: "2-digit",
    day: "numeric",
  };
  const formattedMonthYear = currentDate.toLocaleString(
    "us-US",
    monthYearOptions
  );

  // Format time to display hour/minutes
  const timeOptions = { hour: "2-digit", minute: "2-digit" };
  const formattedTime = currentDate.toLocaleString([], timeOptions);

  const dateTimeStyle = {
    fontSize: "12px", // Adjust the font size as needed
    color: "white", // Optional: Set the text color
  };

  // Setters and handlers for Likes & Dislikes
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <Card
      style={{
        width: "25rem",
        marginBottom: "20px",
        marginTop: "20px",
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "0 0 10px rgba(186, 189, 187, 0.7)",
      }}
    >
      <Card.Body>
        <div className="header-card d-flex justify-content-between ">
          <Card.Title
            style={{
              color: "#53b053",
            }}
          >
            {subs.name}
          </Card.Title>
          <div className="date-time text-light" style={dateTimeStyle}>
            {formattedTime} {formattedMonthYear}
          </div>
        </div>
        <Card.Text>
          {showFullComment
            ? subs.comment
            : subs.comment.length > 100
            ? `${subs.comment.substring(0, 100)}...`
            : subs.comment}
        </Card.Text>
        <div className="button-area d-flex justify-content-between">
          <div className="button-control-left d-flex gap-1">
            <Button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#53b053",
              }}
              className="d-flex justify-content-center align-items-center gap-1"
              onClick={handleLike}
            >
              <FontAwesomeIcon icon={faThumbsUp} />
              {likes}
            </Button>
            <Button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "red",
              }}
              className="d-flex justify-content-center align-items-center gap-1"
              onClick={handleDislike}
            >
              <FontAwesomeIcon icon={faThumbsDown} />
              {dislikes}
            </Button>
          </div>
          <div className="button-control-right d-flex gap-1">
            {subs.comment.length > 100 && (
              <Button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#53b053",
                }}
                onClick={toggleShowComment}
              >
                {showFullComment ? "Show less" : "Show more"}
              </Button>
            )}
            <Button
              className="trash-bin"
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#ca1d00",
              }}
              onClick={() => onDelete(subs.id)}
              title="OK"
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CommentCard;
