// TrandClick.js

import React, { useState, useEffect } from "react";
import style from "./OOTD.module.css";
import userInfo from "../../DB/user.json";
import Link from "next/link";
import OOTDComment from "../Comment/Comment";
import AddOOTD from "../AddOOTD/AddOOTD";

export default function TrandClick({ selectedOOTD, setSelectedOOTD }) {
  const [showAddOOTD, setShowAddOOTD] = useState(false); // AddOOTD 컴포넌트를 표시할지 여부를 결정하는 상태
  const [showComment, setShowComment] = useState(false);
  const [like, setLike] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // State to track visibility

  
  const handleDelete = () => {
    setIsVisible(false);
    setSelectedOOTD(null); // TrandClick 컴포넌트가 숨겨지면서 selectedOOTD 상태를 초기화
  };
  
  
  
  const toggleLike = (id) => {
    setLike(!like);

    // 선택된 OOTD를 이용한 로직 추가
  };

  const handleCommentButtonClick = () => {
    setShowComment(!showComment);
  };

  const handleAddOOTD = (newOOTD) => {
    // 선택된 OOTD를 이용한 로직 추가
  };

  return (
    <>
        {isVisible && (

    <div className={style.BB}>
      <div className={style.OOTDPage}>




        <div key={selectedOOTD.id} className={style.OOTD}>
          <div className={style.OOTDHeader}>
            {/* 사용자 정보를 표시 */}
            <p className={style.UserInfo}>
              {selectedOOTD.nickname} / {selectedOOTD.date}
            </p>
            <span className={style.Delete}  onClick={handleDelete}>❌</span>
            <span className={style.Star}>★</span>
          </div>
          <div className={style.LeftOOTD}>
            <div className={style.IMGBOX}>
              <img src={selectedOOTD.imageSrc} alt="OOTD" />
              <div className={style.UserSpec}>
                <p>
                  {selectedOOTD.user
                    ? `${selectedOOTD.user.height} / ${selectedOOTD.user.weight}`
                    : "Unknown"}
                </p>
                <button className={style.Like}></button>
              </div>
            </div>
          </div>
          <div className={style.RightBox}>
            {selectedOOTD.products &&
              selectedOOTD.products.map((product, prodIndex) => (
                <div
                  key={prodIndex}
                  className={style.OOTDInfo}
                  style={{
                    display: showComment ? "none" : "block",
                  }}
                >
                  <img src={product.thumnail} alt={product.name} />
                  <p className={style.Brand}>{product.brand}</p>
                  <p className={style.Name}>{product.name}</p>
                  <p className={style.Size}>{product.size}</p>
                  <span className={style.Categori}>{product.category}</span>
                  <div className={style.Shopping}>
                    <button id={style.Heart}>
                      <img
                        src="/img/icon/heart.jpeg"
                        alt="Heart"
                      />
                    </button>
                    <button id={style.Cart}>
                      <Link href={product.sLink}>
                        <img
                          src="/img/icon/cart.png"
                          alt="Cart"
                        />
                      </Link>
                    </button>
                  </div>
                </div>
              ))}
            {showComment && <OOTDComment ootdId={selectedOOTD.id} />}
          </div>

          <div className={style.footMenu}>
            <button
              className={`${style.Like} ${like ? style.LikeActive : ""}`}
              onClick={() => toggleLike(selectedOOTD.id)}
            >
              LIKE {selectedOOTD.like}
            </button>
            <button
              className={`${style.Comment} ${
                showComment ? style.CommentActive : ""
              }`}
              onClick={handleCommentButtonClick}
            >
              댓글
            </button>
          </div>
        </div>
      </div>
    </div>
    )}

    </>
  );
}
