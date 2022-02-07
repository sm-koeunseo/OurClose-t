import React, {Component} from 'react';
import './MainPage.css'
import Home from './moved/Home';

class MainPage extends Component {
    render(){
        return(
            <div className='main'>
                <Home/>
            </div>
        )
    }
}

export default MainPage;