import { observable, action } from 'mobx';
import { getSeance as getSeanceApi } from '../../../api/api';

import {
	OCCUPED,
	EMPTY
} from '../../constants/titles';

export interface ISeat {
	id: number,
	isOccuped: boolean,
	price?: number;
}

export interface IHall {
	row: {
		id: number,
		price: number,
		seats: ISeat[]
	}
}

export interface ISeance {
	id: number,
	name: string,
	date: string,
	time: string,
	hall: IHall[],
	
}

export interface ISeanceStore {
	activeSeats: ISeat[];
	seance: ISeance;
	getSeance(seanceId: number): void;
	getSeatPrice(seatId: number): number;
	onSelectSeat(seat: any): void;
	getSeatStatus(seat: any): string;
	getFullPrice(): number;
	onDeleteSeat(seatIndex: number): void;
	onDeleteAllSeats(): void;
	onSendOrder(seanceId: number): void;
	getSeatNum(seatId: number): number;
	getRowNum(seatId: number): number;
}


export class SeanceStore implements ISeanceStore {
	
	@observable public activeSeats: ISeat[] = [];
	@observable public seance: ISeance;

	@action
    public getSeance = async (seanceId: number) => {
		try {
			this.seance = await getSeanceApi(seanceId);	
		} catch (error) {
			// tslint:disable-next-line:no-console
			console.log(error);
		}
	}
	
	@action
	public getSeatPrice = (seatId: number) => {
		const rowNum = this.getRowNum(seatId);
		const row = this.seance.hall.find(item => item.row.id === rowNum);
		return row!.row.price;
	}

	@action
	public onSelectSeat = (seat: ISeat) => {	
		const seatIndex = this.activeSeats.findIndex((item: any) => item.id === seat.id);
		if (seatIndex === -1) {
			const newSeat = { ...seat };
			newSeat.price = this.getSeatPrice(seat.id);
			this.activeSeats.push(newSeat);
		} else {
			this.activeSeats.splice(seatIndex, 1);
		};
	}
	@action
	public getSeatStatus = (seatId: number) => {		
		let isSeatOccuped;
		if(this.activeSeats) {
			isSeatOccuped = this.activeSeats.find((item: any) => item.id === seatId);
		}
		return isSeatOccuped ? OCCUPED : EMPTY;
	}

	@action
	public getFullPrice = () => {
		return this.activeSeats.reduce((sum: number, current: ISeat) => sum + current.price!, 0);
	}

	@action
	public onDeleteSeat = (seatIndex: number) => {
		this.activeSeats.splice(seatIndex, 1);
	}

	@action
	public onDeleteAllSeats = () => {		
		this.activeSeats = [];
	}

	@action
	public getSeatNum = (seatId: number) => seatId % 100;

	@action
	public getRowNum = (seatId: number) => Math.floor(seatId / 100);

	@action
	public onSendOrder = async (seanceId: number) => {
		const seatList: number[] = [];
		this.activeSeats.forEach((item) => {
			seatList.push(item.id);
		});
		alert(seatList);		
	}

}

