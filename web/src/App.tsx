import React from 'react';
import styled from "styled-components";

import { Grid } from './components/Grid';

const AppDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  display: flex;
`;  

function App() {
  return (
    <AppDiv>
      <Title>Superbowl Squares</Title>
      <Grid rows={10} columns={10} />
    </AppDiv>
  );
}

export default App;
