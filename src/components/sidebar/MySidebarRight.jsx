import {
	Sidebar,
	Segment,
	Menu,
	Icon,
	Button,
	Divider,
	Header,
	Placeholder,
} from "semantic-ui-react";
import { MyDiv } from "../core/MyCore";

const MySidebarRight = ({ show, eventHide, eventLogOut }) => {
	return (
		<Sidebar
			direction="right"
			animation="overlay"
			as={Segment}
			visible={show}
			onHide={eventHide}
			textAlign="center"
		>
			<Menu compact fluid borderless secondary size="mini">
				<Menu.Item position="left" onClick={eventHide} icon as="a">
					<Icon name="close" />
				</Menu.Item>
			</Menu>
			<MyDiv cicrular basic>
				<Placeholder>
					<Placeholder.Image />
				</Placeholder>
			</MyDiv>

			<Header as="h4" textAlign="center" style={{ marginTop: 0 }}>
				<Placeholder>
					<Placeholder.Line />
					<Placeholder.Line />
				</Placeholder>
			</Header>
			<Divider inverted />
			<Button primary size="tiny">
				Ubah Profil
			</Button>
			<Button color="red" size="tiny" onClick={eventLogOut}>
				Log Out
			</Button>
			<Divider />
			<Menu vertical secondary fluid size="huge" style={{ textAlign: "left" }}>
				<Menu.Item>
					<Menu.Header>Settings</Menu.Header>
					<Menu.Menu>
						<Menu.Item as="a">Seting Printer</Menu.Item>
						<Menu.Item as="a">Seting Tampilan</Menu.Item>
					</Menu.Menu>
				</Menu.Item>
				<Menu.Item>Setting</Menu.Item>
			</Menu>
		</Sidebar>
	);
};

export default MySidebarRight;
