import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styled from "styled-components";

import { createArray } from "../helpers/arrays";

import { Square } from "./Square";

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
  const halfCols = columns / 2;
  
  return <Container>
    {createArray(rows).map((_el, idxRow) => (
      <Row className="gx-0" key={idxRow}>
        <StyledColLeft>
          <SquareGroup>{createArray(halfCols).map((_el, idxCol) => (
              <Square 
                key={idxCol} 
                row={idxRow} 
                column={idxCol} 
                top={idxRow === 0} 
                bottom={idxRow === rows - 1} 
                left={idxCol === 0}
              />
            ))}
          </SquareGroup>
        </StyledColLeft>
        <StyledCol>
          <SquareGroup>{createArray(halfCols).map((_el, idxCol) => (
              <Square 
                key={idxCol + halfCols }
                row={idxRow} 
                column={idxCol + halfCols} 
                top={idxRow === 0} 
                bottom={idxRow === rows - 1} 
                right={idxCol + halfCols === columns - 1}
              />
            ))}
          </SquareGroup>        
        </StyledCol>
      </Row>
    ))}
  </Container>;
})