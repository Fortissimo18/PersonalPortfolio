import React from "react";
import AboutMe from "./aboutMe";
import PortfolioTitle from "./portfolioTitle";
import Photo from './photo';
import classes from './homePage.module.css';

function homePage() {
    return (
        <div className={classes.homePage}>
            <div className={classes.left}>
                <PortfolioTitle />
                <AboutMe />
            </div>
            <div className={classes.right}>
                <Photo/>
            </div>
        </div>
    );
}

export default homePage;