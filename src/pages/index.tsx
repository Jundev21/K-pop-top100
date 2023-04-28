import main from "../crwaling/getMelonData";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import ServiceAPI from "../pages/services/search.service";
import Header from "../components/header";
import Footer from "../components/footer";
import MusicChart from "../components/musicChart";
import useStore from "@/store";

export default function Home() {
    const { isClicked, handleClicked } = useStore();

    console.log(isClicked);
    return (
        <>
            <Header />
            {isClicked && (
                <LogInContainer>
                    <ModalOverlay isOpen={isClicked} />
                    <ModalWrapper isOpen={isClicked}>
                        {/* 모달 창 컨텐츠 */}
                        <button onClick={handleClicked}>Close</button>
                    </ModalWrapper>
                </LogInContainer>
            )}
            <BodyContainer>
                <MusicChart />
            </BodyContainer>
            <Footer />
        </>
    );
}

const BodyContainer = styled.div`
    margin: 5rem 15rem;

    @media (max-width: 768px) {
        margin: 3rem;
        /* padding: 3rem; */
    }
`;

const ModalWrapper = styled.div<{ isOpen: boolean }>`
    /* 모달 창 스타일 */
    width: 600px;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    position: fixed;

    left: 0%;

    transform: translate(-50%, -50%);
    z-index: 120;
    /* position: relative; */
    /* 모달 창이 열리거나 닫힐 때의 애니메이션 효과 */
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transition: opacity 0.3s ease;
`;

const ModalOverlay = styled.div<{ isOpen: boolean }>`
    /* 모달 오버레이 스타일 */
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    /* 모달 창이 열리거나 닫힐 때의 애니메이션 효과 */
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transition: opacity 0.3s ease;
`;

const LogInContainer = styled.div``;
