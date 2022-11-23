import React from 'react'
import styles from './Header.module.scss'
import { Link, useLocation } from 'react-router-dom'


export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeftSide}></div>
      <div className={styles.headermidleSide}>
        <a letter-spacing="4" href="/" className={styles.logoLink}>лайф кодинг</a>
      </div>
      <div className={styles.headerRightSide}></div>
    </header>
  )
}