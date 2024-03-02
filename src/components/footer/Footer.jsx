import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <nav className={styles.footerContainer}>
                <p className={styles.createdBy}>© created by Makarov Semen</p>
                <ul className={styles.footerList}>
                    <li className={styles.footerItem}>
                        <a href="https://vk.com/makaroveo" className={styles.footerLink}>
                            <i className="fi fi-brands-vk"></i>
                        </a>
                    </li>

                    <li className={styles.footerItem}>
                        <a href="https://t.me/makaroveo" className={styles.footerLink}>
                            <i className="fi fi-brands-telegram"></i>
                        </a>
                    </li>

                    <li className={styles.footerItem}>
                        <a href="https://github.com/semonmakarov" className={styles.footerLink}>
                            <i className="fi fi-brands-github"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
};

export default Footer;
