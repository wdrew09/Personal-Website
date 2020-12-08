import React, { useState } from 'react';
import styles from './FavoritesCard.module.css';

const FavoritesCard = props => {
    const {
        title,
        picture,
        gif,
        link
    } = props

    const [isShown, setIsShown] = useState(false);

    let gifRepeater = gif + "?a=" + Math.random();


    return (
        <a href={link} target="_blank" rel="noreferrer" style={{textDecoration: "none", margin: "50px"}}>
            <button
                className={styles.Main}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                style={{ backgroundImage: isShown ? `url(${gifRepeater})` : `url(${picture})`}}
            >
                
            </button>
            <span className={styles.Title}>{title}</span>
        </a>
    )
}

export default FavoritesCard