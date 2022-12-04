import { useScrollToTop, useTitle } from '../../common';

export const Badge = () => {
	useTitle('Sun-UI | Badge');
	useScrollToTop();
	return (
		<div className="p-5 box-shadow border-1 h-100 w-100">
			<div className="hd-2">Badge</div>
			<div className="separator" />
			<div className="para-normal">
				A badge is a counter shown on icons like cart, notification and avatars.
				It is also used to show online and offline status of a person.
			</div>
			<div className="hd-3">Badge on icon</div>
			<div className="flex justify-center">
				<div className="preview flex justify-center space-even w-5 m-4">
					<div className="badge-wrapper">
						<div className="far fa-envelope font-8">
							<div className="badge badge-avatar-red color-white">2</div>
						</div>
					</div>

					<div className="badge-wrapper">
						<div className="fas fa-shopping-cart font-8">
							<div className="badge badge-avatar-red color-white">3</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-8"
					src="https://carbon.now.sh/embed/5xR14tNxpQNbG7Fypc10"
				/>
			</div>
			<div className="separator m-h-4 m-v-6"></div>
			<div className="hd-3">Badge on avatar</div>
			<div className="flex justify-center">
				<div className="preview flex justify-center space-even w-8 m-4">
					<div className="badge-wrapper">
						<img
							src="https://i.pravatar.cc/400"
							className="avatar-mid border-round m-3"
						/>
						<div className="badge-avatar badge-avatar-red"></div>
					</div>
					<div className="badge-wrapper">
						<img
							src="https://i.pravatar.cc/400"
							alt="Avatar"
							className="avatar-mid border-round m-3"
						/>
						<div className="badge-avatar badge-avatar-grey"></div>
					</div>
					<div className="badge-wrapper">
						<img
							src="https://i.pravatar.cc/400"
							alt="Avatar"
							className="avatar-mid border-round m-3"
						/>
						<div className="badge-avatar badge-avatar-green"></div>
					</div>
				</div>
			</div>
			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-13"
					src="https://carbon.now.sh/embed/uTPCzMoruJpGflrYygPS"
				/>
			</div>
		</div>
	);
};
