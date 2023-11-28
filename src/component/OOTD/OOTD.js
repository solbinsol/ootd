import React, { useState ,useEffect } from "react";
import Comment from "@/component/Comment/Comment";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Head from "next/head";
import style from "./OOTD.module.css";


export default function OOTD(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false // 화살표 숨기기

    };


 
      

    const [showComment, setShowComment] = useState(false);
    const [like, setLike] = useState(false);
    const handleLikeButtonClick = () => {
        // 댓글 버튼이 이미 클릭되었을 경우 상태를 반전시켜 숨기기
        setLike(!like);

      };
    // Function to handle the comment button click
    const handleCommentButtonClick = () => {
        // 댓글 버튼이 이미 클릭되었을 경우 상태를 반전시켜 숨기기
        setShowComment(!showComment);

      };
    return(
        <>
        <Head>
            <link rel="stylesheet"href="test.css"/>        
        </Head>
        <div className={style.OOTDPage}>
            <h1 id="snap" className={style.Snap}>#Snap</h1>
        <Slider {...settings}>

            <div className={style.OOTD}>



            <div className={style.OOTDHeader}>
                <p className={style.UserInfo}>닉네임 / 날짜</p>
                <span className={style.Delete}>❌</span>
                <span className={style.Star}>★</span>
            </div>
            <div className={style.LeftOOTD}>
                <div className={style.IMGBOX}>
                    <img src="img/ootd1.jpg" alt="ss"></img>
                    <div className={style.UserSpec}>
                    <p>키 / 몸무게</p>
                    <button className={style.Like}></button>
                </div>
                </div>
 
            </div>
            <div className={style.RightBox}>
            {!showComment && (
                <div className={style.OOTDInfo}>
                    <img src="/img/thumnail/glass.jpg"></img>
                    <p className={style.Brand}>브랜드</p>
                    <p className={style.Name}>제품이름</p>

                    <p className={style.Size}>사이즈</p>
                    <span className={style.Categori}>분류 : 안경</span>
                    <div className={style.Shopping}>
                    <button id={style.Heart}><img src="/img/icon/heart.jpeg"></img></button>

                    <button id={style.Cart}><img src="/img/icon/cart.png"></img></button>
                    </div>
                </div>
            )}
            {!showComment && (
                <div className={style.OOTDInfo}>
                    <img src="/img/thumnail/glass.jpg"></img>
                    <p className={style.Brand}>브랜드</p>
                    <p className={style.Name}>제품이름</p>

                    <p className={style.Size}>사이즈</p>
                    <span className={style.Categori}>분류 : 안경</span>
                    <div className={style.Shopping}>
                    <button id={style.Heart}><img src="/img/icon/heart.jpeg"></img></button>

                    <button id={style.Cart}><img src="/img/icon/cart.png"></img></button>
                    </div>
                </div>
            )}
            {!showComment && (
                <div className={style.OOTDInfo}>
                    <img src="/img/thumnail/glass.jpg"></img>
                    <p className={style.Brand}>브랜드</p>
                    <p className={style.Name}>제품이름</p>

                    <p className={style.Size}>사이즈</p>
                    <span className={style.Categori}>분류 : 안경</span>
                    <div className={style.Shopping}>
                    <button id={style.Heart}><img src="/img/icon/heart.jpeg"></img></button>

                    <button id={style.Cart}><img src="/img/icon/cart.png"></img></button>
                    </div>
                </div>
            )}
            {!showComment && (
                <div className={style.OOTDInfo}>
                    <img src="/img/thumnail/glass.jpg"></img>
                    <p className={style.Brand}>브랜드</p>
                    <p className={style.Name}>제품이름</p>

                    <p className={style.Size}>사이즈</p>
                    <span className={style.Categori}>분류 : 안경</span>
                    <div className={style.Shopping}>
                    <button id={style.Heart}><img src="/img/icon/heart.jpeg"></img></button>

                    <button id={style.Cart}><img src="/img/icon/cart.png"></img></button>
                    </div>
                </div>
            )}
            {/* Conditionally render the Comment component based on the state */}
            {showComment && <Comment />}
            </div>
            <div className={style.footMenu}>
                    <button className={`${style.Like} ${like ? style.LikeActive : ""}`} onClick={handleLikeButtonClick}>LIKE</button>
                    <button className={`${style.Comment} ${showComment ? style.CommentActive : ""}`} onClick={handleCommentButtonClick}>댓글</button>
            </div>

        </div>
        <div className={style.OOTD}>
            <div className={style.OOTDHeader}>
                <p className={style.UserInfo}>닉네임 / 날짜</p>
                <span className={style.Delete}>❌</span>
                <span className={style.Star}>★</span>
            </div>
            <div className={style.LeftOOTD}>
                <div className={style.IMGBOX}>
                    <img src="img/ootd1.jpg" alt="ss"></img>
                    <div className={style.UserSpec}>
                    <p>키 / 몸무게</p>
                    <button className={style.Like}></button>
                </div>
                </div>
 
            </div>
            <div className={style.RightBox}>
            {!showComment && (
                <div className={style.OOTDInfo}>
                    <img src="/img/thumnail/glass.jpg"></img>
                    <p className={style.Brand}>브랜드</p>
                    <p className={style.Name}>제품이름</p>

                    <p className={style.Size}>사이즈</p>
                    <span className={style.Categori}>분류 : 안경</span>
                    <div className={style.Shopping}>
                    <button id={style.Heart}><img src="/img/icon/heart.jpeg"></img></button>

                    <button id={style.Cart}><img src="/img/icon/cart.png"></img></button>
                    </div>
                </div>
            )}
            {!showComment && (
                <div className={style.OOTDInfo}>
                    <img src="/img/thumnail/glass.jpg"></img>
                    <p className={style.Brand}>브랜드</p>
                    <p className={style.Name}>제품이름</p>

                    <p className={style.Size}>사이즈</p>
                    <span className={style.Categori}>분류 : 안경</span>
                    <div className={style.Shopping}>
                    <button id={style.Heart}><img src="/img/icon/heart.jpeg"></img></button>

                    <button id={style.Cart}><img src="/img/icon/cart.png"></img></button>
                    </div>
                </div>
            )}
            {!showComment && (
                <div className={style.OOTDInfo}>
                    <img src="/img/thumnail/glass.jpg"></img>
                    <p className={style.Brand}>브랜드</p>
                    <p className={style.Name}>제품이름</p>

                    <p className={style.Size}>사이즈</p>
                    <span className={style.Categori}>분류 : 안경</span>
                    <div className={style.Shopping}>
                    <button id={style.Heart}><img src="/img/icon/heart.jpeg"></img></button>

                    <button id={style.Cart}><img src="/img/icon/cart.png"></img></button>
                    </div>
                </div>
            )}
            {!showComment && (
                <div className={style.OOTDInfo}>
                    <img src="/img/thumnail/glass.jpg"></img>
                    <p className={style.Brand}>브랜드</p>
                    <p className={style.Name}>제품이름</p>

                    <p className={style.Size}>사이즈</p>
                    <span className={style.Categori}>분류 : 안경</span>
                    <div className={style.Shopping}>
                    <button id={style.Heart}><img src="/img/icon/heart.jpeg"></img></button>

                    <button id={style.Cart}><img src="/img/icon/cart.png"></img></button>
                    </div>
                </div>
            )}
            {/* Conditionally render the Comment component based on the state */}
            {showComment && <Comment />}
            </div>
            <div className={style.footMenu}>
                    <button className={`${style.Like} ${like ? style.LikeActive : ""}`} onClick={handleLikeButtonClick}>LIKE</button>
                    <button className={`${style.Comment} ${showComment ? style.CommentActive : ""}`} onClick={handleCommentButtonClick}>댓글</button>
            </div>

        </div>

        <div className={style.OOTD}>
            <div className={style.OOTDHeader}>
                <p className={style.UserInfo}>닉네임 / 날짜</p>
                <span className={style.Delete}>❌</span>
                <span className={style.Star}>★</span>
            </div>
            <div className={style.LeftOOTD}>
                <div className={style.IMGBOX}>
                    <img src="img/ootd1.jpg" alt="ss"></img>
                    <div className={style.UserSpec}>
                    <p>키 / 몸무게</p>
                    <button className={style.Like}></button>
                </div>
                </div>
 
            </div>
            <div className={style.RightBox}>
            {!showComment && (
                <div className={style.OOTDInfo}>
                    <img src="/img/thumnail/glass.jpg"></img>
                    <p className={style.Brand}>브랜드</p>
                    <p className={style.Name}>제품이름</p>

                    <p className={style.Size}>사이즈</p>
                    <span className={style.Categori}>분류 : 안경</span>
                    <div className={style.Shopping}>
                    <button id={style.Heart}><img src="/img/icon/heart.jpeg"></img></button>

                    <button id={style.Cart}><img src="/img/icon/cart.png"></img></button>
                    </div>
                </div>
            )}
            {!showComment && (
                <div className={style.OOTDInfo}>
                    <img src="/img/thumnail/glass.jpg"></img>
                    <p className={style.Brand}>브랜드</p>
                    <p className={style.Name}>제품이름</p>

                    <p className={style.Size}>사이즈</p>
                    <span className={style.Categori}>분류 : 안경</span>
                    <div className={style.Shopping}>
                    <button id={style.Heart}><img src="/img/icon/heart.jpeg"></img></button>

                    <button id={style.Cart}><img src="/img/icon/cart.png"></img></button>
                    </div>
                </div>
            )}
            {!showComment && (
                <div className={style.OOTDInfo}>
                    <img src="/img/thumnail/glass.jpg"></img>
                    <p className={style.Brand}>브랜드</p>
                    <p className={style.Name}>제품이름</p>

                    <p className={style.Size}>사이즈</p>
                    <span className={style.Categori}>분류 : 안경</span>
                    <div className={style.Shopping}>
                    <button id={style.Heart}><img src="/img/icon/heart.jpeg"></img></button>

                    <button id={style.Cart}><img src="/img/icon/cart.png"></img></button>
                    </div>
                </div>
            )}
            {!showComment && (
                <div className={style.OOTDInfo}>
                    <img src="/img/thumnail/glass.jpg"></img>
                    <p className={style.Brand}>브랜드</p>
                    <p className={style.Name}>제품이름</p>

                    <p className={style.Size}>사이즈</p>
                    <span className={style.Categori}>분류 : 안경</span>
                    <div className={style.Shopping}>
                    <button id={style.Heart}><img src="/img/icon/heart.jpeg"></img></button>

                    <button id={style.Cart}><img src="/img/icon/cart.png"></img></button>
                    </div>
                </div>
            )}
            {/* Conditionally render the Comment component based on the state */}
            {showComment && <Comment />}
            </div>
            <div className={style.footMenu}>
                    <button className={`${style.Like} ${like ? style.LikeActive : ""}`} onClick={handleLikeButtonClick}>LIKE</button>
                    <button className={`${style.Comment} ${showComment ? style.CommentActive : ""}`} onClick={handleCommentButtonClick}>댓글</button>
            </div>
            </div>

            </Slider>

        </div>

        </>
    )
}