import React from "react";

function Footer(){

    return(
        <div className="footer">
            <div className="infoDiv">
                <a href="https://drive.google.com/file/d/1OrVF-NhYLsoSBY_64R0UlUqRzqyeNV5U/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                className="resumeLink"> <span className="resume">Resume</span></a>
                <a href="https://www.linkedin.com/in/osha-foster-a295ab52/" target="_blank" rel="noopener noreferrer" className="icons"><span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span> </a>
                    <a href="https://github.com/OshaFoster" target="_blank" rel="noopener noreferrer" className="icons"><span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span></a>
            </div>
        </div>
    )
}

export default Footer;
