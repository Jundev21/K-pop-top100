import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TableHeader from "../components/tableHeader";
import getMelonData from "../crwaling/getMelonData";

export default function MusicChart(vdId: any) {
    const [isClicked, setIsClicked] = useState(false);

    const handleVideo = () => {
        setIsClicked((pre) => !pre);
    };

    useEffect(() => {
        async function axiosData() {
            let a = await getMelonData();

            console.log(a);
        }
        axiosData();
    }, []);

    return (
        <CharContainer>
            <SubHeader>Korean popular music</SubHeader>

            <TableContainer>
                <TableRow>
                    <HeadTableRow>
                        <TableHeader pd={`10px`} width={`10%`}>
                            Ranking
                        </TableHeader>
                        <TableHeader pd={`10px`} width={`30%`}>
                            Title
                        </TableHeader>
                        <TableHeader pd={`10px`} width={`30%`}>
                            Singer
                        </TableHeader>
                        <TableHeader pd={`10px`} width={`30%`}>
                            Album
                        </TableHeader>
                    </HeadTableRow>
                </TableRow>
                <TableBody>
                    <tr onClick={handleVideo}>
                        <td>1번째 칸</td>
                        <td>2번째 칸</td>
                        <td>1번째 칸</td>
                        <td>2번째 칸</td>
                    </tr>
                    <YoutubeTr>
                        {isClicked && (
                            <iframe
                                id="player"
                                width="340"
                                height="160"
                                src={`http://www.youtube.com/embed/${vdId}?rel=0&autoplay=1&amp;controls=1&amp;showinfo=0&amp;enablejsapi=1&amp;version=3&allowfullscreen`}
                            ></iframe>
                        )}
                    </YoutubeTr>
                </TableBody>
            </TableContainer>
        </CharContainer>
    );
}

const CharContainer = styled.div``;

const TableContainer = styled.table`
    width: 100%;
    background-color: #edebeb;
    color: #606060;

    border: 0;
    border-collapse: separate;
    border-spacing: 0 5px;
`;
const TableBody = styled.tbody`
    text-align: center;
`;

const SubHeader = styled.header`
    margin-bottom: 3rem;
    font-weight: bold;
    font-size: 3rem;
    color: white;
    text-align: center;
`;

const TableRow = styled.thead``;

const HeadTableRow = styled.tr`
    width: 100%;
    border-bottom: 1px solid black;
`;

const YoutubeTr = styled.tr``;
