import React, {Component} from 'react';
import Header from '../Header';
import Navbar from '../Navbar';
import './navbar_components.css';
import noimg from './noimg.png'
class Bags extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Navbar/>
                <div style={{marginTop:"40px",marginBottom:"40px"}} className='noimg'>
                    <img alt='noimg' src={noimg}/>
                    <img alt='noimg' src={noimg}/> 
                    <img alt='noimg' src={noimg}/> 
                    <img alt='noimg' src={noimg}/>                    
                </div>
                <div style={{marginTop:"40px",marginBottom:"40px"}} className='noimg'>
                    <img alt='noimg' src={noimg}/>
                    <img alt='noimg' src={noimg}/> 
                    <img alt='noimg' src={noimg}/> 
                    <img alt='noimg' src={noimg}/>                    
                </div>
            </div>
        )
    }
}

export default Bags;