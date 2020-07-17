import React from 'react'
import './style.css'
function Footer(){
    return (
    <div className="footer">
        <div className="copyright">
            <img className="footer_logo" src="/img/footerLogo.png" />
            <div className="addr">
                <p>16419 경기도 수원시 장안구 서부로 2066 성균관대학교 자연과학캠퍼스 소프트웨어대학</p>
                <p>COPYRIGHT ⓒ 2018 성균관대학교 시스템컨설턴트그룹 All Right Reserved.</p>
            </div>
        </div>
    </div>
    );
}
export default Footer;