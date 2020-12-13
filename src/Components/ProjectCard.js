import React from 'react';

import styles from './ProjectCard.module.css';

const ListViewItem = props => {
    const {
        title,
        about,
        picture,
        link,
        githubLink
    } = props

    return (
        <div className={styles.Main}>
            <img className={styles.Image} src={picture} alt={'Project Image'} />
            <div className={styles.CardContent}>
                <h2 className={styles.Title}>{title}</h2>
                <h4 className={styles.String}>{about}</h4>
                <hr className={styles.Bar} />

                <div className={styles.Links}>
                    {link ?
                        <span>
                            <a target="_blank" href={githubLink}><button>Github Link</button></a>
                            -
                            <a target="_blank" href={link}><button>Website Link</button></a>
                        </span>
                        :
                        <span><a target="_blank" href={githubLink}><button>Github Link</button></a></span>
                    }
                </div>
            </div>
        </div>
    )
}

export default ListViewItem