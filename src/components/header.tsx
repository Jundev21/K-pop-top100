import React from "react";
import styled from "styled-components";
import useStore from "@/store";

export default function HeaderCompo() {
    const { handleClicked } = useStore();

    function handleaa() {
        handleClicked();
    }
    return (
        <Header>
            K-Pop 100
            <span onClick={handleaa}>Login</span>
        </Header>
    );
}

const Header = styled.header`
    padding: 12px;
    background-color: #481349;
    color: white;
    font-size: 2rem;
    text-align: center;
    font-weight: 1000;
`;
