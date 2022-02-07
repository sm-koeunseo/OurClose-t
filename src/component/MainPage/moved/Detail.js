import React, {Component} from 'react';
import Header from './fixed/Header';
import Navbar from './fixed/Navbar';
import './Detail.css';

import hahaha from '../moved/hahaha.svg';
import check from '../moved/check.svg'
import down1 from '../moved/svgs/down1.svg';
class Detail extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Navbar/>
                <div className="container">
                    <div className="detail">
                        <img src={down1} alt="down1" style={{width:"100%", height:"100%"}}></img>
                    </div>

                    <div className="detail">
                        <div className="hahaha">
                            <img src={hahaha} alt="hahaha" height="100%" ></img>
                            haha ha</div>
                        <div style={{padding:"20px"}} className="item_name">슬로우앤드 스트라이프 니트</div>
                        <div style={{padding:"20px"}} className="item_size">M 사이즈</div>
                        <div style={{padding:"20px"}} className="item_price">5000원/3일</div>
                        <div className="choice" style={{padding:"20px"}}>
                                <input type="checkbox"/>용산구 직거래
                                <input type="checkbox"/>택배 거래
                        </div>
                    <div style={{padding:"20px"}} className="product_name">
                        대여가능날짜<input type="date" name="bday" min="2022-02-11"/>  
                    </div>

                        <button className="chat" style={{padding:"20px"}}>채팅하기</button>       
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail;