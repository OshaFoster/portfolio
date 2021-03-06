import React from "react";

function Header(){
    return (

            <div className="header">
            <div className="name">
                <h2 >Osha Foster</h2>
            </div>
                <div className="icons">
                    <span className="dev">Web Developer</span>
                <a href="https://www.linkedin.com/in/osha-foster-a295ab52/" target="_blank" rel="noopener noreferrer" className="icons"><span class="fa-stack fa-lg">
                        <i className="icon" class="fa fa-circle fa-stack-2x"></i>
                        <i className="icon" class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span> </a>
                    <a href="https://github.com/OshaFoster" target="_blank" rel="noopener noreferrer" className="icons"><span class="fa-stack fa-lg">
                        <i className="icon" class="fa fa-circle fa-stack-2x"></i>
                        <i className="icon" class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span></a>

                </div>

        </div>
    )
}


export default Header
