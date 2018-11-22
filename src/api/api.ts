import config from '../config';
import { handleResponse, makeGetRequest } from './common';

export const getMovies = () => makeGetRequest(`${config.API_URL}/movies`, handleResponse);
export const getSeance = (seanceId: number) => makeGetRequest(`${config.API_URL}/seance/${seanceId}`, handleResponse);

