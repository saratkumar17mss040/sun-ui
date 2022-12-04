import { useScrollToTop, useTitle } from '../../common';

export const Toast = () => {
	useTitle('Sun-UI | Toast');
	useScrollToTop();
	return (
		<div className="p-5 box-shadow border-1 h-100 w-100">
			<div className="hd-2">Toast</div>
			<div className="separator" />
			<div className="para-normal">
				Toast message or snackbar is used to give some feedback to the user.
			</div>
			<div className="hd-3">Success toast</div>
			<div className="m-4">
				<div className="toast bg-color-gray-2 color-5 p-v-3 p-h-4 border-round-small w-6 text-bold border-round text-center flex space-between">
					<div>Successfully add to the cart!</div>
					<div>
						<button className="btn bg-inherit">
							<i className="far fa-times-circle font-4 color-5"></i>
						</button>
					</div>
				</div>
			</div>

			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-8"
					src="https://carbon.now.sh/embed/u0aF8Ho53xgmaJKkhoS6"
				/>
			</div>

			<div className="separator m-v-8 m-h-4" />
			<div className="hd-3">Error toast</div>
			<div className="m-4">
				<div className="toast bg-color-gray-2 color-3 p-v-3 p-h-4 border-round-small w-5 text-bold border-round text-center flex space-between">
					<div>Some error occurred!</div>
					<div>
						<button className="btn  bg-inherit">
							<i className="far fa-times-circle font-4 color-3"></i>
						</button>
					</div>
				</div>
			</div>

			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-8"
					src="https://carbon.now.sh/embed/rBMjK76tsjXgSvVfQ4kj"
				/>
			</div>
		</div>
	);
};
