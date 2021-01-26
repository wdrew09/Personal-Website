import React from 'react';
import styles from './ThirdPage.module.css';

import ProjectCard from '../Components/ProjectCard';

import shooterImage from '../Images/CS316_Shooter_Image.png';
// import shooterGif from '../Images/CS316_Shooter_Gif_Final.gif';

import satImage from '../Images/CS463_SAT_Image.png';
// import satGif from '../Images/CS463_SAT_Gif_Final.gif';

import personalWebsiteImage from '../Images/Personal_Website_Image.png';
// import personalWebsiteGif from '../Images/Personal_Website_Gif.gif';

import practiceWebsiteImage from '../Images/Entertain_My_Life_01.png';
// import practicelWebsiteGif from '../Images/EML_Gif.gif';

import minesweeperImage from '../Images/Minesweeper_Image.png';
// import minesweeperGif from '../Images/Minesweeper_Gif.gif';

import projectBoostImage from '../Images/Project_Boost_Image.png';
// import projectBoostGif from '../Images/Project_Boost_Gif.gif';

import covidInPerspectiveImage from '../Images/CovidInPerspective.png'

import speakYourMindImage from '../Images/Speak-Your-Mind.png'

import twitterBotImage from '../Images/twitter_bot_image.png'

const ThirdPage = props => {

    return (
        <div className={styles.SectionThree}>
            <span className={styles.SectionThreeTitle}>Some of my Work</span>
            <div className={styles.ProjectCards}>
                <ProjectCard
                    title={"Covid In Perspective"}
                    about={"Using React along with multiple different API's I created a website with the purpose of displaying the link between Coronavirus cases and mask use."}
                    picture={covidInPerspectiveImage}
                    githubLink={"https://github.com/wdrew09/covid-in-perspective"}
                    link={"https://wdrew09.github.io/covid-in-perspective/"}
                />
                {/* <ProjectCard
                    title={"Space Shooter"}
                    about={"Using HTML and Javascript I built a small shoter game where projectiles come towards the player and they either must dodge them or shoot them."}
                    picture={shooterImage}
                    githubLink={"https://github.com/wdrew09/CS316_Shooter"}
                /> */}
                <ProjectCard
                    title={"Speak Your mind"}
                    about={"Using the MERN tech stack (MongoDB, Express.js, React, Node.js), along with Bootstrap and Redux, I was able to create a simple full-stack social media application. (Note: This site is using free hosting services from Heroku and therefore might take a few seconds to open.)"}
                    picture={speakYourMindImage}
                    githubLink={"https://github.com/wdrew09/speak-your-mind"}
                    link={"https://speak-your-mind.herokuapp.com"}
                />
                <ProjectCard
                    title={"SAT Solver"}
                    about={"Using three separate algorithms (DPLL, GSAT, and WalkSAT) I created a program using Java that finds optimal truth assignments for variables in thousands of Boolean formulas."}
                    picture={satImage}
                    githubLink={"https://github.com/wdrew09/SAT_Program"}
                />
                <ProjectCard
                    title={"Personal Website"}
                    about={"Built a website using React to display my personal portfolio (soon to be updated)."}
                    picture={personalWebsiteImage}
                    githubLink={"https://github.com/wdrew09/Personal-Website"}
                    // link={"https://andrewpwilson.com"}
                />
                {/* <ProjectCard
                    title={"Minesweeper - Java"}
                    about={"sjdbhjfainbhdkinksadaiewkn"}
                    picture={minesweeperImage}
                    githubLink={"https://github.com/wdrew09/Minesweeper"}
                /> */}
                <ProjectCard
                    title={"Entertain My Life"}
                    about={"I used React, along with some of its libraries such as React Router, and Firebase to create a website to display some cool and unique Amazon products. Website is no longer active."}
                    picture={practiceWebsiteImage}
                    githubLink={"https://github.com/wdrew09/entertainmylife"}
                />
                <ProjectCard
                    title={"Project Boost"}
                    about={"Using C# and the Unity engine I was able to build a small 2.5D game where the player must navigate their rocket to its destination."}
                    picture={projectBoostImage}
                    githubLink={"https://github.com/wdrew09/Project_Boost"}
                />
                <ProjectCard
                    title={"Storytelling Bot"}
                    about={"Using Node.js, AWS, and DeepAI's Text Generation program, I built a completely automated Twitter bot that produces and tweets stories from ideas sent via direct message from anyone."}
                    picture={twitterBotImage}
                    githubLink={"https://github.com/wdrew09/twitter-story-bot"}
                    link={"https://twitter.com/story__bot"}
                />

            </div>
        </div>
    )

}

export default ThirdPage