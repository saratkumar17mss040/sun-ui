import styles from './Home.module.css';
import { Logo } from '../../common';
import { useTitle, useScrollToTop } from '../../common';

export const Home = () => {
	useTitle('Sun-UI | Home');
	useScrollToTop();

	return (
		<div className="p-5 box-shadow border-1 h-100 w-100">
			<div className="hd-2 flex align-center m-h-4">
				<div className={styles.logo__wrapper}>
					<Logo />
				</div>
				<div className="m-h-2">Sun-UI</div>
			</div>
			<div className="text-bold font-2 m-h-4 m-v-2">
				A dead simple, CSS component library.
			</div>
			<div className="separator" />
			<div className="para-normal">
				Sun-UI allows you to design and build web Apps faster by providing a
				range of reusable components.
			</div>
			<div className="para-normal">
				To quickly get started, place the following code in the head section of
				your HTML page.
			</div>
			<div className="flex align-center m-v-8">
				<embed
					className="w-100 h-4"
					src="https://carbon.now.sh/embed/gjPnV3sf4vxqRT4RdutF"
				/>
			</div>
			<div className="para-normal">Made with code💻by Sarathkumar.</div>
			<div className="para-normal">Happy coding!</div>
			<div className="m-v-2 m-h-4 font-semibold">References</div>
			<ol className="m-h-6 p-h-4">
				<li>SVG Icons :flaticon and fontawesome</li>
				<li>Demo images: picsum.photos</li>
				<li>Avatars : from twitter profiles</li>
			</ol>
		</div>
	);
};
