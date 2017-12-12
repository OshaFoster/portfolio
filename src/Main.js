import React from "react"
import {Link} from "react-router-dom"
const fairyHome = require("./images/fairylandHome.jpg")
const recipeBox = require("./images/recipeBox.jpg")
// const recipeSearch =require("./images/recipeSearch.jpg")

function Main() {
    return (
        <div className="parent">
            <div className="about">
                <h3>About: </h3>
            <p>Graduate of VSchool where I completed 450 hours of intensive web development training with a focus on: <br></br>

        <span className="languages" >JavaScript, React.JS, Redux, Express, NodeJS, MongoDB, HTML5, CSS3.</span><br></br>

        Learning to code is a continual process. I like that programming principles build on themselves, and there is always
        something to learn. I worked independently as landscape gardener for years, and there were often large projects that
        needed to be considered and pared down to manageable assignments. I am finding a similar experience in web development:
        taking large tasks and breaking them into approachable pieces. <br></br>I enjoyed the experience of working with my
        classmates (at times pair-programming) while building apps. I experienced the benefit of having two sets of eyes on the
        code. I found it interesting, joining someone else on a project where I had to familiarize myself with their code. I
        felt the process of collaboration often helped us move through problems efficiently. Working in teams, we started our
        day with a 15 minute stand up and had SCRUM meetings with an advisor. Having a plan for the day and a way to measure our
        progress was helpful. Since graduating, I am continuing my studies independently to strengthen my foundation. I look
        forward to joining a company where I can continue to learn, grow and offer my skills.

                </p>
            </div>
            <div className="titleProjects">Projects:</div>
            <div className="projectDiv">
                <div className="fairyland">
                    <div className="imageDiv">
                        <img className="fairylandImage" src={fairyHome} alt="image1"/>
                    </div>
                    <div className="projectTitleDiv">
                        <Link className="link" to="/fairyland"><h3 className="projectTitle">
                            Fairland Cupcake Shop</h3></Link>
                    </div>
                </div>
                <div className="recipeBox">
                    <div className="imageDiv">
                        <img className="recipeBoxImage" src={recipeBox} alt="image2"/>
                    </div>
                    <div className="projectTitleDiv">
                        <Link className="link" to="/recipeBox"> <h3 className="projectTitle">
                            Good Food Recipe Box</h3></Link>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Main;
