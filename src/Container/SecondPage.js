import React from 'react';
import styles from './SecondPage.module.css';

import profileImage from '../Images/profileImage.png'
import UKLogo from '../Images/uklogo.png'
import EZTurnLogo from '../Images/ezturnlogo.png'

import resume from '../Images/Resume_2020.docx';


const SecondPage = props => {
    return (
        <div className={styles.SectionTwo}>
            <div className={styles.WidthContainer}>

                <div className={styles.MyInfoSection}>
                    <img src={profileImage} className={styles.ProfileImage} alt="image" resizeMode="cover" />
                    <div>
                        <span className={styles.PrimaryText}>Andrew Wilson</span>
                        <span className={styles.SecondaryText}>Software Engineer in Lexington, KY</span>
                        <a href={resume} download="Andrew_Wilson_Resume" style={{cursor: 'default'}}><button className={styles.DownloadResumeButton}>Download Resume</button></a>
                    </div>
                </div>

                <div className={styles.MyInfoSection}>
                    <span className={styles.SecondaryText} style={{ marginTop: '0px' }}>About Me</span>
                    <span className={styles.TertiaryText}>
                        I graduated from the University of Kentucky in December 2020 with a degree in Computer Science. I love creating new things
                        and stretching the limits of what I'm capable of. I'm excited about what I do and look forward to facing new challenges every single day.
                    </span>
                </div>


                <div className={styles.MyInfoSection}>
                    <span className={styles.SecondaryText} style={{ marginTop: '0px' }}>Skills</span>
                    <div>
                        <span className={styles.TertiaryText} style={{ fontWeight: '600' }}>Programming/Scripting Languages: </span>
                        <span className={styles.TertiaryText}> JavaScript, HTML, CSS, Java, Swift, C++, C, C#, SQL</span>
                        <span className={styles.TertiaryText} style={{ fontWeight: '600' }}>Frameworks and tools: </span>
                        <span className={styles.TertiaryText}> React, React Native, Redux, Blazor, Bootstrap, .NET, Git</span>
                    </div>
                </div>

                <div className={styles.Timeline}>
                    <div className={styles.TimelineRow}>
                        <div className={styles.TimelineRowLeft}>
                            <span className={styles.SecondaryText}>University of Kentucky</span>
                            <span className={styles.TertiaryText}>B.S. Computer Science</span>
                            <span className={styles.TertiaryText}>Fall 2016 - December 2020</span>
                        </div>
                        <div className={styles.TimelineRowMiddle}>
                            <div className={styles.TimelineRowMiddleInner}>
                                <img src={UKLogo} alt="image" resizeMode="cover" />
                            </div>
                        </div>
                        <div className={styles.TimelineRowRight}>
                            <span className={styles.TertiaryText}>
                                During my time at UK, I was a member of the club tennis team and took many classes related to computer science and other
                                engineering fields. Some of my favorite of these classes included Introduction to Artificial Intelligence, Web Programming, and
                                Mobile App Development.
                            </span>
                        </div>
                    </div>
                    <div className={styles.TimelineRow}>
                        <div className={styles.TimelineRowLeft}>
                            <span className={styles.SecondaryText}>EZ-Turn</span>
                            <span className={styles.TertiaryText}>Software Developer Intern</span>
                            <span className={styles.TertiaryText}>January 2019 - May 2020</span>
                        </div>
                        <div className={styles.TimelineRowMiddle}>
                            <div className={styles.TimelineRowMiddleInner} style={{ height: '100%', maxHeight: "100px" }}>
                                <img src={EZTurnLogo} alt="image" resizeMode="cover" />
                            </div>
                        </div>
                        <div className={styles.TimelineRowRight}>
                            <span className={styles.TertiaryText}>
                                While at EZ-Turn, I was able to work directly under the CTO. My work included working with Swift on the development of the
                                company's iOS app, helping with the design of the app as well as the website, and my main work consisted of using ReactJS to develop the front-end.
                        </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    )

}

export default SecondPage;


