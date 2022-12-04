import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { useRef } from 'react';
import { useOnClickOutside } from './useOnClickOutside';

export const Sidebar = ({ setShowSideBar, showSideBar }) => {
	const ref = useRef();
	useOnClickOutside(ref, () => setShowSideBar(false));

	const applyActiveLinkStyleIfActive = ({ isActive }) => {
		// Active state is something that is provided by react-router-dom
		return `${styles.side} ` + (isActive ? `${styles.link__active}` : '');
	};

	return (
		<div
			ref={ref}
			className={`${styles.container} box-shadow ${
				showSideBar ? styles.side__show : ''
			}`}
		>
			<ul className={`${styles.ul} list`}>
				<NavLink
					className={applyActiveLinkStyleIfActive}
					to="/home"
					onClick={() => setShowSideBar(false)}
				>
					Getting Started
				</NavLink>
				<NavLink
					className={applyActiveLinkStyleIfActive}
					to="/avatar"
					onClick={() => setShowSideBar(false)}
				>
					AVATAR
				</NavLink>

				<NavLink
					className={applyActiveLinkStyleIfActive}
					to="/badge"
					onClick={() => setShowSideBar(false)}
				>
					BADGE
				</NavLink>

				<NavLink
					className={applyActiveLinkStyleIfActive}
					to="/banners"
					onClick={() => setShowSideBar(false)}
				>
					BANNERS
				</NavLink>

				<NavLink
					className={applyActiveLinkStyleIfActive}
					to="/button"
					onClick={() => setShowSideBar(false)}
				>
					BUTTON
				</NavLink>

				<NavLink
					className={applyActiveLinkStyleIfActive}
					to="/cards"
					onClick={() => setShowSideBar(false)}
				>
					CARDS
				</NavLink>

				<NavLink
					className={applyActiveLinkStyleIfActive}
					to="/image"
					onClick={() => setShowSideBar(false)}
				>
					IMAGE
				</NavLink>

				<NavLink
					className={applyActiveLinkStyleIfActive}
					to="/input"
					onClick={() => setShowSideBar(false)}
				>
					INPUT
				</NavLink>

				<NavLink
					className={applyActiveLinkStyleIfActive}
					to="/list"
					onClick={() => setShowSideBar(false)}
				>
					LIST
				</NavLink>

				<NavLink
					className={applyActiveLinkStyleIfActive}
					to="/modal"
					onClick={() => setShowSideBar(false)}
				>
					MODAL
				</NavLink>

				<NavLink
					className={applyActiveLinkStyleIfActive}
					to="/navigation"
					onClick={() => setShowSideBar(false)}
				>
					NAVIGATION
				</NavLink>

				<NavLink
					className={applyActiveLinkStyleIfActive}
					to="/text-utils"
					onClick={() => setShowSideBar(false)}
				>
					TEXT UTILS
				</NavLink>

				<NavLink
					className={applyActiveLinkStyleIfActive}
					to="/toast"
					onClick={() => setShowSideBar(false)}
				>
					TOAST
				</NavLink>
			</ul>
		</div>
	);
};
