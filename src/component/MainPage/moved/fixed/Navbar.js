import React, {Component} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
            <nav className="navbar"> {/* 하단 네비게이션 최상위 태그 */}
            <Link to="/outer"><button className="button">아우터</button></Link> {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
            <Link to="/top"><button className="button">상의</button></Link>
            <Link to="/pants"><button className="button">팬츠</button></Link>
            <Link to="/skirt"><button className="button">스커트</button></Link>
            <Link to="/dress"><button className="button">원피스</button></Link>
            <Link to="/shoes"><button className="button">잡화</button></Link>
        </nav>
        )
    }
}

export default Navbar;