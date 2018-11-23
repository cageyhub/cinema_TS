import * as React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  min-width: 320px;
  margin: 0 auto;
`;

export function LayoutWrapper(
  Component: React.ComponentType,
) {
  return class PageWrapper extends React.Component {
    public render() {
      return (
        <Main>
        <Component {...this.props} />
        </Main>
      );
    }
  };
}


