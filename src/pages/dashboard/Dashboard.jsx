import React from "react";
import { Grid, Header, Icon, Menu } from "semantic-ui-react";
import DashboardCode from "./DashboardCode";
import MySidebar from "../../components/sidebar/MySidebar";
import MySidebarRight from "../../components/sidebar/MySidebarRight";

const Dashboard = () => {
	document.title = "Dashboard";
	const {
		hideMenu,
		showMenu,
		myMenu,
		handleLogOut,
		showSide,
		hideSide,
		myToken,
	} = DashboardCode();
	return (
		<Grid padded>
			<Menu fluid borderless inverted color="teal" style={{ borderRadius: 0 }}>
				<Menu.Item onClick={showMenu} as="a" icon>
					<Icon name="th large" />
				</Menu.Item>
				<Menu.Item onClick={myToken}>
					<Header inverted>KSP PANJI SEDANA</Header>
				</Menu.Item>
				<Menu.Menu position="right">
					<Menu.Item onClick={showSide} as="a" icon>
						<Icon name="th list" />
					</Menu.Item>
				</Menu.Menu>
			</Menu>
			<MySidebarRight
				show={myMenu.side}
				eventHide={hideSide}
				state={DashboardCode}
				eventLogOut={handleLogOut}
			/>
			<MySidebar show={myMenu.wide} eventHide={hideMenu} />
			<Grid.Row></Grid.Row>
		</Grid>
	);
};

export default Dashboard;
