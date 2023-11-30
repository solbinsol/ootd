// AddOOTD.js

import React, { useState } from "react";
import style from "./ADD.module.css";
import ootdData from "../../DB/ootd.json";

export default function AddOOTD(props) {
    const [userId, setUserId] = useState("");
    const [snapURL, setSnapURL] = useState("");
    const [brand, setBrand] = useState("");
    const [name, setName] = useState("");
    const [size, setSize] = useState("");
    const [thumnail, setThumnail] = useState("");
    const [sLink, setSLink] = useState("");

    const [category, setCategory] = useState("상의");
    const [products, setProducts] = useState([]);
    const [showPreview, setShowPreview] = useState(false); // 미리보기 상태

    const handlePreviewCloseClick = () => {
        setShowPreview(false);
      };
    const handlePreviewClick = () => {
        setShowPreview(!showPreview); // 미리보기 토글
      };

      const handleCloseClick = () => {
        props.closeAddOOTD();
      };

    const handleAddProduct = () => {

        const currentDate = new Date();
    const year = currentDate.getFullYear().toString().substring(2); // 년도에서 뒤의 두 자리만 가져오기
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 월을 두 자리로 만들기
    const day = currentDate.getDate().toString().padStart(2, '0'); // 일을 두 자리로 만들기

    const formattedDate = `${year}-${month}-${day}`;



      const newProduct = {
        thumnail: snapURL,
        brand: brand,
        name: name,
        size: size,
        category: category,
        sLink: sLink,
        thumnail: thumnail,
        ItemLike: 0,

        date: formattedDate

      };
      if(!thumnail){
        window.alert("제품 이미지 URL을 입력해주세요");
      }
      if(!brand){
        window.alert("brand를 입력해주세요");
      }
      if(!name){
        window.alert("제품이름을 입력해주세요");
      }
      if(!size){
        window.alert("사이즈를 입력해주세요");
      }
      if(!thumnail){
        window.alert("제품 이미지 URL을 입력해주세요");
      }else{

      setProducts((prevProducts) => [...prevProducts, newProduct]);
      window.alert("제품이 추가되었습니다. \n 계속 추가하려면 반복해주세요")

    }
      setSnapURL("");
      setBrand("");
      setName("");
      setSize("");
      setThumnail("");
      setSLink("");
    };
  
    const handleDeleteItem = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
      };
    
    const handleAddOOTD = async () => {
      const newOOTD = {
        id: ootdData.length + 1,
        like: 0,
        date: new Date().toLocaleDateString("ko-KR"),
        userId: userId,
        imageSrc: snapURL,
        products: products,
      };
  
      // 아래 라인은 실제 서버로 데이터를 전송하고 저장하는 로직이 필요합니다.
      // 이 부분은 개발 환경에 따라 다르게 구현됩니다.
  
      // 일단은 테스트를 위해 데이터를 콘솔에 출력합니다.
      console.log("New OOTD:", newOOTD);
  
      // 새로운 OOTD를 화면에 반영하기 위해 부모 컴포넌트로 전달합니다.
      props.onAddOOTD(newOOTD);
  
      handleCloseClick();
    };

  return (
    <div className={style.ADDALL}>
      <div className={style.AddOOTD}>
        <div className={style.AddInputBox}>
          <div className={style.Logo}>
            <h1>OOTD UPLOAD</h1>
            <h1 className={style.Close} onClick={handleCloseClick}>
              X
            </h1>
          </div>

          <div className={style.OOTDInput}>
            <label>ID</label>
            <input
              placeholder="test@naver.com 로 해주세요 !"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            ></input>
            <label>snapURL</label>
            <input
              placeholder="img/thumnail/drow.jpg 로 해주세요 !"
              value={snapURL}
              onChange={(e) => setSnapURL(e.target.value)}
            ></input>
          </div>
          <div className={style.ItemInput}>
            <label>브랜드</label>
            <input value={brand} onChange={(e) => setBrand(e.target.value)}></input>
            <label>이름</label>
            <input value={name} onChange={(e) => setName(e.target.value)}></input>
            <label>사이즈</label>
            <input value={size} onChange={(e) => setSize(e.target.value)}></input>
            <label>제품IMG URL</label>
            <input value={thumnail} onChange={(e) => setThumnail(e.target.value)}></input>


            


            <label>제품링크</label>
            <input value={sLink} onChange={(e) => setSLink(e.target.value)}></input>

            <label>분류</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option>상의</option>
              <option>아우터</option>
              <option>바지</option>
              <option>악세사리</option>
              <option>신발</option>
              <option>안경</option>
            </select>
            <div className={style.ButtonBox}>
            <button onClick={handleAddProduct}>제품 추가</button>
            <button onClick={handleAddOOTD}>OOTD 추가</button>
            <button className={style.Show} onClick={handlePreviewClick}>미리보기</button>
          </div>
          </div>
          {showPreview && (
            <div className={style.PreviewSection}>
                <div className={style.Previewheader}>
                    <h1>Preview</h1>
                    <span className={style.ClosePrev} onClick={handlePreviewCloseClick}>             X
                    </span>

                </div>
                <div className={style.PrevItem}>
                    <h3 className={style.AddItemLogo}>추가된 아이템</h3>
                {products.length === 0 ? (
                    <p>미리보기 할 제품이 없습니다</p>
                ) : (


                products.map((product, index) => (

                    <div className={style.PrevItemBox} key={index}>
                        <img src={product.thumnail}/>
                        <p>{product.name}</p>
                        <p>{product.brand}</p>
                        <p>{product.size}</p>
                        <p>{product.category}</p>
                        <span
                      className={style.DeleteItem}
                      onClick={() => handleDeleteItem(index)}
                    >X</span>
                    </div>
                ))
                )}
 

                </div>

                <div className={style.PrevInfo}>
                    <h3 className={style.AddItemLogoE}>OOTD Preview</h3>
                </div>
            </div>
      )}

        </div>
      </div>
    </div>
  );
}
