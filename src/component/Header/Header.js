import React from "react";
import style from "./Header.module.css";
import Link from "next/link";

export default function Header(){
    return(
        <div className={style.Header} >
            <Link href="/" style={{ textDecoration: 'none' }}><h1>OO.TD</h1>
            </Link>
            <div className={style.HeaderMenu}>
                <ul className={style.ContentBox}>
                <Link href="#Snap"><li>#Snap</li></Link>
                </ul>
            </div>
        </div>
    )
}