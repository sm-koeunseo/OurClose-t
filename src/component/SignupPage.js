import React, {Component} from 'react';
import './SignupPage.css';
import cloth from './cloth.svg';

class SignupPage extends Component {
    render() {
        return(
            <div className="container">
                
                <div className="left">
                    <div className="join_our_closet">
                        <img src={cloth} alt="cloth" width="80" height="80"></img><br/>
                        Join<br/>Our Closet!</div>
                </div>

                <div className="right">
                    <div className="title">Create Account</div>
                    <div className="Login_from">
                        <div className="Login_Row">
                                <svg className="Login_icon" viewBox="0 0 20 20">
                                    <path className="Login_path"
                                        d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8"/>
                                </svg>
                                <input type="text" className="login_input_id" placeholder="name"/>
                        </div>
                        <div className="space"></div>
                        <div className="Login_Row">
                                <svg className="Login_icon" viewBox="0 0 20 20">
                                    <path className="Login_path"
                                    d="M17.051,3.302H2.949c-0.866,0-1.567,0.702-1.567,1.567v10.184c0,0.865,0.701,1.568,1.567,1.568h14.102c0.865,0,1.566-0.703,1.566-1.568V4.869C18.617,4.003,17.916,3.302,17.051,3.302z M17.834,15.053c0,0.434-0.35,0.783-0.783,0.783H2.949c-0.433,0-0.784-0.35-0.784-0.783V4.869c0-0.433,0.351-0.784,0.784-0.784h14.102c0.434,0,0.783,0.351,0.783,0.784V15.053zM15.877,5.362L10,9.179L4.123,5.362C3.941,5.245,3.699,5.296,3.581,5.477C3.463,5.659,3.515,5.901,3.696,6.019L9.61,9.86C9.732,9.939,9.879,9.935,10,9.874c0.121,0.062,0.268,0.065,0.39-0.014l5.915-3.841c0.18-0.118,0.232-0.36,0.115-0.542C16.301,5.296,16.059,5.245,15.877,5.362z"    />
                                </svg>
                                <input type="text" className="login_input_pw" placeholder="email"/>
                        </div>
                        <div className="space"></div>
                        <div className="Login_Row">
                                <svg className="Login_icon" vieBox="0 0 20 20">
                                    <path className="Login_path"
                                        d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0"
                                        />
                                </svg>
                                <input type="password" className="login_input_pw" placeholder="password"/>
                        </div>

                        <div className="space"></div>
                        <button type="button" className="sign_up_button">Sign Up</button>
                    </div>
                </div>

            </div>
        );}
}

export default SignupPage;