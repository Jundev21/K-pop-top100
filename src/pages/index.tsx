import main from "../crwaling/getMelonData";
import { useEffect, useState } from "react";
import ServiceAPI from "../pages/services/search.service";
import Header from "../components/header";
import Footer from "@/components/footer";
import styled from "styled-components";
import MusicChart from "../components/musicChart";

export default function Home() {
    return (
        <>
            <Header />
            <BodyContainer>
                <MusicChart />
            </BodyContainer>
            <Footer />
        </>
    );
}

const BodyContainer = styled.div`
    margin: 5rem 7rem;

    @media (max-width: 768px) {
        margin: 3rem;
        /* padding: 3rem; */
    }
`;
