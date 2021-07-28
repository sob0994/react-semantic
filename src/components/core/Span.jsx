const Span = ({ content, align, color, background }) => {
	return (
		<div
			style={{
				padding: "0.4em 0 0.4em 0",
				textAlign: align || "center",
				color: color,
				background: background,
			}}
		>
			{content}
		</div>
	);
};

export default Span;
