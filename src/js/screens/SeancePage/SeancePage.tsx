import * as React from 'react';
import { inject, observer  } from 'mobx-react';
import './SeancePage.css';

// import { StatusPanel } from './components/StatusPanel';
import { SeanceHall } from './components/SeanceHall';

import { SEANCE_STORE } from '../../constant';
import { ISeanceStore, ISeats } from './SeanceStore';

// const getRowNum = seatId => Math.floor(seatId / 100);

// const getSeatNum = seatId => seatId % 100;


interface IProps {
	[SEANCE_STORE]?: ISeanceStore;
	match: any;
	activeSeats: ISeats[];
}

@inject(SEANCE_STORE)
@observer
export class SeancePage extends React.Component<IProps> {
	constructor(props: any) {
		super(props)
	}
	
	public componentDidMount() {
		this.props[SEANCE_STORE]!.getSeance(this.props.match.params.id);
	}

	public render() {
		const { seance, activeSeats, onSelectSeat } = this.props[SEANCE_STORE]!;
		// tslint:disable-next-line:no-console
		console.log("render", activeSeats);
		
		return (
			<main>
				 <div className="seance">
					{seance && <SeanceHall
						seance={seance}
						activeSeats={activeSeats}
						onSelectSeat={onSelectSeat}
					/>}
					</div>
			
			</main>

		);
	}
}

