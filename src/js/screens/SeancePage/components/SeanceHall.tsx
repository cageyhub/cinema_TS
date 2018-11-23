import * as React from 'react';
import styled from 'styled-components';
import { Title } from '../../components/Title';
import {
	ISeance,
	ISeat,
} from '../SeanceStore';
import { IStyledProps } from '../../../typings/props';
import { Button } from '../../components/Button';

const SeanceHallContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const SeanceInfo = styled.div`
	padding-bottom: 2rem;
`;

const HallRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

interface IProps extends IStyledProps{
	seance: ISeance;
	activeSeats: ISeat[];
	onSelectSeat(seat:any): void;
	getSeatStatus(seat:number): string;
}

export const SeanceHall = (props: IProps) => {
	const { seance, onSelectSeat, getSeatStatus } = props;	

	return (
		<SeanceHallContainer>
			<Title>{seance.name}</Title>
			<SeanceInfo>
				{seance.date} {' '} {seance.time}
			</SeanceInfo>				
			<div>
				{seance.id && seance.hall ? seance.hall.map((rowItem:any) => (
					<HallRow key={rowItem.row.id}>
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
					</HallRow>
				))
					: null
				}
			</div>
		</SeanceHallContainer>
	)
};

