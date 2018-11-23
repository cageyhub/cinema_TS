import { observable, action } from 'mobx';
import { getSeance as getSeanceApi } from '../../../api/api';
import {
	OCCUPED,
	EMPTY
} from '../../constants/titles';

export interface ISeats {
	id: number,
	isOccuped: boolean,
}

export interface IHall {
	row: {
		id: number,
		price: number,
		seats: ISeats[]
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
	activeSeats: ISeats[];
	seance: ISeance;
	getSeance(seanceId: number): void;
	onSelectSeat(seat: any): void;
	getSeatStatus(seat: number): string;
}


export class SeanceStore implements ISeanceStore {
	
	@observable public activeSeats: ISeats[] = [];
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
	public onSelectSeat = (seat: ISeats) => {	
		const seatIndex = this.activeSeats.findIndex((item: any) => item.id === seat.id);
		if (seatIndex === -1) {
			const newSeat = { ...seat };
			this.activeSeats.push(newSeat);
		} else {
			this.activeSeats.splice(seatIndex, 1);
		}
		;
	}
	@action
	public getSeatStatus = (seatId: number) => {		
		let isSeatOccuped;
		if(this.activeSeats) {
			isSeatOccuped = this.activeSeats.find((item: any) => item.id === seatId);
		}
		return isSeatOccuped ? OCCUPED : EMPTY;
	}

}

