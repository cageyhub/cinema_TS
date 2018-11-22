import * as React from 'react';
import styled from 'styled-components';

import { IStyledProps } from '../../typings/props';

interface IImageComponent extends IStyledProps {
	src: string;
	alt: string;
}

const ImageComponent = (props: IImageComponent) => {
	const { src, alt } = props;

	return (	
		<img className={props.className} src={src} alt={alt} />
	)
}
  
export const Image = styled(ImageComponent)`
    display: block;
    border: none;
`;

