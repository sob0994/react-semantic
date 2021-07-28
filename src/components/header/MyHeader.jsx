import { Header, Image } from "semantic-ui-react";

const MyHeader = ({ title, image, size, ...rest }) => {
	const myTitle = title || "Company Name";
	const myPic = image || "http://www.sob-tutorial.my.id/core/img/logo.png";
	const mySize = size || "medium";
	return (
		<Header as="h2" size={mySize} {...rest}>
			<Image circular src={myPic} />
			{myTitle}
		</Header>
	);
};

export default MyHeader;
