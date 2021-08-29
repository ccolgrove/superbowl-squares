import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styled from "styled-components";

import { createArray } from "../helpers/arrays";

import { Square } from "./Square";

const FixedCol = styled(Col)`
  max-width: 60px;
`;

const SquareGroup = styled.div`
  display: flex;
`;

const StyledCol = styled(Col)`
  display: flex;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const StyledColLeft = styled(StyledCol)`
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export interface GridProps {
  rows: number;
  columns: number;
}

export const Grid: React.ComponentType<GridProps> = React.memo(function Grid({ rows, columns }) {
  return <Container>

    {createArray(rows).map((_el, idxRow) => (
      <Row noGutters={true}>
        <StyledColLeft style={{border: "1px solid blue"}}>
          <SquareGroup>{createArray(5).map((_el, idxCol) => <Square>{idxRow}{idxCol}</Square>)}</SquareGroup>
        </StyledColLeft>
        <StyledCol style={{border: "1px solid red"}}>
          <SquareGroup>{createArray(5).map((_el, idxCol) => <Square>{idxRow}{idxCol+5}</Square>)}</SquareGroup>
        </StyledCol>
      </Row>
    ))}

  </Container>;
})