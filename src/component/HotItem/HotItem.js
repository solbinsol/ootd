import React, { useState ,useEffect } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Head from "next/head";
import style from "./HotItem.module.css";


export default function HotItemComponent(){

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     swipeToSlide: true
    // };


 
      


    return(

        <div id="HotItem" className={style.HotItemPage}>
            <h1 className={style.HotItem}>#HotItem</h1>
            {/* <Slider {...settings}>
            </Slider> */}

        </div>

    )
}