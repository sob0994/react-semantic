import { Grid, Header, Menu, Segment } from "semantic-ui-react";

const Home = () => {
	return (
		<Grid.Column>
			<Grid.Column>
				<Segment textAlign="center" basic>
					<Header as="h2" color="grey">
						DASHBOARD
					</Header>
				</Segment>
			</Grid.Column>
			<Grid.Column>
				<Segment>
					<Menu fluid pointing secondary>
						<Menu.Item active>Nasi</Menu.Item>
						<Menu.Item>Guling</Menu.Item>
					</Menu>
					<Segment basic>ini COntent nya</Segment>
				</Segment>
			</Grid.Column>
		</Grid.Column>
	);
};

export default Home;
