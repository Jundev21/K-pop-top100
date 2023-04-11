import axios from "axios";
import cheerio from "cheerio";
import { MelonData } from "../types/dataTypes";
import AuthService from "../pages/services/search.service";
let melonData: MelonData[] = [];

async function crwalingData() {
    let getHtml = await AuthService.getMelonHTML();
    let asyncData = await getHtml;
    if (asyncData) {
        const $ = cheerio.load(getHtml);

        const musicSelector = "#lst50";
        $(musicSelector).each((idx, ele) => {
            const ranking = idx + 1;
            const albumImg = $(ele).find("#lst50 > td:nth-child(4) > div > a > img").attr("src");
            const albumName = $(ele).find("#lst50 > td:nth-child(7) > div > div > div > a").text();
            const title = $(ele)
                .find("#lst50 > td:nth-child(6) > div > div > div.ellipsis.rank01 > span > a")
                .text();
            const musician = $(ele)
                .find("#lst50 > td:nth-child(6) > div > div > div.ellipsis.rank02 > a")
                .text();

            melonData.push({ ranking, albumImg, title, musician, albumName });
        });

        return melonData;
    }

    throw new Error("NetWork Error");
}

async function main() {
    return await crwalingData();
}

export default main;
