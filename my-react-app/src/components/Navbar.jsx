import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos;

            setPrevScrollPos(currentScrollPos);
            setVisible(visible);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <nav className={`${styles.navbar} ${visible ? styles.navbarVisible : styles.navbarHidden}`}>
            <div className={styles.topNav}>
                <div className={styles.logo}>
                    <img src={logo} alt="COTOKITA Logo" className={styles.logoImage} />
                </div>
                <div className={styles.searchContainer}>
                    <input
                        className={styles.search}
                        placeholder="Pencarian resep, restoran, lowongan"
                    />
                    <button className={styles.searchButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                </div>
                <div className={styles.button_group}>
                    <button className={styles.masuk}>Masuk</button>
                    <button className={styles.daftar}>Daftar</button>
                </div>
            </div>
            <div className={styles.bottomNav}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}>Beranda</li>
                    <li className={styles.nav_item}>Resep Masakan</li>
                    <li className={styles.nav_item}>Restoran Mitra</li>
                    <li className={styles.nav_item}>Event Kuliner</li>
                    <li className={styles.nav_item}>Lowongan Kerja</li>
                    <li className={styles.nav_item}>Pelatihan</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;