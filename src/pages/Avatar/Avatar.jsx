import { useScrollToTop, useTitle } from '../../common';

export const Avatar = () => {
	useTitle('Sun-UI | Avatar');
	useScrollToTop();
	return (
		<div className="p-5 box-shadow border-1 h-100 w-100">
			<div className="hd-2">Avatar</div>
			<div className="separator" />
			<div className="para-normal">
				An avatar is an icon or figure representing a person in a profile
				section or chat screens.
			</div>
			<div className="flex justify-center">
				<div className="preview flex space-around align-center w-6 m-v-5">
					<img
						src="https://i.pravatar.cc/400"
						alt="Avatar"
						className="avatar-small border-round"
					/>
					<img
						src="https://i.pravatar.cc/400"
						alt="Avatar"
						className="avatar-mid border-round"
					/>
					<img
						src="https://i.pravatar.cc/400"
						alt="Avatar"
						className="avatar-big border-round"
					/>
				</div>
			</div>
			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-10"
					src="https://carbon.now.sh/embed/pwf7xA4W9p8pKNijyUqP"
				/>
			</div>
		</div>
	);
};
