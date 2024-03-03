import React from 'react';
import styles from './header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            {/* Попробовал добавить свойство по-другому, внутри файла jsx */}
            <nav className={`${styles.headerContainer} container`}>
                <p className={styles.brandText}>
                    <i className="fi fi-sr-graduation-cap" />
                    {' '}
                    makaroveo
                </p>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <a href="/" className={styles.navLink}>
                            Главная
                        </a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="/about-lessons" className={styles.navLink}>
                            О занятиях
                        </a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="/contacts" className={styles.navLink}>
                            Контакты
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
