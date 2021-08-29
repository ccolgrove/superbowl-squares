import React from 'react';
import styled from "styled-components";

const BigSquare = styled.div<{ top?: boolean, bottom?: boolean, left?: boolean, right?: boolean }>`
  width: 60px;
  height: 60px;
  border: 2px solid black;
  display: flex;

  ${({ top }) => top ? "border-top: 4px solid black;": ""}
  ${({ bottom }) => bottom ? "border-bottom: 4px solid black;": ""}
  ${({ left }) => left ? "border-left: 4px solid black;": ""}
  ${({ right }) => right ? "border-right: 4px solid black;": ""}
`;

const LabelDiv = styled.div`
  margin-left: 3px;
  font-size: 10px;
  font-weight: bold;
`;

export interface SquareProps {
  row: number;
  column: number;
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
}

export const Square: React.ComponentType<SquareProps> = React.memo(
  function Square({ 
    row, 
    column,
    top,
    bottom,
    left,
    right
  }) {
    return <BigSquare top={top} bottom={bottom} left={left} right={right}>
      <LabelDiv>
        {row}{column}
      </LabelDiv>
    </BigSquare>;
  }
);