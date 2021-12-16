import styles from './Navbar.module.css';
import { useEffect, useRef } from 'react';
import { Logo } from '../../common/Logo';

export const SunLogo = ({ showSideBar }) => {
	const transRef = useRef(null);

	useEffect(() => {
		if (showSideBar) {
			transRef.current.style.transform = 'rotate(360deg)';
		} else {
			transRef.current.style.transform = 'none';
		}
	}, [transRef, showSideBar]);

	return (
		<div
			id="logo-container"
			ref={transRef}
			className={showSideBar ? styles.logo__animate : styles.logo}
		>
			<Logo />
		</div>
	);
};
