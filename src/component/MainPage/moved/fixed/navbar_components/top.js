import React, {Component} from 'react';
import Header from '../Header';
import Navbar from '../Navbar';

class Top extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Navbar/>
                top
            </div>
        )
    }
}

export default Top;