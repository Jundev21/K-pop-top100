import React, { ReactNode } from "react";
import styled from "styled-components";

interface TableHeaderProps {
    pd: string;
    width: string;
    children: ReactNode;
}

export default function tableHeader({ pd, width, children }: TableHeaderProps) {
    return (
        <TableHeader pd={pd} width={width}>
            {children}
        </TableHeader>
    );
}

const TableHeader = styled.th<TableHeaderProps>`
    text-align: center;
    font-weight: 900;
    font-size: 1.1rem;
    padding: ${(props) => props.pd};
    width: ${(props) => props.width};
    border-bottom: 1px solid black;
`;
