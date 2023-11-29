import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import Head from "next/head";
import style from "./OOTD.module.css";
import userInfo from '../../DB/user.json';
import ootdData from '../../DB/ootd.json';
import Link from "next/link";
import Comment from "../Comment/Comment";
import AddOOTD from "../AddOOTD/AddOOTD";

export default function OOTD() {
    const [filteredOOTD, setFilteredOOTD] = useState([]);

    const [showAddOOTD, setShowAddOOTD] = useState(false); // AddOOTD 컴포넌트를 표시할지 여부를 결정하는 상태

    const handleAddOOTDClick = () => {
        setShowAddOOTD(!showAddOOTD); // 상태 토글
    };


    useEffect(() => {
        const matchedData = ootdData.filter(ootdItem => 
            userInfo.some(user => user.id === ootdItem.userId)
        );
        setFilteredOOTD(matchedData);
    }, []);

    
    useEffect(() => {
        const matchedData = ootdData.map(ootdItem => ({
            ...ootdItem,
            isLiked: false, // 각 아이템에 좋아요 상태를 추가
        })).filter(ootdItem => 
            userInfo.some(user => user.id === ootdItem.userId)
        );
        setFilteredOOTD(matchedData);
    }, []);



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false, // 화살표 숨기기
        beforeChange: (current, next) => {
            setShowComment(false);
            setLike(false);
        }
    };
    

    const [showComment, setShowComment] = useState(false);
    const [like, setLike] = useState(false);


    const toggleLike = (id) => {
        setLike(!like);

        const updatedOOTD = filteredOOTD.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    like: item.isLiked ? item.like - 1 : item.like + 1,
                    isLiked: !item.isLiked,
                };
            }
            return item;
        });
        setFilteredOOTD(updatedOOTD);
    };


    const handleCommentButtonClick = () => {
        setShowComment(!showComment);
    };

    return (
        <>
            <Head>
                <link rel="stylesheet" href="test.css"/>        
            </Head>
            <div className={style.OOTDPage}>
                    <h1 id="snap" className={style.Snap}>#Snap</h1>
                    <button className={style.AddOOTD} onClick={handleAddOOTDClick}>+</button> {/* 클릭
                 이벤트 핸들러 추가 */}
                {showAddOOTD && <AddOOTD closeAddOOTD={handleAddOOTDClick} />}

                <Slider {...settings}>
                    {filteredOOTD.map((item, index) => {
                        // 해당 아이템의 사용자 정보를 찾음
                        const user = userInfo.find(user => user.id === item.userId);
                        return (
                            <div key={index} className={style.OOTD}>
                                <div className={style.OOTDHeader}>
                                    {/* 사용자 정보를 표시 */}
                                    <p className={style.UserInfo}>{user ? `${user.nickname} / ${item.date}` : 'Unknown'}</p>
                                    <span className={style.Delete}>❌</span>
                                    <span className={style.Star}>★</span>
                                </div>
                                <div className={style.LeftOOTD}>
                                    <div className={style.IMGBOX}>
                                        <img src={item.imageSrc} alt="OOTD"/>
                                        <div className={style.UserSpec}>
                                            <p>{user ? `${user.height} / ${user.weight}` : 'Unknown'}</p>
                                            <button className={style.Like}></button>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.RightBox}>
                                    {item.products.map((product, prodIndex) => (
                                        <div key={prodIndex} className={style.OOTDInfo}
                                        style={{ display: showComment ? 'none' : 'block' }}>
                                            <img src={product.thumnail} alt={product.name}/>
                                            <p className={style.Brand}>{product.brand}</p>
                                            <p className={style.Name}>{product.name}</p>
                                            <p className={style.Size}>{product.size}</p>
                                            <span className={style.Categori}>{product.category}</span>
                                            <div className={style.Shopping}>
                                                <button id={style.Heart}><img src="/img/icon/heart.jpeg" alt="Heart"/></button>
                                                <button id={style.Cart}><Link href={product.sLink}><img src="/img/icon/cart.png" alt="Cart"/></Link></button>
                                            </div>
                                        </div>
                                    ))}
                                    {showComment && <Comment />}
                                </div>
                                <div className={style.footMenu}>


                                    <button
                                    className={`${style.Like} ${like ? style.LikeActive : ""}`}
                                    onClick={() => toggleLike(item.id)}
                                    >

                                    LIKE {item.like}
                                    </button>


                                    <button className={`${style.Comment} ${showComment ? style.CommentActive : ""}`} onClick={handleCommentButtonClick}>댓글</button>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </>
    );
}
