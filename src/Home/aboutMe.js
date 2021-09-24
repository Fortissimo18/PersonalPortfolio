import React from "react";
import classes from './aboutMe.module.css';

function aboutMe() {
    return (
        <div className={classes.aboutMe}>
            <h1>Welcome to My Universe</h1>
            <p>An innovative and solution-driven software developer. 
                <br/>With 3 Agile initiative projects and experience in full
                development lifecycle, 
                <br/>I'm comfortable with React, CSS responsive web design, and Django backend.
                 <br/>I aim at combining
                the cutting-edge technology of data science with traditional web development to bring the user experience to a higher
                level.
            </p>
        </div>
    );
}

export default aboutMe;