import React from 'react';
import Container from "react-bootstrap/Container"
import styled from "styled-components";

import { Grid } from './components/Grid';

const AppDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  display: flex;
  margin-bottom: 0;
`;  

const HeaderContainer = styled(Container)`
  margin-bottom: 20px;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppDiv>
      <HeaderContainer className="bg-danger" fluid={true}>
        <Title className="text-light">Superbowl Squares</Title>
      </HeaderContainer>
      <Grid rows={10} columns={10} />
    </AppDiv>
  );
}

export default App;
