import * as React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { LocationDescriptor } from 'history';
import { IStyledProps } from '../../typings/props';

interface IProps extends IStyledProps {
  to?: LocationDescriptor;  
}

const LinkComponent = (props: IProps) => {
  const { to } = props;
  return to ? <RouterLink to={to} {...props} /> : <div {...props} />;
};

export const Link = styled(LinkComponent)`
  font-size: 14px;
  color: #330000;
  text-align: center;
  cursor: pointer;
  font-weight: 700;
  margin-right: 20px;
`;
