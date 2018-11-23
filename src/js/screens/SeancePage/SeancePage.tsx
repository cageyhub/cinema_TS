import * as React from 'react';
import { inject, observer  } from 'mobx-react';
import styled from 'styled-components';
import { SeanceHall } from './components/SeanceHall';
import { StatusPanel } from './components/StatusPanel';
import { SEANCE_STORE } from '../../constants/store';
import { ISeanceStore, ISeat } from './SeanceStore';

interface IProps {
	[SEANCE_STORE]?: ISeanceStore;
	match: any;
	activeSeats: ISeat[];
	seanceId: number;
}

@inject(SEANCE_STORE)
@observer
export class SeancePage extends React.Component<IProps> {

	public seanceId: number;
	
	public componentDidMount() {
		this.seanceId = this.props.match.params.id;
		this.props[SEANCE_STORE]!.getSeance(this.seanceId);
	}

	public render() {
		const {
			seance,
			activeSeats,
			onSelectSeat,
			getSeatStatus,
			getFullPrice,
			onDeleteSeat,
			onDeleteAllSeats,
			onSendOrder,
			getRowNum,
			getSeatNum,
		} = this.props[SEANCE_STORE]!;

		return (
			<>
				<Seance>
					{seance && 
					<>
						<SeanceHall
							seance={seance}
							activeSeats={activeSeats.length ? activeSeats : []}
							onSelectSeat={onSelectSeat}
							getSeatStatus={getSeatStatus}
						/>					
						<StatusPanel
							activeSeats={activeSeats.length ? activeSeats : []}
							getRowNum={getRowNum}
							getSeatNum={getSeatNum}
							getFullPrice={getFullPrice}
							onDeleteSeat={onDeleteSeat}
							onDeleteAllSeats={onDeleteAllSeats}
							onSendOrder={onSendOrder}
							seanceId={this.seanceId}
						/>
					</>
				}
				</Seance>			
			</>
		);
	}
}

const Seance = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;		
	padding: 2%;
`;