import React, { useState } from "react";
import style from "./Trend.module.css";

export default function TrendSetter(){

    return(
        <div className={style.TrendSetter}>
            <h1>TrendSetter</h1>
            <div id="TrendSetter" className={style.TrendSetterBox}>
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
                <div className={style.TSbox}>
                    
                </div>
            </div>
        </div>
    )
}