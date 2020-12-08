import React, { useState, useEffect } from 'react';
import styles from './TopPage.module.css';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import smoothscroll from 'smoothscroll-polyfill';

const TopPage = props => {
    //Allows smooth scroll behavior in all browsers
    smoothscroll.polyfill();

    //Deciding when to show text "Hi," and "I'm Andrew"
    const [showTextOne, setShowTextOne] = useState(false)
    const [showTextTwo, setShowTextOTwo] = useState(false)

    //Setting timers so text appears in set time
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTextOne(true)
        }, 800);

        setTimeout(() => {
            setShowTextOTwo(true)
        }, 1800);
        return () => clearTimeout(timer);
    }, []);

    //Down button to go to next page 
    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    }

    return (
        <div className={styles.SectionOne}>

            <span className={styles.TopButtons}>
                <a href="https://www.linkedin.com/in/andrew-wilson-98968a1bb" target="_blank" rel="noreferrer">
                    <button className={styles.TopButtonsButton}><FontAwesomeIcon color="#373741" icon={faLinkedin} size='3x' /></button>
                </a>
                <a href="https://github.com/wdrew09" target="_blank" rel="noreferrer">
                    <button className={styles.TopButtonsButton}><FontAwesomeIcon color="#373741" icon={faGithub} size='3x' /></button>
                </a>
                <a href="mailto:awi279@uky.edu">
                    <button className={styles.HireMeButton}>Contact Me</button>
                </a>
            </span>

            <div className={styles.MainImageText}>
                <span className={showTextOne ? styles.fadeIn : styles.fadeOut} style={{ color: !showTextOne && 'transparent', textShadow: showTextOne && '1px 1px #373741' }}>Hi,</span>
                <span className={showTextTwo ? styles.fadeIn : styles.fadeOut} style={{ color: !showTextTwo && 'transparent', textShadow: showTextTwo && '1px 1px #373741' }}>  I'm Andrew</span>
            </div>

            <div className={styles.DownButton} >
                <button onClick={() => scrollDown()}><FontAwesomeIcon color="white" icon={faArrowCircleDown} size='3x' /></button>
            </div>
        </div>
    )
}


export default TopPage;