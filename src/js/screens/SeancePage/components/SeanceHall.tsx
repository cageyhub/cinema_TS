import * as React from 'react';
import { Title } from '../../components/Title';
import {
	ISeance,
	ISeats
} from '../SeanceStore';
import { IStyledProps } from '../../../typings/props';
import { Button } from '../../components/Button';

interface IProps extends IStyledProps{
	seance: ISeance;
	activeSeats: ISeats[];
	onSelectSeat(seat:any): void;
	getSeatStatus(seat:number): string;
}

export const SeanceHall = (props: IProps) => {
	const { seance, onSelectSeat, getSeatStatus } = props;
	

	return (
		<div className="seance__hall">
		<Title>{seance.name}</Title>
			<div className="seance__info">
				<div className="movie__time">
					{seance.date}
					{' '}
					{seance.time}
				</div>
			</div>
			
			<div className={props.className}>
				{seance.id && seance.hall ? seance.hall.map((rowItem:any) => (
					<div className="hall__row" key={rowItem.row.id}>
						{ rowItem.row.seats.map((seat: any, index: number) => (
							<div key={seat.id}>
							<Button
								key={seat.id}
								modifier={getSeatStatus(seat.id)}
								onClick={onSelectSeat}
								targetValue={seat}
								value={index + 1}
								title={`${rowItem.row.price} грн`}
							/>
							</div>
						))}
					</div>
				))
					: null
				}
			</div>
		</div>
	)
};

