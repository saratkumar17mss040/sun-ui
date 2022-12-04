import { useState, useRef, useEffect } from 'react';

export const SwipeCarousel = ({ images }) => {
	const [position, setPosition] = useState(0);
	const scrollRef = useRef(null);

	const changeImageOnClick = (index) => {
		setPosition(index);
	};

	useEffect(() => {
		const id = setInterval(() => {
			scrollRef.current.click();
		}, 1500);

		return () => clearInterval(id);
	}, []);

	return (
		<>
			<div
				ref={scrollRef}
				onClick={() => setPosition((prev) => (prev + 1) % images.length)}
				className="banner flex justify-center m-v-4"
			>
				<img className="img-responsive" src={images[position]} alt="No image" />
			</div>
			<div className="flex justify-center">
				<div className="w-1 flex space-even">
					{images.map((_, index) => (
						<i
							key={index}
							onClick={() => changeImageOnClick(index)}
							className={`${
								index === position ? 'fas' : 'far'
							} fa-circle font-2 cur-point m-h-2`}
						></i>
					))}
				</div>
			</div>
		</>
	);
};
