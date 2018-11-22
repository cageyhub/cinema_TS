import * as React from 'react';
import styled from 'styled-components';
import { Link } from '../../components/Link';
import { SEANCE_PAGE } from '../../../constants/pages';

import { IStyledProps } from '../../../typings/props';

interface IScheduleItem {
	id: number;
	time: string;
}

interface IScheduleList extends IStyledProps {
	schedule: IScheduleItem[];
}

const ScheduleListComponent = (props: IScheduleList) => {
	const { schedule } = props;

	return (	
		<div className={props.className}>
			{schedule && schedule.map((seance: any) => (
				<Link
					key={seance.id}		
					to={`/${SEANCE_PAGE}/${seance.id}`}>
					{seance.time}
				</Link>
			))}
		</div>
	)
}
  
export const ScheduleList = styled(ScheduleListComponent)`
	display: flex;
	justify-content: row;
	align-items: center;
	text-transform: uppercase;
	color: #291b87;
	font-size: 14px;
	height: 100%;
	padding: 0 3px;
	margin-right: 20px;
	cursor: pointer;
`;




