import React from "react";
import style from "./Comment.module.css";
import commentData from "../../DB/comment.json";

export default function Comment({ ootdId }) {
  // Find the item with the matching ootdId
  const ootdItem = commentData.find((item) => item.ootdId === ootdId);

  // Check if ootdItem exists and has comments
  const ootdComments = ootdItem?.comments || [];

  return (
    <div className={style.CommentBox}>
      <div className={style.CommentList}>
        {ootdComments.map((comment) => (
          <ul key={comment.id}>
            <li className={style.CommentInfo}>
              {comment.nickname} / {comment.date}
            </li>
            <li className={style.CommentContent}>{comment.content}</li>
          </ul>
        ))}
      </div>
      <textarea></textarea>
    </div>
  );
}
