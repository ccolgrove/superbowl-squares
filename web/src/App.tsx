import React from 'react';
import styled from "styled-components";

import { Square } from "./components/Square"

import { Grid } from './components/Grid';

function createArray(length: number): unknown[] {
  return [...new Array(length)]
}

const AppDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  display: flex;
`;  

const RowDiv = styled.div`
  display: flex;
`;

const RowHeaderDiv = styled.div`
  display: flex;
  margin-left: 31px; /* TODO: fix */
`;

const RowHeader = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding-right: 10px;
  width: 20px;
`;  

const ColumnHeader = styled.div`
  width: 63px;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;

function App() {
  return (
    <AppDiv>
      <Title>Superbowl Squares</Title>
      <Grid rows={10} columns={10} />
      {/* <RowHeaderDiv>
        {createArray(10).map((_el, idx) => <ColumnHeader>{idx}</ColumnHeader>)} 
      </RowHeaderDiv>
      {createArray(10).map((_el, idx) => (
        <RowDiv>
          {<RowHeader>{idx}</RowHeader>}
          {createArray(10).map((_el, idx) => <Square />)}
        </RowDiv>
      ))} */}
      
    </AppDiv>
  );
}

export default App;
