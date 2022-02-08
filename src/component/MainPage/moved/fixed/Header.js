import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';


class Header extends Component{
    render(){
        return(
            <div className="header">

            {/*헤더 가운데 로고*/}
            <div className="header_logo">
                <svg width="55" height="50" viewBox="0 0 55 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.2084 23.5756V21.7394C32.5327 21.1369 34.5914 19.7801 36.0618 17.8819C37.5321 15.9836 38.3311 13.6511 38.3334 11.25C38.3334 5.27542 33.4747 0.416672 27.5001 0.416672C21.5255 0.416672 16.6667 5.27542 16.6667 11.25H22.0834C22.0834 8.26271 24.5128 5.83334 27.5001 5.83334C30.4874 5.83334 32.9167 8.26271 32.9167 11.25C32.9167 14.2373 30.4874 16.6667 27.5001 16.6667C26.7818 16.6667 26.0929 16.952 25.585 17.4599C25.0771 17.9678 24.7917 18.6567 24.7917 19.375V23.5756L1.32404 44.4352C0.915297 44.8009 0.627085 45.282 0.497461 45.8149C0.367836 46.3478 0.402895 46.9075 0.598009 47.4201C0.793122 47.9327 1.13911 48.374 1.59029 48.6858C2.04148 48.9977 2.57663 49.1653 3.12508 49.1667H51.8751C52.4239 49.1654 52.9594 48.9976 53.4108 48.6854C53.8622 48.3732 54.2082 47.9314 54.4031 47.4183C54.598 46.9053 54.6326 46.3451 54.5023 45.812C54.372 45.2789 54.083 44.7978 53.6734 44.4325L30.2084 23.5756ZM10.248 43.75L27.5001 28.4154L44.7522 43.75H10.248Z" fill="#036635"/></svg>
                <Link to="/">
                    <svg width="244" height="33" viewBox="0 0 244 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9311 32.605C13.6311 32.605 10.6977 31.89 8.13106 30.46C5.60106 28.9933 3.63939 27.05 2.24606 24.63C0.852726 22.1733 0.15606 19.4967 0.15606 16.6C0.15606 13.7033 0.852726 11.0267 2.24606 8.57C3.63939 6.07667 5.60106 4.115 8.13106 2.685C10.6977 1.21833 13.6311 0.484999 16.9311 0.484999C20.2311 0.484999 23.1461 1.21833 25.6761 2.685C28.2427 4.115 30.2227 6.07667 31.6161 8.57C33.0094 11.0267 33.7061 13.7033 33.7061 16.6C33.7061 19.4967 33.0094 22.1733 31.6161 24.63C30.2227 27.05 28.2427 28.9933 25.6761 30.46C23.1461 31.89 20.2311 32.605 16.9311 32.605ZM16.9311 29.305C19.3877 29.305 21.5144 28.7367 23.3111 27.6C25.1077 26.4633 26.4827 24.9417 27.4361 23.035C28.4261 21.0917 28.9211 18.9467 28.9211 16.6C28.9211 14.2167 28.4261 12.0533 27.4361 10.11C26.4827 8.16666 25.1077 6.62666 23.3111 5.49C21.5144 4.31667 19.3877 3.73 16.9311 3.73C14.4744 3.73 12.3477 4.31667 10.5511 5.49C8.75439 6.62666 7.37939 8.185 6.42606 10.165C5.47273 12.1083 4.99606 14.2717 4.99606 16.655C4.99606 19.0383 5.47273 21.1833 6.42606 23.09C7.37939 24.9967 8.75439 26.5183 10.5511 27.655C12.3477 28.755 14.4744 29.305 16.9311 29.305ZM63.9002 29.085V32H55.9802L55.8702 29.36C53.2302 31.4867 50.5719 32.55 47.8952 32.55C45.4752 32.55 43.6602 31.8717 42.4502 30.515C41.2769 29.1583 40.6902 27.4167 40.6902 25.29V13.3H37.0602V10.385H44.7602V24.85C44.7602 26.2433 45.0902 27.3433 45.7502 28.15C46.4469 28.92 47.4735 29.305 48.8302 29.305C51.3235 29.305 53.6702 28.2967 55.8702 26.28V13.3H51.9652V10.385H59.8852V29.085H63.9002ZM80.1673 10.11C81.5606 10.11 83.0273 10.4767 84.5673 11.21L83.5773 14.895C82.3306 14.0883 81.0656 13.685 79.7823 13.685C78.3156 13.685 77.0873 14.29 76.0973 15.5C75.144 16.6733 74.6673 18.305 74.6673 20.395L74.6123 29.085H78.4623V32H66.4173V29.085H70.5973V13.3H66.4173V10.385H74.6123V14.345C75.7856 11.5217 77.6373 10.11 80.1673 10.11ZM135.906 23.64C133.596 29.5433 128.756 32.5317 121.386 32.605C118.196 32.605 115.373 31.9267 112.916 30.57C110.459 29.1767 108.553 27.27 107.196 24.85C105.839 22.43 105.161 19.6433 105.161 16.49C105.161 13.41 105.821 10.66 107.141 8.24C108.498 5.82 110.404 3.93167 112.861 2.575C115.354 1.18167 118.214 0.484999 121.441 0.484999C123.751 0.484999 125.823 0.924999 127.656 1.805C129.489 2.64833 130.919 3.82167 131.946 5.325V1.035H135.246V10.385L132.276 10.495C131.139 8.14833 129.709 6.44333 127.986 5.38C126.263 4.31667 124.154 3.785 121.661 3.785C119.278 3.785 117.169 4.35333 115.336 5.49C113.539 6.59 112.146 8.09333 111.156 10C110.166 11.9067 109.671 14.0517 109.671 16.435C109.671 19.0017 110.184 21.2567 111.211 23.2C112.238 25.1433 113.668 26.6467 115.501 27.71C117.334 28.7733 119.388 29.305 121.661 29.305C124.154 29.305 126.373 28.7183 128.316 27.545C130.296 26.3717 131.726 24.52 132.606 21.99L135.906 23.64ZM140.528 29.085H144.543V3.345H140.638V0.484999H148.613V29.085H152.133V32H140.528V29.085ZM166.365 32.66C164.055 32.66 162.02 32.1833 160.26 31.23C158.5 30.2767 157.125 28.9383 156.135 27.215C155.182 25.455 154.705 23.4383 154.705 21.165C154.705 18.8917 155.182 16.8933 156.135 15.17C157.125 13.4467 158.5 12.1267 160.26 11.21C162.02 10.2567 164.055 9.78 166.365 9.78C168.675 9.78 170.71 10.2567 172.47 11.21C174.267 12.1267 175.66 13.4467 176.65 15.17C177.64 16.8933 178.135 18.8733 178.135 21.11C178.135 23.3833 177.64 25.4 176.65 27.16C175.66 28.92 174.267 30.2767 172.47 31.23C170.71 32.1833 168.675 32.66 166.365 32.66ZM166.365 29.47C168.639 29.47 170.472 28.7183 171.865 27.215C173.259 25.675 173.955 23.64 173.955 21.11C173.955 18.6533 173.259 16.6917 171.865 15.225C170.472 13.7217 168.639 12.97 166.365 12.97C164.092 12.97 162.277 13.7217 160.92 15.225C159.564 16.7283 158.885 18.7083 158.885 21.165C158.885 23.6583 159.564 25.675 160.92 27.215C162.314 28.7183 164.129 29.47 166.365 29.47ZM193.732 19.46C195.419 19.8633 196.757 20.3033 197.747 20.78C198.774 21.22 199.599 21.88 200.222 22.76C200.846 23.64 201.157 24.8133 201.157 26.28C201.157 28.3333 200.351 29.8917 198.737 30.955C197.124 32.0183 195.181 32.55 192.907 32.55C191.514 32.55 190.194 32.33 188.947 31.89C187.701 31.45 186.711 30.8633 185.977 30.13V32H182.787V24.52H185.647L185.867 26.885C186.491 27.8017 187.389 28.5167 188.562 29.03C189.772 29.5067 191.037 29.745 192.357 29.745C193.787 29.745 194.961 29.47 195.877 28.92C196.794 28.3333 197.252 27.5633 197.252 26.61C197.252 25.51 196.904 24.7217 196.207 24.245C195.511 23.7683 194.209 23.3283 192.302 22.925L189.277 22.265C187.041 21.715 185.391 21 184.327 20.12C183.264 19.2033 182.732 17.7917 182.732 15.885C182.732 14.015 183.466 12.5483 184.932 11.485C186.436 10.385 188.361 9.835 190.707 9.835C191.844 9.835 192.999 10.0183 194.172 10.385C195.382 10.7517 196.336 11.265 197.032 11.925V10.275H200.277V17.7H197.417L197.032 15.005C196.482 14.345 195.657 13.8133 194.557 13.41C193.494 12.97 192.431 12.75 191.367 12.75C190.084 12.75 189.002 13.0067 188.122 13.52C187.242 14.0333 186.802 14.785 186.802 15.775C186.802 16.5817 187.114 17.205 187.737 17.645C188.361 18.085 189.424 18.4883 190.927 18.855L193.732 19.46ZM197.637 16.105L197.582 15.995L197.637 16.105ZM185.207 25.51C185.207 25.5833 185.226 25.6383 185.262 25.675L185.207 25.51ZM226.658 22.045H208.838C209.094 24.355 209.919 26.1883 211.313 27.545C212.706 28.865 214.484 29.525 216.648 29.525C219.654 29.525 222.386 28.37 224.843 26.06L226.273 28.535C225.209 29.7817 223.871 30.79 222.258 31.56C220.644 32.2933 218.829 32.66 216.813 32.66C214.539 32.66 212.468 32.1833 210.598 31.23C208.728 30.2767 207.261 28.9383 206.198 27.215C205.134 25.455 204.603 23.4567 204.603 21.22C204.603 18.9467 205.098 16.9483 206.088 15.225C207.114 13.465 208.489 12.1267 210.213 11.21C211.973 10.2567 213.916 9.78 216.043 9.78C219.343 9.78 221.928 10.7883 223.798 12.805C225.704 14.8217 226.658 17.5533 226.658 21V22.045ZM222.643 19.515C222.643 17.425 222.019 15.775 220.773 14.565C219.563 13.355 217.986 12.75 216.043 12.75C214.136 12.75 212.523 13.355 211.203 14.565C209.883 15.775 209.094 17.425 208.838 19.515H222.643ZM239.524 32C235.344 32 233.254 29.8733 233.254 25.62V13.3H229.679V10.385H233.254V3.015L237.324 1.42V10.385H243.044V13.3H237.324V25.4C237.324 26.7567 237.544 27.71 237.984 28.26C238.424 28.81 239.176 29.085 240.239 29.085H243.539V32H239.524Z" fill="#036635"/></svg>
            </Link></div>

            {/*헤더 왼쪽 성별*/}
            <div className="header_left">
                <input type="button" className="gender" value="여성"/>
                <input type="button" className="gender" value="남성"/>
                <input type="button" className="gender" value="아동"/>
            </div>

            {/*헤더 오른쪽 로고버튼*/}
            <div className="header_right">
                <svg style={{marginRight:"10px"}} className="right_logo" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.3078 31.0479L22.6561 20.3961C24.309 18.2592 25.2031 15.6465 25.2031 12.8984C25.2031 9.60898 23.9193 6.52461 21.5979 4.19902C19.2764 1.87344 16.1838 0.59375 12.8984 0.59375C9.61309 0.59375 6.52051 1.87754 4.19902 4.19902C1.87344 6.52051 0.59375 9.60898 0.59375 12.8984C0.59375 16.1838 1.87754 19.2764 4.19902 21.5979C6.52051 23.9234 9.60898 25.2031 12.8984 25.2031C15.6465 25.2031 18.2551 24.309 20.392 22.6602L31.0438 33.3078C31.075 33.3391 31.1121 33.3639 31.1529 33.3808C31.1937 33.3977 31.2375 33.4064 31.2816 33.4064C31.3258 33.4064 31.3696 33.3977 31.4104 33.3808C31.4512 33.3639 31.4883 33.3391 31.5195 33.3078L33.3078 31.5236C33.3391 31.4924 33.3639 31.4553 33.3808 31.4145C33.3977 31.3737 33.4064 31.3299 33.4064 31.2857C33.4064 31.2416 33.3977 31.1978 33.3808 31.157C33.3639 31.1162 33.3391 31.0791 33.3078 31.0479ZM19.3953 19.3953C17.6563 21.1303 15.3512 22.0859 12.8984 22.0859C10.4457 22.0859 8.14063 21.1303 6.40156 19.3953C4.6666 17.6563 3.71094 15.3512 3.71094 12.8984C3.71094 10.4457 4.6666 8.13652 6.40156 6.40156C8.14063 4.6666 10.4457 3.71094 12.8984 3.71094C15.3512 3.71094 17.6604 4.6625 19.3953 6.40156C21.1303 8.14063 22.0859 10.4457 22.0859 12.8984C22.0859 15.3512 21.1303 17.6604 19.3953 19.3953Z" fill="#545454"/></svg>
                <Link to="/mypage">
                <svg style={{marginRight:"10px"}} className="right_logo" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 16C18.0886 16 20.0916 15.1703 21.5685 13.6935C23.0453 12.2166 23.875 10.2136 23.875 8.125C23.875 6.03642 23.0453 4.03338 21.5685 2.55653C20.0916 1.07969 18.0886 0.25 16 0.25C13.9114 0.25 11.9084 1.07969 10.4315 2.55653C8.95469 4.03338 8.125 6.03642 8.125 8.125C8.125 10.2136 8.95469 12.2166 10.4315 13.6935C11.9084 15.1703 13.9114 16 16 16ZM21.25 8.125C21.25 9.51739 20.6969 10.8527 19.7123 11.8373C18.7277 12.8219 17.3924 13.375 16 13.375C14.6076 13.375 13.2723 12.8219 12.2877 11.8373C11.3031 10.8527 10.75 9.51739 10.75 8.125C10.75 6.73261 11.3031 5.39725 12.2877 4.41269C13.2723 3.42812 14.6076 2.875 16 2.875C17.3924 2.875 18.7277 3.42812 19.7123 4.41269C20.6969 5.39725 21.25 6.73261 21.25 8.125ZM31.75 29.125C31.75 31.75 29.125 31.75 29.125 31.75H2.875C2.875 31.75 0.25 31.75 0.25 29.125C0.25 26.5 2.875 18.625 16 18.625C29.125 18.625 31.75 26.5 31.75 29.125ZM29.125 29.1145C29.1224 28.4688 28.7208 26.5262 26.941 24.7465C25.2295 23.035 22.0086 21.25 16 21.25C9.98875 21.25 6.7705 23.035 5.059 24.7465C3.27925 26.5262 2.88025 28.4688 2.875 29.1145H29.125Z" fill="#545454"/></svg>
                </Link>
                <svg style={{marginRight:"10px"}} className="right_logo" width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.5952 3.31763C32.6821 2.2653 31.5979 1.43067 30.4048 0.86141C29.2116 0.292154 27.9328 -0.000558041 26.6414 7.98681e-07C25.35 0.000559638 24.0714 0.294379 22.8786 0.864667C21.6858 1.43495 20.6022 2.27053 19.6897 3.32365L18.4986 4.71299L17.3175 3.32666L17.3098 3.31781C16.3971 2.26598 15.3135 1.43162 14.121 0.86237C12.9285 0.293123 11.6504 0.000134816 10.3596 0.000134816C9.06885 0.000134816 7.79073 0.293123 6.59821 0.86237C5.4057 1.43162 4.32215 2.26598 3.40945 3.31781L2.87883 3.9293C1.03555 6.05354 0 8.93464 0 11.9388C0 14.9429 1.03555 17.824 2.87883 19.9483L16.8831 36.0869L18.4646 37.9964L18.5023 37.9528L18.5432 38L20.0249 36.1984L34.1258 19.948C35.9664 17.8221 37 14.9416 37 11.9385C37 8.93543 35.9664 6.05497 34.1258 3.92903L33.5952 3.31763ZM32.3879 17.9457L18.5023 33.9482L4.61626 17.9457C3.2338 16.3525 2.45715 14.1917 2.45715 11.9386C2.45715 9.68546 3.2338 7.52464 4.61626 5.93146L5.14695 5.31997C6.52874 3.72757 8.40264 2.8326 10.3568 2.83176C12.3109 2.83091 14.1854 3.72426 15.5682 5.31545L18.4933 8.74784L21.4324 5.31997C22.1169 4.53109 22.9296 3.90532 23.8239 3.47839C24.7183 3.05145 25.6769 2.83171 26.645 2.83171C27.6131 2.83171 28.5717 3.05145 29.4661 3.47839C30.3605 3.90532 31.1731 4.53109 31.8576 5.31997L32.3883 5.93137C33.7686 7.52587 34.5438 9.68625 34.5438 11.9386C34.5437 14.1909 33.7684 16.3512 32.3879 17.9457Z" fill="#545454"/></svg>
                <svg style={{marginRight:"10px"}} className="right_logo" width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.25 2.375C33.8799 2.375 34.484 2.62522 34.9294 3.07062C35.3748 3.51602 35.625 4.12011 35.625 4.75V23.75C35.625 24.3799 35.3748 24.984 34.9294 25.4294C34.484 25.8748 33.8799 26.125 33.25 26.125H10.4832C9.22357 26.1253 8.01559 26.6259 7.125 27.5168L2.375 32.2668V4.75C2.375 4.12011 2.62522 3.51602 3.07062 3.07062C3.51602 2.62522 4.12011 2.375 4.75 2.375H33.25ZM4.75 0C3.49022 0 2.28204 0.500445 1.39124 1.39124C0.500445 2.28204 0 3.49022 0 4.75L0 35.1334C4.99103e-05 35.3683 0.0698074 35.598 0.200444 35.7933C0.33108 35.9886 0.516722 36.1408 0.733873 36.2306C0.951025 36.3203 1.18992 36.3436 1.42034 36.2976C1.65075 36.2515 1.86231 36.1381 2.02825 35.9717L8.80412 29.1959C9.24942 28.7504 9.85341 28.5001 10.4832 28.5H33.25C34.5098 28.5 35.718 27.9996 36.6088 27.1088C37.4996 26.218 38 25.0098 38 23.75V4.75C38 3.49022 37.4996 2.28204 36.6088 1.39124C35.718 0.500445 34.5098 0 33.25 0L4.75 0Z" fill="#545454"/></svg>
            </div>

        </div>
        )
    }
}

export default Header;