import React from "react";
import classes from './photo.module.css';
import profilePhoto from '../assets/ProfilePhoto.jpg'
function photo (){
    return(
        <img className={classes.photo} src={profilePhoto} alt='profilePhoto'></img>
    );
}

export default photo;