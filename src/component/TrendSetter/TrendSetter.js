// TrendSetter.js

import React, { useState, useEffect } from "react";
import style from "./Trend.module.css";
import ootdData from "../../DB/ootd.json"; // 상대 경로에 유의
import OOTD from "../OOTD/OOTD";
import TrandClick from "../TrandClick";
import Link from "next/link";

export default function TrendSetter() {
    const [trendData, setTrendData] = useState([]);
    const [selectedOOTD, setSelectedOOTD] = useState(null);

    useEffect(() => {
        setTrendData(ootdData);
    }, []);

    // like가 높은 순서로 정렬
    const sortedTrendData = trendData.sort((a, b) => b.like - a.like);

    const handleOOTDClick = (ootdId) => {
        // 클릭된 OOTD의 정보를 가져와서 상태에 설정
        const clickedOOTD = trendData.find(item => item.id === ootdId);
        setSelectedOOTD(clickedOOTD);
    };

    return (
        <div className={style.TrendSetter}>
            <div id="TrendSetter" className={style.TrendSetterBox}>
            <h1>TrendSetter</h1>

                {sortedTrendData.map((item, index) => (
                    <Link href="#TrendSetter">
                    <div
                        key={index}
                        className={style.TSbox}
                        onClick={() => handleOOTDClick(item.id)}
                    >
                        <div className={style.TSheader}>
                            <p>{item.nickname} / Like {item.like}</p>
                        </div>
                        <img src={item.imageSrc} alt={`OOTD ${index + 1}`} />
                    </div>
                    </Link>
                ))}
            </div>

            {/* 선택된 OOTD가 있을 경우 해당 OOTD 컴포넌트를 표시 */}
      {/* 선택된 OOTD가 있을 경우 해당 TrandClick 컴포넌트를 표시 */}
      {selectedOOTD && (
  <TrandClick selectedOOTD={selectedOOTD} setSelectedOOTD={setSelectedOOTD} />
  )}

        </div>
    );
}
