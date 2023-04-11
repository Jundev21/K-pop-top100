import api from "./api";
import axios from "axios";
// 검색 결과 가져오기
class AuthService {
    async getYoutubeLink(searchWord: string) {
        return api
            .get(
                `/search?maxResults=1&q=${searchWord}&part=snippet&key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`
            )
            .then((response) => {
                return response.data;
            });
    }
    async getMelonHTML() {
        return await axios.get(`/chart/index.htm`).then((response) => {
            return response.data;
        });
    }
}

let exporServiece = new AuthService();

export default exporServiece;
