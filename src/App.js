import React, { useState, useEffect } from 'react';
import mainImage from './Images/tripImage3.JPG'
import styles from './App.module.css';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = props => {
  let showOne = false
  let showTwo = false
  const [textOne, setTextOne] = useState("")
  const [textTwo, setTextTwo] = useState("")
  const [textThree, setTextThree] = useState("")


  useEffect(() => {
    const timer = setTimeout(() => {
      setTextOne("Hi,")
    }, 800);

    setTimeout(() => {
      setTextTwo("  I'm Andrew")
    }, 1500);

    setTimeout(() => {
      setTextThree("I'm a University of Kentucky Fall 2020 graduate, I have 18 months of front-end industry experience, and I'm looking to start my career in software engineering")
    }, 3000);
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
              <button className={styles.TopButtonsButtonShow} style={{ marginLeft: '40px', height: '50px', backgroundColor: 'transparent', borderColor: "transparent" }}><FontAwesomeIcon color="white" icon={faLinkedin} size='3x' /></button>
            </a>
            <a href="https://github.com/wdrew09" target="_blank">
              <button className={styles.TopButtonsButtonShow} style={{ marginLeft: '120px', height: '50px', backgroundColor: 'transparent', borderColor: "transparent" }}><FontAwesomeIcon color="white" icon={faGithub} size='3x' /></button>
            </a>
          </span>
          <div className={styles.MainImageText}>
            <span className={textOne.length > 0 ? styles.fadeInOne : styles.fadeOutOne}>{textOne}</span>
            <span className={textTwo.length > 0 ? styles.fadeInOne : styles.fadeOutOne}>{textTwo}</span>
          </div>
          <button className={styles.DownButton} style={{ backgroundColor: 'transparent', borderColor: "transparent" }} onClick={() => scrollDown()}><FontAwesomeIcon color="white" icon={faArrowCircleDown} size='3x' /></button>
        </div>

        <div className={styles.SectionTwo}>
          <span>hellodfg</span>
        </div>

        {/* <img src={"/profileImage.jpg"} className={styles.ProfileImage} alt="image" resizeMode="cover"/> */}
        
    </div>
  );
}

export default App;
