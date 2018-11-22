import * as React from 'react';
import styled from 'styled-components';
import { Image } from '../../components/Image';

import { IStyledProps } from '../../../typings/props';

interface IPosterComponent extends IStyledProps {
	src: string;
	alt: string;
}

const PosterComponent = (props: IPosterComponent) => {
	const { src, alt } = props;

	return (	
		<Image className={props.className} src={src} alt={alt} />
	)
}
  
export const Poster = styled(PosterComponent)`
   margin-right: 20px;
`;

