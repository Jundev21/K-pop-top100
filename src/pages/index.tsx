import main from "../crwaling/getMelonData";
import { useEffect, useState } from "react";
import ServiceAPI from "../pages/services/search.service";
import Header from "../components/header";
import styled from "styled-components";
import MusicChart from "../components/musicChart";

export default function Home() {
    let [vdId, setVdId] = useState("");

    // useEffect(() => {
    //     async function axiosData() {
    //         let a = await ServiceAPI.getYoutubeLink("꽃 지수");
    //         let videoId = await a.items[0].id.videoId;
    //         console.log(a);
    //         await setVdId(videoId);
    //     }
    //     axiosData();
    // }, []);

    return (
        <div>
            <Header />
            <BodyContainer>
                <MusicChart vdId={vdId} />
            </BodyContainer>
        </div>
    );
}

const BodyContainer = styled.div`
    margin: 5rem 15rem;
`;
