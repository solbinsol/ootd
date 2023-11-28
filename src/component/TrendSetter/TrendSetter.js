import React, { useState } from "react";
import style from "./Trend.module.css";

export default function TrendSetter(){

    return(
        <div className={style.TrendSetter}>
            <h1>TrendSetter</h1>
            <div id="TrendSetter" className={style.TrendSetterBox}>
                <div className={style.TSbox}>
                    <div className={style.TSheader}>
                        solbin / Like 3
                    </div>
                    <img src="img/ootd1.jpg"></img>
                </div>
                <div className={style.TSbox}>
                    
                </div>
                <div className={style.TSbox}>
                    
                </div>
                <div className={style.TSbox}>
                    
                </div>
                <div className={style.TSbox}>
                    
                </div>
                <div className={style.TSbox}>
                    
                </div>
            </div>
        </div>
    )
}