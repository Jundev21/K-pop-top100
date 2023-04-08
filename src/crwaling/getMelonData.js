const axios = require("axios");
const cheerio = require("cheerio");

let melonData = [];

async function crwalingData() {
    await axios({
        // 크롤링을 원하는 페이지 URL
        url: "https://www.melon.com/chart/",
        method: "GET",
    })
        // 성공했을 경우
        .then((response) => {
            const $ = cheerio.load(response.data);

            const musicSelector = "#lst50";
            $(musicSelector).each((idx, ele) => {
                const ranking = idx;
                const title = $(ele)
                    .find("#lst50 > td:nth-child(6) > div > div > div.ellipsis.rank01 > span > a")
                    .text();
                const musician = $(ele)
                    .find("#lst50 > td:nth-child(6) > div > div > div.ellipsis.rank02 > a")
                    .text();

                melonData.push({ rank, title, musician });
            });

            console.log(melonData);
            return melonData;
        })
        // 실패했을 경우
        .catch((err) => {
            console.error(err);
        });
}

async function main() {
    let sucessToGetData = await crwalingData();
    console.log(sucessToGetData);
}

main();
