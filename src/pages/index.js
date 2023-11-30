import React from "react";
import style from "../styles/Home.module.css";
import Header from "@/component/Header/Header";
import OOTD from "@/component/OOTD/OOTD";
import TrendSetter from "@/component/TrendSetter/TrendSetter";
import HotItemComponent from "@/component/HotItem/HotItem";

export default function OOTDPage() {
  return (
    <div className={style.OOTDPage}>
      <div className={style.Header}>  
        <Header></Header>
      </div>
      <div className={style.OOTD}>
        <OOTD></OOTD>
      </div>
      <div className={style.Trend}>
        <TrendSetter></TrendSetter>
      </div>
      {/* <div className={style.Item}>
        <HotItemComponent></HotItemComponent>
      </div> */}
      
    </div>
  )
}

