import * as React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import { MoviesPage } from './js/screens/MoviesPage/MoviesPage';
import { SeancePage } from './js/screens/SeancePage/SeancePage';
import {
	ROOT_ROUTE,
	SEANCE_ROUTE,
} from './js/constants/routs';

const App = () => (
	<BrowserRouter >
		<>
		<Route path={ROOT_ROUTE} exact={true} component={MoviesPage} />
		<Route path={SEANCE_ROUTE} exact={true} component={SeancePage} />
		</>
	</BrowserRouter >
);

export default App;