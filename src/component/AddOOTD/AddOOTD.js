import React from "react";
import style from "./ADD.module.css";

export default function AddOOTD(props) {
    const handleCloseClick = () => {
        props.closeAddOOTD(); // 부모 컴포넌트에서 전달받은 함수 호출
    };

    return(
        <div className={style.ADDALL}>
            <div className={style.AddOOTD}>
                <div className={style.AddInputBox}>
                    <div className={style.Logo}>
                        <h1>OOTD UPLOAD</h1>
                        <h1 className={style.Close} onClick={handleCloseClick}>X</h1>
                    </div>

                    <div className={style.OOTDInput}> 
                        <label>ID</label><input placeholder="test@naver.com 로 해주세요 !"></input>
                        <label>snapURL<input placeholder="img/thumnail/drow.jpg 로 해주세요 !"></input></label>
                    </div>
                    <div className={style.ItemInput}>
                        <label>브랜드<input></input></label>
                        <label>이름<input ></input></label>
                        <label>사이즈<input ></input></label>
                        <label>분류<select>
                            <option>상의</option>
                            <option>아우터</option>
                            <option>바지</option>
                            <option>악세사리</option>
                            <option>신발</option>
                            <option>안경</option>
                        </select>
                        </label>
                    </div>

                </div>
            </div>
        </div>
    )
}