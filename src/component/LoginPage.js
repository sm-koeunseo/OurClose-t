import React, {Component} from 'react';
import './LoginPage.css'
import cloth from './cloth.svg';

class LoginPage extends Component {

    render() {
        return (
            <div className="container">
                <div className="left">
                <div className="title">Sign In</div>
                        <div className="Login_from">
                                <div className="Login_Row">
                                <svg className="Login_icon" viewBox="0 0 20 20">
                                    <path className="Login_path"
                                        d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8"/>
                                </svg>
                                <input type="text" className="login_input_id" placeholder="email"/>
                            </div>
                            <div className="space"></div>
                            <div className="Login_Row">
                                <svg className="Login_icon" viewBox="0 0 20 20">
                                    <path className="Login_path"
                                        d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0"/>
                                </svg>
                                <input type="password" className="login_input_pw" placeholder="Password"/>
                            </div>

                            <div className="space"></div>

                            <button type="button" className="google_button">
                            <svg className="google_icon" viewBox="0 0 18 18" width="28">
                     <path fill="#336600" d="M8.937,10.603c-0.383-0.284-0.741-0.706-0.754-0.837c0-0.223,0-0.326,0.526-0.758c0.684-0.56,1.062-1.297,1.062-2.076c0-0.672-0.188-1.273-0.512-1.71h0.286l1.58-1.196h-4.28c-1.717,0-3.222,1.348-3.222,2.885c0,1.587,1.162,2.794,2.726,2.858c-0.024,0.113-0.037,0.225-0.037,0.334c0,0.229,0.052,0.448,0.157,0.659c-1.938,0.013-3.569,1.309-3.569,2.84c0,1.375,1.571,2.373,3.735,2.373c2.338,0,3.599-1.463,3.599-2.84C10.233,11.99,9.882,11.303,8.937,10.603 M5.443,6.864C5.371,6.291,5.491,5.761,5.766,5.444c0.167-0.192,0.383-0.293,0.623-0.293l0,0h0.028c0.717,0.022,1.405,0.871,1.532,1.89c0.073,0.583-0.052,1.127-0.333,1.451c-0.167,0.192-0.378,0.293-0.64,0.292h0C6.273,8.765,5.571,7.883,5.443,6.864 M6.628,14.786c-1.066,0-1.902-0.687-1.902-1.562c0-0.803,0.978-1.508,2.093-1.508l0,0l0,0h0.029c0.241,0.003,0.474,0.04,0.695,0.109l0.221,0.158c0.567,0.405,0.866,0.634,0.956,1.003c0.022,0.097,0.033,0.194,0.033,0.291C8.752,14.278,8.038,14.786,6.628,14.786 M14.85,4.765h-1.493v2.242h-2.249v1.495h2.249v2.233h1.493V8.502h2.252V7.007H14.85V4.765z"></path></svg>
                            구글로 시작하기</button>
                            
                            <div className="space"></div>
                            <div className="space"></div>
                            <div className="space"></div>

                            {/* <button className="login_button">LOGIN</button> */}
                            <input type="button" onClick={function(e){
                                e.preventDefault();
                                this.props.onChangeMode('main');
                            }.bind(this)} value="login_button" className="login_button"></input>
                            <div className="space"></div>
                            <p className="Login_signup">
                                <button>비밀번호찾기</button>
                                <button>회원가입</button></p> 
                        </div>
                </div>


                <div className="right">
                    <span>our<br/>closet</span>
                </div>
            </div>
            
        );
    }
}

export default LoginPage;