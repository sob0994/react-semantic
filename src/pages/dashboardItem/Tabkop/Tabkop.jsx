import {
	Grid,
	Header,
	Icon,
	Loader,
	Menu,
	Pagination,
	Segment,
	Table,
} from "semantic-ui-react";
import TabkopCode from "./TabkopCode";
import dateFormat from "dateformat";

const Tabkop = () => {
	const { tabkopS, paging } = TabkopCode();
	const { tabkop, items } = tabkopS;

	return (
		<Grid.Column>
			<Grid.Column>
				<Segment textAlign="center" basic>
					<Header as="h2" color="grey">
						TABKOP
					</Header>
				</Segment>
			</Grid.Column>
			<Grid.Column>
				<Segment>
					<Menu fluid pointing secondary>
						<Menu.Item active>Daftar Tabkop</Menu.Item>
					</Menu>
					<Segment basic style={{ overflow: "auto" }}>
						<Table striped unstackable selectable>
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell>NO</Table.HeaderCell>
									<Table.HeaderCell>TANGGAL</Table.HeaderCell>
									<Table.HeaderCell>NAMA</Table.HeaderCell>
									<Table.HeaderCell>ALAMAT</Table.HeaderCell>
									<Table.HeaderCell>KECAMATAN</Table.HeaderCell>
									<Table.HeaderCell>SALDO (RP)</Table.HeaderCell>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{tabkop.length === 0 ? (
									<Table.Row>
										<Table.Cell colSpan="5">
											<Loader active inline="centered" />
										</Table.Cell>
									</Table.Row>
								) : (
									tabkop.map((data) => {
										return (
											<Table.Row key={data.NO}>
												<Table.Cell>{data.NO}</Table.Cell>
												<Table.Cell>
													{dateFormat(data.TANGGAL, "dd/mm/yyyy")}
												</Table.Cell>
												<Table.Cell>{data.NAMA}</Table.Cell>
												<Table.Cell>{data.ALAMAT}</Table.Cell>
												<Table.Cell>{data.KECAMATAN}</Table.Cell>
												<Table.Cell textAlign="right">
													{data.SALDO_AWAL.toLocaleString("id-ID", {
														minimumFractionDigits: 2,
														maximumFractionDigits: 2,
													})}
												</Table.Cell>
											</Table.Row>
										);
									})
								)}
							</Table.Body>
						</Table>
						<Pagination
							defaultActivePage={paging.active}
							totalPages={paging.total}
							ellipsisItem={{
								content: <Icon name="ellipsis horizontal" />,
								icon: true,
							}}
							firstItem={{
								content: <Icon name="angle double left" />,
								icon: true,
							}}
							lastItem={{
								content: <Icon name="angle double right" />,
								icon: true,
							}}
							prevItem={{ content: <Icon name="angle left" />, icon: true }}
							nextItem={{ content: <Icon name="angle right" />, icon: true }}
						/>
					</Segment>
				</Segment>
			</Grid.Column>
		</Grid.Column>
	);
};

export default Tabkop;
