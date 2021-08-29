import React from 'react';
import styled from "styled-components";

const BigSquare = styled.div<{ 
  top?: boolean, 
  bottom?: boolean, 
  left?: boolean, 
  right?: boolean,
  smTop?: boolean,
  smBottom?: boolean,
  smLeft?: boolean,
  smRight?: boolean
}>`
  width: 60px;
  height: 60px;
  border: 2px solid black;
  display: flex;

  @media (max-width: 768px) {
    ${({ smTop }) => smTop ? "border-top: 4px solid black;": ""}
    ${({ smBottom }) => smBottom ? "border-bottom: 4px solid black;": ""}
    ${({ smLeft }) => smLeft ? "border-left: 4px solid black;": ""}
    ${({ smRight }) => smRight ? "border-right: 4px solid black;": ""}
  }

  @media (min-width: 768px) {
    ${({ top }) => top ? "border-top: 4px solid black;": ""}
    ${({ bottom }) => bottom ? "border-bottom: 4px solid black;": ""}
    ${({ left }) => left ? "border-left: 4px solid black;": ""}
    ${({ right }) => right ? "border-right: 4px solid black;": ""}
  }
`;

const LabelDiv = styled.div`
  margin-left: 3px;
  font-size: 10px;
  font-weight: bold;
`;

export interface SquareProps {
  row: number;
  column: number;
  totalRows: number;
  totalColumns: number;
}

export const Square: React.ComponentType<SquareProps> = React.memo(
  function Square({ 
    row, 
    column,
    totalRows,
    totalColumns,
  }) {
    const top = row === 0;
    const bottom = row === totalRows - 1;
    const left = column === 0;
    const right = column === totalColumns - 1;

    const smTop = row === 0 && column < totalColumns / 2;
    const smBottom = row === totalRows - 1 && column >= totalColumns / 2;
    const smLeft = column === 0 || column === totalColumns / 2;
    const smRight = column === totalColumns / 2 - 1 || column === totalColumns - 1;

    return <BigSquare 
      top={top} 
      bottom={bottom} 
      left={left} 
      right={right}
      smTop={smTop} 
      smBottom={smBottom} 
      smLeft={smLeft} 
      smRight={smRight}
    >
      <LabelDiv>
        {row}{column}
      </LabelDiv>
    </BigSquare>;
  }
);