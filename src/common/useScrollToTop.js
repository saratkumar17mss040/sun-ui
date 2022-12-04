import { useEffect } from 'react';

export const useScrollToTop = () => {
	useEffect(() => {
		console.log('scroll');
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);
};
