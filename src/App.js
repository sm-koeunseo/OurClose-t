import React, { Component } from 'react';
import LoginPage from './component/LoginPage';
import MainPage from './component/MainPage/MainPage';
//import UploadPage from './component/UploadPage'


class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            mode:'login'
        }
    }

    getContent(){
        var page;
        if (this.state.mode==='login'){
            page = <LoginPage onChangeMode={function(_mode){
                this.setState({
                    mode:_mode
                  });
              }.bind(this)}></LoginPage>
        } else if (this.state.mode==='main'){
            page = <MainPage/>
        }

        return page
    }

    render(){
        return(
            <div>
                {this.getContent()}
                {/* <MainPage></MainPage> */}
            </div>
        )
    }
}

export default App;