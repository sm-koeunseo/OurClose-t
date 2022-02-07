import React, { useState} from 'react';
import './UploadPage.css'
import cloth from './cloth2.svg';
import {Link} from 'react-router-dom';

function UploadPage() {
    //파일을 미리 볼 url을 저장해줄 state
    const [fileImage, setFileImage] = useState("");
    //파일 저장
    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]))
    };
    //파일 삭제
    const deleteFileImage = () => {
        URL.revokeObjectURL(fileImage);
        setFileImage("");
    };


        return (
            <div className='backGroundSet'>
                <div className='share_box'>
                        <div className='share_title'>
                            <img width="90" src={cloth} alt='cloth2' className='cloth'></img>
                            <p className="share_title_text">내 옷장을 공유합니다</p>
                        </div>
                </div>

                <div className='upload_image'> 
                {fileImage && ( <img alt="sample" src={fileImage} style={{ margin: "auto" }} /> )}
                    <div style={{ alignItems: "center", justifyContent: "center", }} > 
                        <input name="imgUpload" type="file" accept="image/*" onChange={saveFileImage} /> 
                        
                    </div> 
                    
                </div>


                <div className='upload_text'>
                    <button style={{ backgroundColor: "gray", color: "white", width: "55px", height: "40px", cursor: "pointer", }} 
                        onClick={() => deleteFileImage()} > 삭제 
                    </button>
                    <div className="space"></div>
                    <div className="product_name">
                        상품명
                        <div className="space"></div>
                        <input type="text" className="input_product"/>
                    </div>

                    <div className="space"></div>
                    <div className="space"></div>
                    <div className="space"></div>

                    <details>
                        <summary>카테고리</summary>
                        <div className="space"></div>
                            <button type='button' className="upload_button">아우터</button>
                            <button type='button' className="upload_button">상의</button>
                            <button type='button' className="upload_button">팬츠</button>
                            <button type='button' className="upload_button">스커트</button>
                            <button type='button' className="upload_button">원피스</button>
                            <button type='button' className="upload_button">잡화</button>
                    </details>
                    <div className="space"></div>
                    <div className="space"></div>
                    <div className="space"></div>

                    <div className="product_name">
                        대여가능날짜
                    </div><input type="date" name="bday" min="2022-02-11"/>

                    <div className="space"></div>
                    <div className="space"></div>
                    <div className="space"></div>
                <Link to="/home"><button className="submit_button">Submit</button></Link>
                </div>
                
                
            </div>
        );
}



export default UploadPage;