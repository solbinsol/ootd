import React from "react";
import style from "./OOTD.module.css";

export default function OOTD(){
    return(
        <div className={style.OOTD}>
            <div className={style.OOTDHeader}>
                <p className={style.UserInfo}>닉네임 / 나이</p>
                <span className={style.Delete}>❌</span>
                <span className={style.Star}>★</span>
            </div>
            <div className={style.LeftOOTD}>
                <img src="img/ootd1.jpg" alt="ss"></img>
                <div className={style.UserSpec}>
                    <p>키 / 몸무게</p>
                    <button className={style.Like}>♡</button>
                </div>
            </div>
            <div className={style.RightBox}>
                <div className={style.OOTDInfo}>
                    <img src="/img/thumnail/glass.jpg"></img>
                    <p className={style.Brand}>브랜드</p>
                    <p className={style.Name}>제품이름</p>

                    <p className={style.Size}>사이즈</p>
                    <p className={style.Categori}>분류 : 안경</p>
                    <button className={style.Shopping}><img src="/img/icon/cart.png"></img></button>
                </div>
                <div className={style.OOTDInfo}>
                    <img src="/img/thumnail/glass.jpg"></img>
                    <p className={style.Brand}>브랜드</p>
                    <p className={style.Name}>제품이름</p>

                    <p className={style.Size}>사이즈</p>
                    <p className={style.Categori}>분류 : 안경</p>
                    <button className={style.Shopping}><img src="/img/icon/cart.png"></img></button>
                </div>
                <div className={style.OOTDInfo}>
                    <img src="/img/thumnail/glass.jpg"></img>
                    <p className={style.Brand}>브랜드</p>
                    <p className={style.Name}>제품이름</p>

                    <p className={style.Size}>사이즈</p>
                    <p className={style.Categori}>분류 : 안경</p>
                    <button className={style.Shopping}><img src="/img/icon/cart.png"></img></button>
                </div>
                <div className={style.OOTDInfo}>
                    <img src="/img/thumnail/glass.jpg"></img>
                    <p className={style.Brand}>브랜드</p>
                    <p className={style.Name}>제품이름</p>

                    <p className={style.Size}>사이즈</p>
                    <p className={style.Categori}>분류 : 안경</p>
                    <button className={style.Shopping}><img src="/img/icon/cart.png"></img></button>
                </div>
                <div className={style.footMenu}>
                    <button className={style.Like}>LIKE</button>
                    <button className={style.Comment}>댓글</button>
            </div>
            </div>

        </div>
    )
}