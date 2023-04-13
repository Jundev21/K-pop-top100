import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (
        <FooterContainer>
            K-pop is a part of Melon Media Corporation. © 2023 K-pop Media, LLC. All Rights
            Reserved. Powered by melon.co.kr - VIP
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    text-align: center;
    font-size: 0.7rem;
    padding: 2rem;
    background-color: #481349;
`;
