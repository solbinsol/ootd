import React, { useState, useEffect } from "react";
import style from "./Comment.module.css";

export default function Comment({ ootdId }) {
  const [ootdComments, setOotdComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    // comment.json에서 댓글 데이터를 가져와서 commentData 상태를 업데이트합니다.
    // 실제로는 fetch 등을 사용하여 서버에서 데이터를 가져와야 하지만,
    // 여기에서는 import로 가져오는 것으로 가정합니다.
    import("../../DB/comment.json")
      .then((data) => setCommentData(data.default))
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  useEffect(() => {
    // ootdId에 해당하는 댓글 데이터를 가져와서 상태를 업데이트합니다.
    const filteredComments = commentData
      ?.filter((item) => item.ootdId === ootdId)
      .map((item) => item.comments || [])
      .flat() || [];

    // 가져온 데이터를 상태에 반영
    setOotdComments(filteredComments);
  }, [ootdId, commentData]);

  const handleAddComment = () => {
    if (!newComment) {
      window.alert("댓글을 입력해주세요.");
      return;
    }

    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(
      currentDate.getMonth() + 1
    ).toString().padStart(2, "0")}-${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")}`;

    const comment = {
      id: ootdComments.length + 1,
      userId: "testtest@naver.com",
      nickname: "guest",
      content: newComment,
      date: formattedDate,
    };

    // 기존 댓글 목록에 새로운 댓글 추가
    const updatedComments = [...ootdComments, comment];

    // 업데이트된 댓글 목록을 상태에 반영
    setOotdComments(updatedComments);

    // 기존 commentData에서 해당 ootdId에 해당하는 항목을 찾아서 업데이트
    const updatedCommentData = commentData.map((item) =>
      item.ootdId === ootdId
        ? {
            ...item,
            comments: updatedComments,
          }
        : item
    );

    // TODO: 업데이트된 commentData를 서버에 저장 또는 상위 컴포넌트로 전달
    setCommentData(updatedCommentData);

    // 댓글 입력창 초기화
    setNewComment("");
  };

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
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        
      ></textarea>
      <button onClick={handleAddComment}>댓글</button>
    </div>
  );
}
