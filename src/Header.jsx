import React from 'react'
import "./style.css"
function Header(){
    return (
        <div className="header">
            <div className="topMenu">
                <div className="top_logo">
                    <img src="/topLogo_new.png" />
                </div>
                <div className="rightTop">
                    <div className="topMenuWrapper">
                        <span>HOME</span>
                        <span>|</span>
                        <span>SITEMAP</span>
                        <span>|</span>
                        <a href="https://cs.skku.edu/en/">ENGLISH</a>
                    </div>
                </div>
                
            </div>
        </div>   
    );
}
export default Header;