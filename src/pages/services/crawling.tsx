import axios from "axios";
import cheerio from "cheerio";

export const main = () => {
    const crawlingMelon = async () => {
        // https://www.melon.com/chart/index.htm

        try {
            return await axios.get("https://www.melon.com/chart/index.htm", {
                withCredentials: true,
            });
        } catch (error) {
            alert(error);
        }
    };

    let getData = async () => {
        let initData = await crawlingMelon();

        console.log(initData);
    };

    getData();
};
