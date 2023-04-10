import main from "../crwaling/getMelonData";
import { useEffect, useState } from "react";
import ServiceAPI from "../pages/services/search.service";
import Header from "../components/header";
import styled from "styled-components";

export default function Home() {
    let [vdId, setVdId] = useState("");

    useEffect(() => {
        async function axiosData() {
            let a = await ServiceAPI.getYoutubeLink("꽃 지수");
            let videoId = await a.items[0].id.videoId;
            console.log(a);
            await setVdId(videoId);
        }

        axiosData();
    }, []);

    return (
        <div>
            <Header />

            <SubHeader>Korean popular music</SubHeader>
            {/* <iframe
                id="player"
                width="340"
                height="160"
                src={`http://www.youtube.com/embed/${vdId}?rel=0&autoplay=1&amp;controls=1&amp;showinfo=0&amp;enablejsapi=1&amp;version=3&allowfullscreen`}
            ></iframe> */}
        </div>
    );
}

const SubHeader = styled.header`
    padding: 5rem 0;
    font-weight: bold;
    font-size: 3rem;
    color: white;
    text-align: center;
`;
