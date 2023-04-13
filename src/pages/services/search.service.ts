import api from "./api";
import axios from "axios";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

// 검색 결과 가져오기
class AuthService {
    readonly queryClient = new QueryClient();

    async getYoutubeLink(searchWord: string) {
        // return api
        //     .get(
        //         `/search?maxResults=1&q=${searchWord}&part=snippet&key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`
        //     )
        //     .then((response) => {
        //         return response.data;
        //     });

        const { isLoading, error, data } = useQuery({
            queryKey: ["repoData"],
            queryFn: () =>
                api
                    .get(
                        `/search?maxResults=1&q=${searchWord}&part=snippet&key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`
                    )
                    .then((response) => {
                        return response.data;
                    }),
        });

        if (isLoading) return "Loading...";

        if (error) return "An error has occurred: " + error.message;
    }
    async getMelonHTML() {
        return await axios.get(`/chart/index.htm`).then((response) => {
            return response.data;
        });
    }
}

let exporServiece = new AuthService();

export default exporServiece;
