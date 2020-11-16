import React, { useState, useEffect } from 'react';
import profileImage from './Images/profileImage.png'
import UKLogo from './Images/uklogo.png'
import EZTurnLogo from './Images/ezturnlogo.png'
import styles from './App.module.css';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import resume from './Images/Resume_2020.docx';

import shooterImage from './Images/CS316_Shooter_Image.png';
import shooterGif from './Images/CS316_Shooter_Gif_Final.gif';

import satImage from './Images/CS463_SAT_Image.png';
import satGif from './Images/CS463_SAT_Gif_Final.gif';

import personalWebsiteImage from './Images/Personal_Website_Image.png';
import personalWebsiteGif from './Images/Personal_Website_Gif.gif';

import practiceWebsiteImage from './Images/Entertain_My_Life_01.png';
import practicelWebsiteGif from './Images/EML_Gif.gif';

import minesweeperImage from './Images/Minesweeper_Image.png';
import minesweeperGif from './Images/Minesweeper_Gif.gif';

import projectBoostImage from './Images/Project_Boost_Image.png';
import projectBoostGif from './Images/Project_Boost_Gif.gif';

import FavoritesCard from './FavoritesCard';

const App = props => {
  const [textOne, setTextOne] = useState("")
  const [textTwo, setTextTwo] = useState("")


  useEffect(() => {
    const timer = setTimeout(() => {
      setTextOne("Hi,")
    }, 800);

    setTimeout(() => {
      setTextTwo("  I'm Andrew")
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  }



  return (
    <div className="App">
      <div className={styles.SectionOne}>
        <span className={styles.TopButtons}>
          <a href="https://www.linkedin.com/in/andrew-wilson-98968a1bb" target="_blank">
            <button className={styles.TopButtonsButtonShow}><FontAwesomeIcon color="#373741" icon={faLinkedin} size='3x' /></button>
          </a>
          <a href="https://github.com/wdrew09" target="_blank">
            <button className={styles.TopButtonsButtonShow}><FontAwesomeIcon color="#373741" icon={faGithub} size='3x' /></button>
          </a>
          <a href="mailto:awi279@uky.edu">
            <button className={styles.HireMeButton}>Contact Me</button>
          </a>
        </span>
        <div className={styles.MainImageText}>
          <span className={textOne.length > 0 ? styles.fadeInOne : styles.fadeOutOne}>{textOne}</span>
          <span className={textTwo.length > 0 ? styles.fadeInOne : styles.fadeOutOne}>{textTwo}</span>
        </div>
        <button className={styles.DownButton} style={{ backgroundColor: 'transparent', borderColor: "transparent" }} onClick={() => scrollDown()}><FontAwesomeIcon color="white" icon={faArrowCircleDown} size='3x' /></button>
      </div>

      <div className={styles.SectionTwo}>
        <div style={{ height: '50px' }}></div>
        <div className={styles.MyInfo}>


          <div className={styles.MyInfoSection}>
            <img src={profileImage} className={styles.ProfileImage} alt="image" resizeMode="cover" />
            <div style={{ marginLeft: 0, alignSelf: "center", display: "grid", gridTemplateRows: "50% 50%" }}>
              <span className={styles.MyInfoName}>Andrew Wilson</span>
              <span className={styles.MyInfoStatus}>Software Engineer in Lexington, KY</span>
              <a href={resume} download style={{ width: "200px" }}><button className={styles.DownloadResumeButton}>Download Resume</button></a>

            </div>
          </div>

          <div className={styles.MyInfoSection}>
            <span className={styles.MyInfoSectionTextTitle} style={{ marginTop: "0px" }}>About Me</span>
            <span className={styles.MyInfoSectionText}>
              I will be graduating from the University of Kentucky in December 2020 with a degree in Computer Science. I love creating new things
              and stretching the limits of what I'm capable of. I'm excited about what I do and look forward to facing new challenges every single day.
            </span>
          </div>


          <div className={styles.MyInfoSection}>
            <span className={styles.MyInfoSectionTextTitle} style={{ marginTop: "0px" }}>Skills</span>
            <div>
              <span className={styles.MyInfoSectionText} style={{ fontWeight: "600" }}>Programming/Scripting Languages: </span>
              <br />
              <span className={styles.MyInfoSectionText}> JavaScript, HTML, CSS, Java, Swift, C++, C, C#, SQL</span>
              <br />
              <span className={styles.MyInfoSectionText} style={{ fontWeight: "600" }}>Frameworks and tools: </span>
              <br />
              <span className={styles.MyInfoSectionText}> React, React Native, Redux, Blazor, Bootstrap, .NET, Git</span>
            </div>
          </div>





          <div className={styles.MyInfoSection} style={{ marginTop: "50px" }}>
            <div className={styles.MyInfoSectionTimelineLeft}>
              <div className={styles.MyInfoSectionTimelineLeftLeftSide}>
                <img src={UKLogo} alt="image" resizeMode="cover" />
                <span className={styles.MyInfoSectionTextTitle}>University of Kentucky     </span>
                <span className={styles.MyInfoSectionText}>B.S. Computer Science</span>
                <span className={styles.MyInfoSectionText}>Fall 2016 - December 2020</span>

              </div>
            </div>
            <span className={styles.MyInfoSectionText}>
              During my time at U.K, I was a member of the club tennis team and took many classes related to computer science and other
              engineering fields. Some of my favorite of these classes included Introduction to Artificial Intelligence, Web Programming, and
              Mobile App Development.
            </span>
          </div>


          <div className={styles.MyInfoSection}>
            <div className={styles.MyInfoSectionTimelineLeft}>
              <div className={styles.MyInfoSectionTimelineLeftLeftSide}>
                <img src={EZTurnLogo} alt="image" resizeMode="cover" />
                <span className={styles.MyInfoSectionTextTitle}>EZ-Turn</span>
                <span className={styles.MyInfoSectionText}>Software Developer Intern</span>
                <span className={styles.MyInfoSectionText}>January 2019 - May 2020</span>

              </div>
            </div>
            <span className={styles.MyInfoSectionText}>
              While at EZ-Turn, I was able to work directly under the CTO. My work included working with Swift on the development of the
              company's iOS app, helping with the design of the app as well as the website, and my main work consisted of using ReactJS to develop the front-end.
            </span>
          </div>



        </div>
      </div>

      <div className={styles.SectionThree}>
        <span className={styles.SectionThreeTitle}>Some of my Personal Favorites</span>
        <div className={styles.FavoritesCards}>

          <FavoritesCard
            title={"Space Shooter - js/HTML"}
            picture={shooterImage}
            gif={shooterGif}
            link={"https://github.com/wdrew09/CS316_Shooter"}
          />
          <FavoritesCard
            title={"SAT Solver - Java"}
            picture={satImage}
            gif={satGif}
            link={"https://github.com/wdrew09/SAT_Program"}
          />
          <FavoritesCard
            title={"Personal Website - React"}
            picture={personalWebsiteImage}
            gif={personalWebsiteGif}
            link={"https://github.com/wdrew09/Personal-Website"}
          />
          <FavoritesCard
            title={"Minesweeper - Java"}
            picture={minesweeperImage}
            gif={minesweeperGif}
            link={"https://github.com/wdrew09/Minesweeper"}
          />
          <FavoritesCard
            title={"Entertain My Life - React"}
            picture={practiceWebsiteImage}
            gif={practicelWebsiteGif}
            link={"https://github.com/wdrew09/entertainmylife"}
          />
          <FavoritesCard
            title={"Project Boost - C#"}
            picture={projectBoostImage}
            gif={projectBoostGif}
            link={"https://github.com/wdrew09/Project_Boost"}
          />
        </div>
      </div>
      {/* <div className={styles.SectionFour}>
        <span className={styles.SectionThreeTitle} style={{color: "#373741"}}>Let's get in touch</span>
        <div>
          
        </div>
      </div> */}
      <div className={styles.Footer}>
        <span>Created with <em>React</em> &#8226; Hosted on <em>Heroku</em> &#8226; Designed by <em>Andrew Wilson</em></span>
      </div>


    </div>
  );
}

export default App;
