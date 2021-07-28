import {
	Sidebar,
	Segment,
	Menu,
	Icon,
	Grid,
	Divider,
	Image,
	Header,
} from "semantic-ui-react";
import logo from "../../assets/image/img01.svg";
const MySidebar = ({ show, eventHide }) => {
	return (
		<Sidebar
			as={Segment}
			visible={show}
			animation="overlay"
			onHide={eventHide}
			direction="top"
			// onClick={hideMenu}
		>
			<Menu compact secondary size="mini">
				<Menu.Item onClick={eventHide} as="a" icon>
					<Icon name="close" />
				</Menu.Item>
			</Menu>
			<Grid stackable>
				<Grid.Row columns={1}>
					<Grid.Column textAlign="center">
						<Header as="h3">KSP PANJI SEDANA</Header>
					</Grid.Column>
				</Grid.Row>
				<Divider fitted />
				<Grid.Row columns={4}>
					<Grid.Column></Grid.Column>

					<Grid.Column>
						<Menu text vertical size="massive" fluid>
							<Menu.Item>
								<Menu.Header>Registrasi</Menu.Header>
								<Menu.Menu>
									<Menu.Item as="a">Form Permohonan</Menu.Item>
									<Menu.Item as="a">Setoran Anggota</Menu.Item>
									<Menu.Item as="a">Setoran Angsuran</Menu.Item>
									<Menu.Item as="a">Setoran Lainnya</Menu.Item>
								</Menu.Menu>
							</Menu.Item>
						</Menu>
					</Grid.Column>

					<Grid.Column>
						<Menu text vertical fluid size="massive">
							<Menu.Item>
								<Menu.Header>Kas Masuk</Menu.Header>
								<Menu.Menu>
									<Menu.Item as="a">Setoran Pungutan Tabkop</Menu.Item>
									<Menu.Item as="a">Setoran Anggota</Menu.Item>
									<Menu.Item as="a">Setoran Angsuran</Menu.Item>
									<Menu.Item as="a">Setoran Lainnya</Menu.Item>
								</Menu.Menu>
							</Menu.Item>
						</Menu>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row columns={4}>
					<Grid.Column>
						<Image size="medium" centered src={logo} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Sidebar>
	);
};

export default MySidebar;
