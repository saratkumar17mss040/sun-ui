import { useState } from 'react';
import { useScrollToTop, useTitle } from '../../common';

export const Button = () => {
	const [showFloatingBtn, setShowFloatingBtn] = useState(false);
	useTitle('Sun-UI | Button');
	useScrollToTop();

	return (
		<div className="p-5 box-shadow border-1 h-100 w-100">
			<div className="hd-2">Button</div>
			<div className="separator" />
			<div className="para-normal">
				The button is a simple yet elegant clickable interface to let the user
				interact with it.
			</div>
			<div className="hd-3">Primary button</div>
			<div className="flex justify-center">
				<div className="preview flex justify-center space-even wrap w-100 m-4 align-center">
					<button className="btn btn-small bg-color-gray-2 color-black p-h-5 text-bold font-4 border-round-small m-2">
						Sort
					</button>
					<button className="btn btn-mid bg-color-red-2 color-white p-h-4 text-bold font-4 border-round-small m-2">
						Add to cart
					</button>
					<button className="btn btn-mid bg-color-black color-white p-h-6 text-bold font-4 m-2">
						SIGN UP
					</button>
				</div>
			</div>
			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-10"
					src="https://carbon.now.sh/embed/8i8yQXOQBFV3B2cxl8b7"
				/>
			</div>
			<div className="separator m-h-4 m-v-6" />
			<div className="hd-3">Link</div>
			<div className="flex justify-center">
				<div className="preview flex justify-center space-even w-6 m-4">
					<a className="link p-1">See more</a>
					<a className="link p-1">Apply coupon</a>
				</div>
			</div>

			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-6"
					src="https://carbon.now.sh/embed/yTXeHVhWKlkizb3cjd3C"
				/>
			</div>
			<div className="separator m-h-4 m-v-6" />
			<div className="hd-3">Icon button</div>
			<div className="flex justify-center">
				<div className="preview flex justify-center space-even w-5 m-4">
					<button className="btn bg-inherit p-1">
						<div className="far fa-envelope font-8"></div>
					</button>
					<button className="btn bg-inherit p-1">
						<div className="fas fa-shopping-cart font-8"></div>
					</button>
				</div>
			</div>
			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-7"
					src="https://carbon.now.sh/embed/obqXvCWxDpO1hRf9ibRU"
				/>
			</div>
			<div className="separator m-h-4 m-v-6" />
			<div className="hd-3 p-v-4">Floating action button</div>
			<div className="flex justify-center">
				<button
					className="btn btn-mid bg-color-gray-2 color-black p-h-5 text-bold font-4 border-round-small m-2"
					onClick={() => setShowFloatingBtn((prev) => !prev)}
				>
					{showFloatingBtn ? 'Hide' : 'Show'}
				</button>
				{showFloatingBtn && (
					<button className="btn btn-mid bg-color-red-2 color-white p-h-5 text-bold font-4 border-round-small m-2 pos-fix bottom-right m-8">
						Floating
					</button>
				)}
			</div>
			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-6"
					src="https://carbon.now.sh/embed/bXUJUm24FlkIZlBbrig9"
				/>
			</div>
		</div>
	);
};
