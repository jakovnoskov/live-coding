import React from 'react';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>

        <div
          className={styles.footerLinkWrapper}
        >
          <a
            className={styles.footerLink}
            target="_blank"
            href="https://github.com/jakovnoskov">
            гитхаб
          </a>
        </div>
        <div className={styles.point}>•</div>
        <div
          className={styles.footerLinkWrapper}
        >
          <a className={styles.footerLink} href="mailto:jakovnoskov@hotmail.com">
            емейл
          </a>
        </div>
      </div>
    </footer>
  )
}