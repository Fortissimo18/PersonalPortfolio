import React from "react";
import classes from './progressBar.module.css';

function progressBar(props) {
    let barClass = [classes.timelineMarker];
    let timelineClass = [classes.timelineItem];
    if (props.layout === 'left') {
        barClass.push(classes.left);
        timelineClass.push(classes.left)
    }
    console.log(props.description)

    return (
        // <ul className={timelineClass.join(' ')}>
        <li className={timelineClass.join(' ')}>
            <div className={classes.timelineInfo}>
                {props.date}
            </div>
            <div className={barClass.join(' ')} id={props.id}></div>
            <div className={classes.timelineContent}>
                <h3 className={classes.timelineTitle}>{props.title}</h3>
                <h4 className={classes.timelineCompany}>{props.company}</h4>
                <ul>    
                    {[...props.description].map(item => (
                    <li>{item}</li>
                    ))}
                </ul>
            </div>
        </li>
        // </ul>
    );
}

export default progressBar;