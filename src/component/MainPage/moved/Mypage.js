import React, {Component} from 'react';
import Header from './fixed/Header';
import Navbar from './fixed/Navbar';
import hahaha from '../moved/hahaha.svg';

import A from './svgs/게시글 올리기1.png';
import B from './svgs/게시글 올리기2.png';
import C from './svgs/carbon_ai-results.png';
import D from './svgs/취향 분석.png';

import './Mypage.css';
import {Link} from 'react-router-dom';
class Mypage extends Component {
    render() {
        return(
            <div>
                <Header/>
                <Navbar/>

                <div className='container'>
                    {/* 왼쪽 */}
                    <div className='mypage_left'>
                        <div className="mypage_left_title">My page</div>
                        <button className='mypage_left_button'>대여 내역 ></button>
                        <button className='mypage_left_button'>내 게시글 ></button>
                        <button className='mypage_left_button'>고객센터 ></button>
                        <button className='mypage_left_button'>FAQ ></button>
                        <button className='mypage_left_button'>로그아웃</button>
                    </div>
                    {/* 오른쪽 */}
                    <div className="mypage_right">
                        <div className="mypage_right_1">
                            <div>
                            <img style={{width:"70%", height:"70%"}} src={hahaha} alt="hahaha" ></img>
                            </div>
                            <div className="hahaha">ha haha</div>
                            <div style={{marginTop:"10px"}}>ypd05033@gamil.com</div>
                        </div>

                        <div className="mypage_right_2">
                            <button style={{marginRight:"10px"}} className='mypage_right_button'>대여 내역(0)</button>|
                            <button style={{marginLeft:"10px", marginRight:"10px"}} className="mypage_right_button">내 게시글(0)</button>|
                            <Link style={{marginLeft:"10px"}} to="/upload"><img src={A} alt="플러스"></img><img src={B} alt="게시글 올리기"></img></Link>
                        </div>

                        <div className="mypage_right_3">
                            <div><img src={C} alt="전구"></img><img src={D} alt="취향분석"></img></div>
                            <div style={{marginTop:"20px", color:"#036635"}}>#여성 #캐주얼 #스트릿 #러블리</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mypage;