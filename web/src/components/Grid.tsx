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
                totalColumns={columns} 
                totalRows={rows}
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
                totalColumns={columns} 
                totalRows={rows}
              />
            ))}
          </SquareGroup>        
        </StyledCol>
      </Row>
    ))}
  </Container>;
})