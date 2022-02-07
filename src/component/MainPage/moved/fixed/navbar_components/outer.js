import React, {Component} from 'react';
import Header from '../Header';
import Navbar from '../Navbar';

class Outer extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Navbar/>
                outer
            </div>
        )
    }
}

export default Outer;