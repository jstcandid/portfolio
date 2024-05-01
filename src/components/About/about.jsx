import React from 'react';
import styles from './about.module.css';
import { getImageUrl } from '../../utils';

export const About = function () {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl(`about/aboutImage.png`)}
          alt='About Image of Me'
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/arrow.png')} alt='Arrow Image' />
            <div className={styles.aboutItemText}>
              <h5>Frontend Developer</h5>
              <p>
                I'm a front-end developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/server.png')} alt='Server Image' />
            <div className={styles.aboutItemText}>
              <h5>Backend Developer</h5>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/ui.png')} alt='UI Image' />
            <div className={styles.aboutItemText}>
              <h5>UI Designer</h5>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
