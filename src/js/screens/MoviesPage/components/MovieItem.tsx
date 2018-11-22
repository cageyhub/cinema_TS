import * as React from 'react';
import styled from 'styled-components';
import { IStyledProps } from '../../../typings/props';
import { SubTitle } from '../../components/Title';
import { IMovie } from '../MovieStore';
import { ScheduleList } from './ScheduleList';
import { Poster } from './Poster';
import { Date } from './Date';

interface IProps extends IStyledProps{
	movie: IMovie;
}

const MovieItemComponent = (props: IProps) => {
	const { movie } = props;
	return (
	<div className={props.className}>
		<Poster src={movie.poster} alt={movie.title} />
		<div>
			<SubTitle>{movie.title}</SubTitle>
			<Date>{movie.date}</Date>
			<div className="show">
				<div className="show__techno">{movie.techno}</div>				
				<ScheduleList schedule={movie.schedule} />
			</div>
		</div>
	</div>
)}

export const MovieItem = styled(MovieItemComponent)`
	display: flex;
	justify-content: row;
	width: 70%;
	background-color: #eeeeee;
	padding: 20px;
	margin: 15px auto;
`;