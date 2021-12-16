import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { useRef } from 'react';
import { useOnClickOutside } from './useOnClickOutside';

export const Sidebar = ({ setShowSideBar, showSideBar }) => {
	const ref = useRef();
	useOnClickOutside(ref, () => setShowSideBar(false));

	return (
		<div
			ref={ref}
			className={`${styles.container} box-shadow ${
				showSideBar ? styles.side__show : ''
			}`}
		>
			<ul className={`${styles.ul} list`}>
				<NavLink
					className={(isActive) => {
						console.log(isActive);
						return (
							`${styles.side}` + (!isActive ? '' : `${styles.link__active}`)
						);
					}}
					to="/home"
					onClick={() => setShowSideBar(false)}
				>
					Getting Started
				</NavLink>
				<NavLink
					className={(isActive) => {
						console.log(isActive);
						return (
							`${styles.side}` + (!isActive ? '' : `${styles.link__active}`)
						);
					}}
					to="/avatar"
					onClick={() => setShowSideBar(false)}
				>
					AVATAR
				</NavLink>

				<NavLink
					className={styles.side}
					to="/badge"
					onClick={() => setShowSideBar(false)}
				>
					BADGE
				</NavLink>

				<NavLink
					className={styles.side}
					to="/banners"
					onClick={() => setShowSideBar(false)}
				>
					BANNERS
				</NavLink>

				<NavLink
					className={styles.side}
					to="/button"
					onClick={() => setShowSideBar(false)}
				>
					BUTTON
				</NavLink>

				<NavLink
					className={styles.side}
					to="/cards"
					onClick={() => setShowSideBar(false)}
				>
					CARDS
				</NavLink>

				<NavLink
					className={styles.side}
					to="/image"
					onClick={() => setShowSideBar(false)}
				>
					IMAGE
				</NavLink>

				<NavLink
					className={styles.side}
					to="/input"
					onClick={() => setShowSideBar(false)}
				>
					INPUT
				</NavLink>

				<NavLink
					className={styles.side}
					to="/list"
					onClick={() => setShowSideBar(false)}
				>
					LIST
				</NavLink>

				<NavLink
					className={styles.side}
					to="/modal"
					onClick={() => setShowSideBar(false)}
				>
					MODAL
				</NavLink>

				<NavLink
					className={styles.side}
					to="/navigation"
					onClick={() => setShowSideBar(false)}
				>
					NAVIGATION
				</NavLink>

				<NavLink
					className={styles.side}
					to="/text-utils"
					onClick={() => setShowSideBar(false)}
				>
					TEXT UTILS
				</NavLink>

				<NavLink
					className={styles.side}
					to="/toast"
					onClick={() => setShowSideBar(false)}
				>
					TOAST
				</NavLink>
			</ul>
		</div>
	);
};
