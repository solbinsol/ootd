import React from "react";
import style from "../styles/Home.module.css";
import Header from "@/component/Header/Header";
import OOTD from "@/component/OOTD/OOTD";

export default function OOTDPage() {
  return (
    <div className={style.OOTDPage}>
      <div className={style.Header}>  
        <Header></Header>
      </div>
      <div className={style.OOTD}>

        <OOTD></OOTD>
      </div>
    </div>
  )
}

