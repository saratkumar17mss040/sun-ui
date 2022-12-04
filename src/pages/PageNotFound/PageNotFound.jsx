import { useScrollToTop, useTitle } from '../../common';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
	useTitle('Sun-UI | Error 404');
	useScrollToTop();
	return (
		<div className="p-5 box-shadow border-1 h-100 w-100">
			<div className="heading-1 text-center m-v-8">Page Not Found</div>
			<div className="heading-2 text-center">
				<Link to="/home" className="m-v-8">
					Go to home page
				</Link>
			</div>
		</div>
	);
};
