import React from "react";
import ProgressBar from "./progressBar";
import classes from './timeLine.module.css';

function timeLine() {

    let expereinces = [
        {
            title: 'Data Analyst Intern',
            date: 'Oct 2020 - Jan 2021',
            company: 'Sharp Circles SEO',
            description: ["Designed and visualised an interactive LinkedIn performance dashboard with filters and tooltips using Tableau.",
            "Increased the LinkedIn connections from 0.6k to 1.1k per month based on dashboard metrics.",
            "Improved the user experience through automatically generated analysis reports with VisQL.",
            "Designed and implemented the dashboard data update pipeline for non-tech users."]

        },
        {
            title: 'Web Backend Developer',
            date: 'Dec 2018 - Feb 2020',
            company: 'Summer Tech Live Programme',
            description: ["Enabled dynamic blog content storage, theme selection, and membership management system with Django.",
                "Improved system security and operational efficiency by validating 3 levels of admin permissions.",
                "Designed a robust and user-friendly admin interface with Wagtail for non-tech managers."]
        }

    ]
    let education = [
        {
            title: 'Master of Information Technology',
            date: 'Feb 2018 - Dec 2019',
            company: 'The University of Melbourne',
            description: ["WAM: 74.6"]

        },
        {
            title: 'Bachelor of Electrical Engineering',
            date: 'Jun 2013 - Sept 2017',
            company: "Xi'an Jiaotong - Liverpool University",
            description: ["First Class Honor"]

        }

    ]
    

    let experienceItems = expereinces.map(exp => (
        <ProgressBar key={exp.title} layout='right' title={exp.title} date={exp.date} company={exp.company} description={exp.description} />
    ));
    let educationItems = education.map(exp => (
        <ProgressBar key={exp.title} layout='left' title={exp.title} date={exp.date} company={exp.company} description={exp.description} />
    ));

    return (
        <div className={classes.timeLine}>
            <div className={classes.left}>
                <h1>Education</h1>
                {educationItems}
            </div>
            <div className={classes.right}>
                <h1>Experience</h1>
                {experienceItems}
            </div>
        </div>
    );
}

export default timeLine;