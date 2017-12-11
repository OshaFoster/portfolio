import React from "react";
import {Link} from "react-router-dom";
const recipeBox = require("../images/recipeBox.jpg")
const recipeSearch =require("../images/recipeSearch.jpg")


function RecipeBox(){
    return(
        <div>
        <div className="Div1">
            <div className="fairylandViewImageShow">
                <img className="fairylandImage2" src={recipeBox} alt="image1"/>
            </div>
            <div className="fairylandViewImage">
                <img className="fairylandImage2" src={recipeSearch} alt="image1"/>
            </div>

        </div>
        <div className="midDiv">
                <a href="https://osha-recipe-box.herokuapp.com/"  target="_blank" rel="noopener noreferrer" className="resumeLink
                "><span className="appLink">View App</span></a>
            <a href="https://github.com/OshaFoster/final-project"  target="_blank" rel="noopener noreferrer" className="resumeLink
            "><span className="appLink">View Code</span></a>
        </div>
        <div className="Div2">
            <h3 className="titleView">Good Food Recipe Box</h3>
        <p className="description"> Single Page Application - Features:  Add, Edit, Link To, Search and Delete.
                <br></br>Built with:<span className="languages">  JavaScript, ReactJs, Redux, Node.js, Express, MongoDB, HTML, CSS</span>
            </p>
        </div>
        <div className="bottomDiv">
            <span><Link className="homeLink" to="/"><span>
                Home Page</span></Link></span>

        </div>
        </div>

    )
}

export default RecipeBox
