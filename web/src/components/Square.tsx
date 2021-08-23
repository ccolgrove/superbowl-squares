import React from 'react';
import styled from "styled-components";

const BigSquare = styled.div`
    width: 60px;
    height: 60px;
    border: 2px solid black;
`;

export function Square(): JSX.Element {
    return <BigSquare />;
}