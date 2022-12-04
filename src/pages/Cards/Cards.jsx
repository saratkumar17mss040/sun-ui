import { useScrollToTop, useTitle } from '../../common';

export const Cards = () => {
	useTitle('Sun-UI | Cards');
	useScrollToTop();
	return (
		<div className="p-5 box-shadow border-1 h-100 w-100">
			<div className="hd-2">Cards</div>
			<div className="separator" />
			<div className="para-normal">
				A card is a piece of design that separates itself from the rest of the
				page, giving the user a hint to focus on it.
			</div>
			<div className="hd-3">Vertical cards</div>
			<div className="flex justify-center m-4">
				<div className="preview flex space-even wrap w-100">
					<div className="border-1 p-4 w-3 h-5 m-2 box-shadow">
						This is a vertical card (small).
					</div>

					<div className="border-1 p-4 w-4 h-6 m-2 box-shadow">
						This is a vertical card (mid).
					</div>
				</div>
			</div>

			<div className="flex justify-center m-v-9">
				<embed
					className="w-100 h-7"
					src="https://carbon.now.sh/embed/95prTY0r6RaVHouW0dXX"
				/>
			</div>

			<div className="separator m-8" />
			<div className="hd-3">Horizontal cards</div>
			<div className="flex justify-center m-4">
				<div className="preview flex space-even wrap w-100">
					<div className="border-1 p-4 w-5 h-3 m-2 box-shadow">
						This is a horizontal card (small).
					</div>
					<div className="border-1 p-4 w-6 h-4 m-2 box-shadow">
						This is a horizontal card (mid).
					</div>
				</div>
			</div>

			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-7"
					src="https://carbon.now.sh/embed/IGRfFiGAg18N0chMjMc5"
				/>
			</div>

			<div className="separator m-8" />
			<div className="hd-3">Badge on cards</div>
			<div className="flex justify-center m-4">
				<div className="preview flex space-even wrap w-100">
					<div className="border-1 p-4 w-3 h-5 m-2 box-shadow pos-rel">
						This is a vertical card (small).
						<div className="pos-abs top-right m-2">
							<i className="fas fa-heart color-red-2"></i>
						</div>
					</div>
					<div className="border-1 p-4 w-5 h-3 m-2 box-shadow pos-rel">
						This is a horizontal card (small).
						<div className="pos-abs top-right m-2">
							<button className="btn bg-inherit">
								<i className="far fa-times-circle font-4"></i>
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-11"
					src="https://carbon.now.sh/embed/mUelE1BaiUn6e8CIYtNV"
				/>
			</div>
		</div>
	);
};
