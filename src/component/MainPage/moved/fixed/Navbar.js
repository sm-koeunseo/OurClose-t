import React, {Component} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
            <nav className="navbar"> {/* 하단 네비게이션 최상위 태그 */}
            <Link to="/outer" className="button_back">아우터</Link>
            <Link to="/top" className="button_back">상의</Link>
            <Link to="/pants" className="button_back">팬츠</Link>
            <Link to="/skirt" className="button_back">스커트</Link>
            <Link to="/dress" className="button_back">원피스</Link>
            <Link to="/bags" className="button_back">잡화</Link>
        </nav>
        )
    }
}

export default Navbar;