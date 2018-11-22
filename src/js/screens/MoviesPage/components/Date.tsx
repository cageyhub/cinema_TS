import * as React from 'react';
import styled from 'styled-components';

import { IStyledProps } from '../../../typings/props';

const DateComponent = (props: IStyledProps) => {

	return (	
		<div className={props.className}>{props.children}</div>
	)
}
  
export const Date = styled(DateComponent)`
   margin: 20px 0;
`;

