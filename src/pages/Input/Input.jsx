import { useScrollToTop, useTitle } from '../../common';

export const Input = () => {
	useTitle('Sun-UI | Input');
	useScrollToTop();
	return (
		<div className="p-5 box-shadow border-1 h-100 w-100">
			<div className="hd-2">Input</div>
			<div className="separator" />
			<div className="para-normal">
				Reusable input components to take input from the user.
			</div>
			<div className="hd-3">Text box</div>

			<div className="flex justify-center">
				<div className="preview flex justify-center space-even wrap w-100 m-4 align-center">
					<textarea className="textbox border-round-small color-black border-1 p-3 w-5 font-4" />
				</div>
			</div>

			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-4"
					src="https://carbon.now.sh/embed/D1MKQPdE46Er9uDc1KNo"
				/>
			</div>

			<div className="separator m-v-6 m-h-4" />
			<div className="hd-3">Input box</div>
			<div className="flex justify-center">
				<div className="preview flex justify-center space-even wrap w-100 m-4 align-center">
					<div>
						<label
							className="input-label m-v-2 text-bold font-4"
							htmlFor="input-id"
						>
							Name
						</label>
						<input
							type="text"
							id="input-id"
							placeholder="John Doe"
							className="input border-round-small color-black border-1 p-2 w-4 font-3"
						/>
					</div>
				</div>
			</div>

			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-8"
					src="https://carbon.now.sh/embed/IgN4csiGKwnkzxNX9w0m"
				/>
			</div>

			<div className="separator m-v-6 m-h-4" />
			<div className="hd-3">Input box with validation</div>
			<div className="flex justify-center">
				<div className="preview flex justify-center space-even wrap w-100 m-4 align-center">
					<div>
						<label
							className="input-label m-v-2 text-bold font-4"
							htmlFor="input-id-email"
						>
							Email
						</label>
						<input
							type="email"
							id="input-id-email"
							placeholder="you@yourcompany.com"
							className="input border-round-small border-1 p-2 w-5 font-4"
						/>
						<div className="error-prompt font-3 m-h-1 m-v-2 text-bold color-red-2">
							Invalid email address!
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-10"
					src="https://carbon.now.sh/embed/H4KiLOsK4q0ftMk2jSTL"
				/>
			</div>

			<div className="separator m-v-6 m-h-4" />
			<div className="hd-3">Checkbox</div>
			<div className="flex justify-center">
				<div className="preview flex justify-center space-even wrap w-100 m-4 align-center">
					<div>
						<label className="text-bold font-4" htmlFor="input-id-check">
							<input
								type="checkbox"
								id="input-id-check"
								className="border-round-small border-1 p-2 m-h-4 font-4"
							/>
							Include out of stock
						</label>
					</div>
				</div>
			</div>

			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-7"
					src="https://carbon.now.sh/embed/wLxoE8RksuQb5qkIrdum"
				/>
			</div>

			<div className="separator m-v-6 m-h-4" />
			<div className="hd-3">Slider</div>
			<div className="flex justify-center">
				<div className="preview flex justify-center space-even wrap w-100 m-4 align-center">
					<div>
						<label className="text-bold font-4" htmlFor="input-id-range">
							<input
								type="range"
								id="input-id-range"
								min="0"
								max="100"
								defaultValue="70"
								className="cur-point"
							/>
						</label>
					</div>
				</div>
			</div>

			<div className="flex justify-center m-v-8">
				<embed
					className="w-100 h-5"
					src="https://carbon.now.sh/embed/PAteZDgVYRp6DCdwjLH0"
				/>
			</div>
		</div>
	);
};
