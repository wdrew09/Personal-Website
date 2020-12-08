import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';

const Footer = props => {
    return (
        <div className={styles.Footer}>
            <span>Created with <em>React</em> &#8226; Hosted on <em>Heroku</em> &#8226; Designed by <em>Andrew Wilson</em></span>
        </div>
    )
}

export default Footer