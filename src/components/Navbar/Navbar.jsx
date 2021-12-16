import styles from './Navbar.module.css';
import { SunLogo } from './SunLogo';
import { LinkedInLogo } from './LinkedInLogo';
import { TwitterLogo } from './TwitterLogo';
import { GithubLogo } from './GithubLogo';
import { useEffect } from 'react';

export const Navbar = ({ setShowSideBar, showSideBar }) => {

	useEffect(() => {
		setShowSideBar(true);
		setTimeout(() => {
			setShowSideBar(false);
		}, 1000);
	}, []);

	return (
		<nav className={`${styles.container} bg-color-gray-3`}>
			<div className="flex align-center">
				<div
					id="logo"
					className={`${styles.logo}`}
					onClick={() => setShowSideBar((prev) => !prev)}
				>
					<SunLogo showSideBar={showSideBar} />
				</div>
				<header className="color-gray-1 hd-2 m-h-2 m-l-4">Sun-UI</header>
			</div>

			<div className="flex m-h-2 space-around align-center p-2">
				<div
					className="p-h-2 flex align-center cur-point"
					onClick={() => {
						window.open('', '_blank');
					}}
				>
					<GithubLogo />
				</div>
				<div
					className="p-h-2 flex align-center cur-point"
					onClick={() => window.open('', '_blank')}
				>
					<TwitterLogo />
				</div>
				<div
					className="p-h-2 flex align-center cur-point"
					onClick={() => window.open('', '_blank')}
				>
					<LinkedInLogo />
				</div>
			</div>
		</nav>
	);
};
