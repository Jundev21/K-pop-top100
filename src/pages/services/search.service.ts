import api from "./api";
import axios from "axios";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

// 검색 결과 가져오기

class AuthService {
    async getYoutubeLink(searchWord: string) {
        console.log("searching youtube");
        return api
            .get(
                `/search?maxResults=1&q=${searchWord}&part=snippet&key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`
            )
            .then((response) => {
                console.log("success");
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
