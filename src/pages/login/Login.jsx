import React from "react";
import {
	Button,
	Grid,
	Header,
	Icon,
	Image,
	Input,
	Loader,
	Message,
} from "semantic-ui-react";
import img1 from "../../assets/image/logo1.png";
import Span from "../../components/core/Span";
import LoginCode from "./LoginCode";

const Login = () => {
	// document.body.style.background =
	// 	"linear-gradient(165deg, rgba(9,204,255,1) 0%, rgba(0,84,106,1) 60%)";
	document.title = "Login";
	const { error, loading, handleChange, handleSubmit } = LoginCode();
	return (
		<Grid verticalAlign="middle" textAlign="center" style={{ height: "100vh" }}>
			<Grid.Column
				style={{
					background: "white",
					borderRadius: "2%",
					padding: "4em 2em",
					maxWidth: "330px",
					boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
				}}
			>
				<Image centered size="tiny" src={img1} />
				<Header as="h2">KSP PANJI SEDANA</Header>
				{loading && <Loader active inline="centered" />}
				{error.status && (
					<Message color="red">
						<Icon name="x" />
						{error.status}
					</Message>
				)}

				<Span content={error.username} color="red" align="left" />
				<Input
					onChange={handleChange}
					name="username"
					type="text"
					placeholder="Username"
					fluid
					error={Boolean(error.username)}
				/>

				<Span content={error.password} color="red" align="left" />
				<Input
					onChange={handleChange}
					name="password"
					type="password"
					placeholder="Password"
					fluid
					error={Boolean(error.password)}
				/>

				<Span content="" color="red" align="left" />
				<Button onClick={handleSubmit} fluid primary>
					Login
				</Button>
			</Grid.Column>
		</Grid>
	);
};

export default Login;
