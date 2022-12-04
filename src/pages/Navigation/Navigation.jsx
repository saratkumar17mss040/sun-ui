import { useScrollToTop, useTitle } from '../../common';

export const Navigation = () => {
	useTitle('Sun-UI | Navigation');
	useScrollToTop();
	return (
		<div className="p-h-5 box-shadow border-1 h-100 w-100">
			<div className="hd-2">Navigation</div>
			<div className="separator" />
			<div className="para-normal">
				The navigation can be used in a nav bar.
			</div>
			<div className="hd-3">Desktop</div>
			<div className="w-100 m-v-5 p-h-1">
				<nav className="w-100 bg-color-black h-1-2 color-white flex space-around align-center">
					<div className="link p-2 outline-white-dotted" tabIndex="1">
						HOME
					</div>
					<div className="link p-2 outline-white-dotted" tabIndex="2">
						ABOUT
					</div>
					<div className="link p-2 outline-white-dotted" tabIndex="3">
						MORE
					</div>
					<div className="link p-2 outline-white-dotted" tabIndex="4">
						CONTACT
					</div>
				</nav>
			</div>

			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-9"
					src="https://carbon.now.sh/embed/tPoN9Z3M8c2NYqFONTqj"
				/>
			</div>

			<div className="separator m-h-4 m-v-6"></div>
			<div className="hd-3">Mobile</div>
			<div className="w-100 m-v-5 p-h-1">
				<nav className="max-w-7 bg-color-black h-1-2 color-white flex align-center pos-rel">
					<div
						className="link p-2 outline-white-dotted m-h-4 toggler"
						tabIndex="0"
					>
						<i className="fas fa-bars"></i>
					</div>
					<div className="w-100 text-center">BRANDNAME</div>
					<div className="w-100 bg-color-black color-white h-1 align-center space-even toggle pos-abs m-v-3">
						<div className="link p-2 outline-white-dotted" tabIndex="1">
							HOME
						</div>
						<div className="link p-2 outline-white-dotted" tabIndex="2">
							ABOUT
						</div>
						<div className="link p-2 outline-white-dotted" tabIndex="3">
							MORE
						</div>
						<div className="link p-2 outline-white-dotted" tabIndex="4">
							CONTACT
						</div>
					</div>
				</nav>
			</div>

			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-12"
					src="https://carbon.now.sh/embed/0tejYdwcXhWZidXAWf1I"
				/>
			</div>

			<div className="separator m-h-4 m-v-6"></div>
			<div className="hd-3">Dropdown options</div>
			<div className="preview m-6">
				<div className="dropdown pos-rel">
					<button className="btn bg-color-gray-1 color-black font-3 text-bold p-2 border-round-small">
						Dropdown
					</button>
					<div className="dropdown-content">
						<a href="#" className="link p-2">
							Link 1
						</a>
						<a href="#" className="link p-2">
							Link 2
						</a>
						<a href="#" className="link p-2">
							Link 3
						</a>
					</div>
				</div>
			</div>
			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-8"
					src="https://carbon.now.sh/embed/tgcMBqlcwVVDl8AXMXi0"
				/>
			</div>
		</div>
	);
};
