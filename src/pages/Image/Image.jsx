import { useScrollToTop, useTitle } from '../../common';

export const Image = () => {
	useTitle('Sun-UI | Image');
	useScrollToTop();
	return (
		<div className="p-5 box-shadow border-1 h-100 w-100">
			<div className="hd-2">Image</div>
			<div className="separator" />
			<div className="para-normal">
				An image is the primary focus for a website and it should be responsive.
			</div>
			<div className="hd-3">Responsive</div>
			<div className="flex justify-center">
				<div>
					<img
						className="img-responsive"
						src="https://picsum.photos/300/200"
						alt="img-responsive"
					/>
				</div>
			</div>

			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-5"
					src="https://carbon.now.sh/embed/PAteZDgVYRp6DCdwjLH0"
				/>
			</div>

			<div className="separator m-h-4 m-v-6"></div>
			<div className="hd-3">Rounded corners</div>
			<div className="flex justify-center">
				<div>
					<img
						className="img-responsive border-round-small"
						src="https://picsum.photos/300/200"
						alt="img-responsive"
					/>
				</div>
			</div>
			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-5"
					src="https://carbon.now.sh/embed/G7RGOXdaTzYhFyZ0n1xF"
				/>
			</div>
		</div>
	);
};
