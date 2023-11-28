import React from "react";
import style from "./Comment.module.css";

export default function Comment(){
    return(
        <div className={style.CommentBox} >
            <div className={style.CommentList}>
                <ul>
                    <li className={style.CommentInfo}>닉네임 / 작성날짜</li>
                    <li className={style.CommentContent}>어쩌고 저쩌고</li>
                </ul>

                <ul>
                    <li className={style.CommentInfo}>닉네임 / 작성날짜</li>
                    <li className={style.CommentContent}>어쩌고 저쩌고</li>
                </ul>

                <ul>
                    <li className={style.CommentInfo}>닉네임 / 작성날짜</li>
                    <li className={style.CommentContent}>어쩌고 저쩌고</li>
                </ul>

            </div>
            <textarea></textarea>

        </div>
    )
}