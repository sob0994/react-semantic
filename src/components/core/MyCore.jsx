export const MyDiv = ({ size, cicrular, children, basic }) => {
	const radius = cicrular ? "50%" : "0%";
	const padd = !basic ? "1em" : 0;
	return (
		<div
			style={{
				width: size || 80,
				height: size || 80,
				borderRadius: radius,
				margin: `${padd} auto`,
				overflow: "hidden",
			}}
		>
			{children}
		</div>
	);
};
