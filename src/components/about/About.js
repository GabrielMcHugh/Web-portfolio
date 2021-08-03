import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"; 

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                    <span  className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> Hi! <span role="img" aria-label="sheep">👋</span> My name is GABRIEL MCHUGH, I graduated from the University of Queensland with a Major in Computer Science and I want to be a web developer. Software development is a fun and exciting process and I love being a part of it!</p>
                         <p className={classes.br}>I love improving my skills as a web developer and developing my technique and I like to stay on top of latest trends.
 </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;