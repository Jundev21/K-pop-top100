import axios from "axios";
import cheerio from "cheerio";
import { MelonData } from "../types/dataTypes";

let melonData: MelonData[] = [];

async function crwalingData() {
    let getHtml = await axios({
        url: "/chart/index.htm",
        method: "GET",
    });

    if (getHtml.data) {
        const $ = cheerio.load(getHtml.data);

        const musicSelector = "#lst50";
        $(musicSelector).each((idx, ele) => {
            const ranking = idx + 1;
            const albumImg = $(ele).find("#lst50 > td:nth-child(4) > div > a > img").attr("src");
            const title = $(ele)
                .find("#lst50 > td:nth-child(6) > div > div > div.ellipsis.rank01 > span > a")
                .text();
            const musician = $(ele)
                .find("#lst50 > td:nth-child(6) > div > div > div.ellipsis.rank02 > a")
                .text();

            melonData.push({ ranking, albumImg, title, musician });
        });

        return melonData;
    }

    throw new Error("NetWork Error");
}

async function main() {
    return await crwalingData();
}

export default main;
