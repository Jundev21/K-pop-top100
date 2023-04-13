import React, { ReactNode } from "react";
import styled from "styled-components";

interface TableHeaderProps {
    width: string;
    children: ReactNode;
}

export default function tableHeader({ width, children }: TableHeaderProps) {
    return <TableHeader width={width}>{children}</TableHeader>;
}

const TableHeader = styled.th<TableHeaderProps>`
    text-align: center;
    font-weight: 900;
    font-size: 1.1rem;
    padding: 25px 15px;
    width: ${(props) => props.width};
    border-bottom: 1px solid #e5e5e5;

    background-color: #481349;
    color: white;
`;
3;
