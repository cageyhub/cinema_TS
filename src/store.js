import {
	MOVIE_STORE,
	SEANCE_STORE
} from './js/constant';
import { MovieStore } from './js/screens/MoviesPage/MovieStore';
import { SeanceStore } from './js/screens/SeancePage/SeanceStore';

const movieStore = new MovieStore();
const seanceStore = new SeanceStore();

export const stores = {
	[MOVIE_STORE]: movieStore,
	[SEANCE_STORE]: seanceStore,
};

