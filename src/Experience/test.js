import React from "react";
import classes from  './test.module.css';

function test (props){
    return(
        <ul className={classes.timeline}>
        <li className={classes.timelineItem}>
            <div className={classes.timelineMarker}></div>
test<br/>test
        </li>
        </ul>
        
    );
}

export default test;