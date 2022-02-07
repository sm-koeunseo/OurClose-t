import React, {Component} from 'react';
import Header from './fixed/Header';
import Navbar from './fixed/Navbar';

class Mypage extends Component {
    render() {
        return(
            <div>
                <Header/>
                <Navbar/>
            </div>
        )
    }
}

export default Mypage;