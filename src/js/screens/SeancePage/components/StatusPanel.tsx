import * as React from 'react';
import styled from 'styled-components';
import { Button } from '../../components/Button';
import {
	ROW_TITLE,
	SEAT_TITLE,
	PRICE_TITLE,
	CURRENCY,
	DELETE,
	DELETE_ALL,
	NEXT,
	SUBMIT,
} from '../../../constants/titles';
import { ISeat } from '../SeanceStore';
import { IStyledProps } from '../../../typings/props';


const StatusPanelContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Table = styled.table`
	border-collapse: collapse;
	min-width: 320px;
`;

const THead = styled.thead`
	padding-bottom: 2rem;
	th {
		border-bottom: 1px solid #ccc;
		padding: 0.7rem 1rem;
	}
`;

const TBody = styled.tbody`
	td {
		border-bottom: 1px solid #ccc;
		padding: 0.7rem 1rem;
	}
`;

const TFoot = styled.tfoot`
	td {
		border-bottom: 1px solid #ccc;
		padding: 0.7rem 1rem;
	}
`;

interface IProps extends IStyledProps{
	activeSeats: ISeat[];
	seanceId: number;
	getFullPrice(): number;
	onDeleteSeat(seatIndex: number): void;
	onDeleteAllSeats(): void;
	onSendOrder(seanceId: number): void;
	getSeatNum(seatId: number): number;
	getRowNum(seatId: number): number;
}

export const StatusPanel = (props: IProps) => {
	const {	activeSeats, getRowNum, getSeatNum, getFullPrice, onDeleteSeat, onDeleteAllSeats, onSendOrder, seanceId } = props;	
	return  (
		<StatusPanelContainer>
			<h4>Обрані місця</h4>
			<Table>
				<THead>
					<tr>
						<th>{ROW_TITLE}</th>
						<th>{SEAT_TITLE}</th>
						<th>{PRICE_TITLE}</th>
						<th />
					</tr>
				</THead>
				<TBody>
					{activeSeats.length ? activeSeats.map((item, index) => (
						<tr key={item.id}>
							<td>{getRowNum(item.id)}</td>
							<td>{getSeatNum(item.id)}</td>
							<td>{`${item.price} ${CURRENCY}`}</td>
							<td>
								<Button
									modifier={DELETE}
									value="x"
									targetValue={index}
									onClick={onDeleteSeat}
								/>								
							</td>
						</tr>
					)) : null
					}
				</TBody>
				{activeSeats.length ? (
					<TFoot>
						<tr>
							<td colSpan={3}>{DELETE_ALL}</td>
							<td>
								<Button
									modifier={DELETE}
									value="x"
									onClick={onDeleteAllSeats}
								/>
								</td>
						</tr>
						<tr>
							<td colSpan={3}>Всього:</td>
							<td>{`${getFullPrice()} ${CURRENCY}`}</td>
						</tr>
						<tr>
							<td colSpan={4}>
								<Button
									modifier={SUBMIT}
									onClick={onSendOrder}
									value={NEXT}
									title={NEXT}
									targetValue={seanceId}
								/>
							</td>
						</tr>
					</TFoot>
				) : null
				}
			</Table>
		</StatusPanelContainer>
	)
};

