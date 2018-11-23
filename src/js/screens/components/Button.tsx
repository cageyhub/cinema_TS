import * as React from 'react';
import styled from 'styled-components';
import { IStyledProps } from '../../typings/props';
import { EMPTY } from '../../constants/titles';

interface IProps extends IStyledProps {
	modifier: string;	
	targetValue: string | object;
	title: string;
	value: string | number;
	onClick(targetValue: string | object): void;
}

const ButtonComponent = (props: IProps) => {
	const {	targetValue, title, value } = props;

	function onClick() {
		props.onClick(targetValue);
	}

	return (
		<button
			className={props.className}
			onClick={onClick}
			title={title}
			type="button">
			{value}
		</button>
)};

export const Button = styled(ButtonComponent)`
	background-color: ${props =>
    props.modifier === EMPTY
		? '#339dc6'
		: '#ff7d38'};	
		border: none;
		border-radius: 2px;
		color: #fff;
		margin: 1px;
		padding: 6px 10px; 
		cursor: pointer;
		:hover {
			opacity: 0.85;
		  }
`

