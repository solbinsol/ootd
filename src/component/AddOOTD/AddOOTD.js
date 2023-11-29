import React from "react";
import style from "./ADD.module.css";


export default function AddOOTD() {
    
    return(
        <div className={style.AddOOTD}>
            <div className={style.AddOOTD}>
                <h1 className={style.Logo}>OOTD UPLOAD</h1>
                <div className={style.AddInputBox}>
                    <label>ID<input placeholder="test@naver.com"></input></label>
                    <label>snapURL<input placeholder="test@naver.com"></input></label>
                    <label>ID<input placeholder="test@naver.com"></input></label>
                    <label>ID<input placeholder="test@naver.com"></input></label>
                </div>
            </div>
        </div>
    )
}