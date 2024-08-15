/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from '../button/button';
import { useMediaQuery } from '@mui/material';

import Logo from '../../images/logo.svg';
import upArrow from '../../images/icon-arrow-up.svg';
import downArrow from '../../images/icon-arrow-down.svg';
import todo from '../../images/icon-todo.svg';
import planning from '../../images/icon-planning.svg';
import reminder from '../../images/icon-reminders.svg';
import calendar from '../../images/icon-calendar.svg';
import menu from '../../images/icon-menu.svg';

import styles from './navbar.module.css';

export default function Navbar({setShowSideMenu}) {
    const [showFeatures, setShowFeatures] = useState(false);
    const [showCompany, setShowCompany] = useState(false);
    // const [showSideMenu, setShowSideMenu] = useState(false)


    const isMobile = useMediaQuery('(max-width:800px')

    // Toggle menu visibility
    const handleFeature = () => {
        // Close Company dropdown if it's open
        if (showCompany) {
            setShowCompany(false);
        }
        // Toggle Features dropdown
        setShowFeatures(prev => !prev);
    };

    const handleCompany = () => {
        // Close Features dropdown if it's open
        if (showFeatures) {
            setShowFeatures(false);
        }
        // Toggle Company dropdown
        setShowCompany(prev => !prev);
    };

    const toggleMenu = () => {
        setShowSideMenu(prev => !prev);
    }

    return (
        <div className={styles.navbar}>

            <img src={Logo} alt="Logo" className={styles.logo} />

            {
                isMobile? (
                    <img src={menu} alt="menu" onClick={toggleMenu} className={styles.menuButton}/>
                ):(
                    <div className={styles.menu}>
                        <ul className={styles.navbarItems}>
                            <li onClick={handleFeature}>
                                <span>Features</span>
                                <img 
                                    src={showFeatures ? upArrow : downArrow} 
                                    alt={showFeatures ? "Collapse" : "Expand"} 
                                    className={styles.arrow}
                                />
                                {showFeatures && (
                                    <div className={styles.dropdown}>
                                        <ul>
                                            <li><img src={todo} alt='todo'/>Todo List</li>
                                            <li><img src={calendar} alt='calendar'/>Calendar</li>
                                            <li><img src={reminder} alt='reminder'/>Reminders</li>
                                            <li><img src={planning} alt='planning'/>Planning</li>
                                        </ul>  
                                    </div>

                                )}
                            </li>
                            <li onClick={handleCompany}>
                                <span>Company</span>
                                <img 
                                    src={showCompany ? upArrow : downArrow} 
                                    alt={showCompany ? "Collapse" : "Expand"} 
                                    className={styles.arrow}
                                />
                                {showCompany && (
                                    <div className={styles.dropdown}>
                                        <ul>
                                            <li>History</li>
                                            <li>Our Team</li>
                                            <li>Blog</li>
                                        </ul>
                                    </div>

                                )}
                            </li>
                            <li>Careers</li>
                            <li>About</li>
                        </ul>
                        <div className={styles.buttons}>
                            <Button className="noBorder" text="Login" />
                            <Button className="border" text="Register" />
                        </div>
                    </div>
                )
            }

            
        </div>
    );
}
