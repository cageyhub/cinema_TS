import { observable, action } from 'mobx';
import { getMovies as getMoviesApi } from '../../../api/api';

export interface IMovie {
	id: number,
	title: string,
	date: string,
	poster: string,
	techno: string,
	schedule: any
}

export interface IMovieStore {
	movies: IMovie[];
	getMovies(): void;
}

export class MovieStore implements IMovieStore {

	@observable public movies: IMovie[] = [];
	
	@action
    public getMovies = async () => {
		try {
			this.movies = await getMoviesApi();	
		} catch (error) {
			// tslint:disable-next-line:no-console
			console.log(error);
		}
	};

}

