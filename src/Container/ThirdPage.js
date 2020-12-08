import React, { useState, useEffect } from 'react';
import styles from './ThirdPage.module.css';

import FavoritesCard from '../Components/FavoritesCard';

import shooterImage from '../Images/CS316_Shooter_Image.png';
import shooterGif from '../Images/CS316_Shooter_Gif_Final.gif';

import satImage from '../Images/CS463_SAT_Image.png';
import satGif from '../Images/CS463_SAT_Gif_Final.gif';

import personalWebsiteImage from '../Images/Personal_Website_Image.png';
import personalWebsiteGif from '../Images/Personal_Website_Gif.gif';

import practiceWebsiteImage from '../Images/Entertain_My_Life_01.png';
import practicelWebsiteGif from '../Images/EML_Gif.gif';

import minesweeperImage from '../Images/Minesweeper_Image.png';
import minesweeperGif from '../Images/Minesweeper_Gif.gif';

import projectBoostImage from '../Images/Project_Boost_Image.png';
import projectBoostGif from '../Images/Project_Boost_Gif.gif';

const ThirdPage = props => {

    return (
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
                    title={"Project Boost - C#/Unity"}
                    picture={projectBoostImage}
                    gif={projectBoostGif}
                    link={"https://github.com/wdrew09/Project_Boost"}
                />
            </div>
        </div>
    )

}

export default ThirdPage