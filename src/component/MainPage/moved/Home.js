import React, {Component} from 'react';
import Header from './fixed/Header';
import Navbar from './fixed/Navbar';
import './Home.css';
import {Link} from 'react-router-dom';

import image1 from './svgs/image1.svg';
import image2 from './svgs/image2.svg';
import image3 from './svgs/image3.svg';
import down from './svgs/down.svg';
import down1 from './svgs/down1.svg';
import down2 from './svgs/down2.svg';
import down3 from './svgs/down3.svg';
import down4 from './svgs/down4.svg';
class Home extends Component {
    render(){
        return(
            <div>
                <Header/>
                <Navbar/>

                <div className="home_up">
                    <img style={{marginRight:"70px"}} src={image1} alt="image1"></img>
                    <div style={{marginLeft:"40px"}} className='home_up_right'>
                        <img src={image2} alt="image2"></img>
                        <div><img style={{marginLeft:"15px", marginTop:"5px"}} src={image3} alt="image3"></img></div>
                    </div>
                </div>

                <div>
                    <div className="home_down">
                        <img style={{marginTop:"40px", marginBottom:"20px"}} src={down} alt="down"></img>
                    </div>
                    <div className="home_down_down">
                        <Link to="/detail"><img src={down1} alt="down1"></img></Link>
                        <img src={down2} alt="down2"></img>
                        <img src={down3} alt="down3"></img>
                        <img src={down4} alt="down4"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;