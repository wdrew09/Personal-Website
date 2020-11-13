import React, { useState, useEffect } from 'react';
import mainImage from './Images/tripImage3.JPG'
import styles from './App.module.css';

const App = props => {
  let showOne = false
  let showTwo = false
  const [textOne, setTextOne] = useState("")
  const [textTwo, setTextTwo] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextOne("Hi,")
    }, 1000);
    setTimeout(() => {
      setTextTwo("  I'm Andrew")
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // let textOneClasses = classNames({
  //   'styles.TextOne': true,
  //   'styles.fadeIn' : textOne.length > 0,
  //   'styles.fadeOut' : textOne.length == 0,
  // });



  return (
    <div className="App">
      <header className="App-header">
        <div className={styles.SectionOne}>
          {/* <img src={mainImage} className={styles.MainImage} alt="image" resizeMode="cover" /> */}
          <div className={styles.MainImageText}>
            <span className={textOne.length > 0 ? styles.fadeInOne : styles.fadeOutOne}>{textOne}</span>
            <span className={textTwo.length > 0 ? styles.fadeInTwo : styles.fadeOutOne}>{textTwo}</span>
          </div>
        </div>
        <div className={styles.SectionTwo}>
          <span>hellodfg</span>
        </div>

        {/* <img src={"/profileImage.jpg"} className={styles.ProfileImage} alt="image" resizeMode="cover"/> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
