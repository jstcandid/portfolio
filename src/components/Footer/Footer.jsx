import React from 'react';
import styles from './Footer.module.css';
import { getImageUrl } from '../../utils';

export const Footer = function () {
  return (
    <section className={styles.container} id='contact'>
      <div className={styles.contactHeader}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.text}>Feel free to reach out!</p>
      </div>
      <ul className={styles.contacts}>
        <li className={styles.contact}>
          <img src={getImageUrl('footer/mail.png')} alt='email icon' />
          <a href='mailto:cnttakeit@gmail.com'>cnttakeit@gmail.com</a>
        </li>
        <li className={styles.contact}>
          <img src={getImageUrl('footer/linkedin.png')} alt='linkedIn icon' />
          <a href='https://www.linkedin.com/in/yanya-zanevskaya-a7639a202/'>
            linkedin.com/yanyazanevskaya
          </a>
        </li>
        <li className={styles.contact}>
          <img src={getImageUrl('footer/git.png')} alt='git icon' />
          <a href='https://github.com/jstcandid'>
            https://github.com/jstcandid
          </a>
        </li>
      </ul>
    </section>
  );
};
