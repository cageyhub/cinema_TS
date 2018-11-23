import * as React from 'react';
import { inject, observer  } from 'mobx-react';
import { MOVIE_STORE } from '../../constants/store';
import { MovieItem } from './components/MovieItem';
import { IMovieStore, IMovie } from './MovieStore';
import { Title } from '../components/Title';

interface IProps {
	[MOVIE_STORE]?: IMovieStore;
	movies?: IMovie[];
  }

@inject(MOVIE_STORE)
@observer
export class MoviesPage extends React.Component<IProps> {

	public componentDidMount() {
		this.props[MOVIE_STORE]!.getMovies();
	}

	public render() {
		
		const { movies } = this.props[MOVIE_STORE]!;
		
		return (
			<>
				<Title>Movies</Title>
				{movies && movies.map((movie) => (
					<MovieItem
						movie={movie}
						key={movie.id}
					/>
				))}
			</>
		);
	}
};


