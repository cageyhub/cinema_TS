import * as React from 'react';
import styled from 'styled-components';
import { IStyledProps } from '../../typings/props';

interface IProps extends IStyledProps {
    children?: string;  
}

const TitleComponent = (props: IProps) => {
    return <div className={props.className}>{props.children}</div>;
};

export const Title = styled(TitleComponent)`
  font-size: 18px;
  width: 100%;
  color: #1b2587;
  text-align: center;
  font-weight: 700;
  margin: 20px 0;
`;

export const SubTitle = styled(Title)`
  font-size: 16px;
`;
