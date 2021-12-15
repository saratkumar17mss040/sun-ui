import styles from './Navbar.module.css';
import { SunLogo } from './SunLogo';
import { LinkedInLogo } from './LinkedInLogo';
import { TwitterLogo } from './TwitterLogo';
import { useEffect } from 'react';

export const Navbar = ({ setShowSideBar, showSideBar }) => {

	useEffect(() => {
		setShowSideBar(true);
		setTimeout(() => {
			setShowSideBar(false);
		}, 1000);
    }, []);
    
    
    return <nav></nav>;
};

