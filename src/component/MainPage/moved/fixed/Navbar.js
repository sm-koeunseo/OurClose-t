import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    render(){
        return(
            <nav className="navbar"> {/* 하단 네비게이션 최상위 태그 */}
            <button className="button">아우터</button> {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
            <button className="button">상의</button>
            <button className="button">팬츠</button>
            <button className="button">스커트</button>
            <button className="button">원피스</button>
        </nav>
        )
    }
}

export default Navbar;