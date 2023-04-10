import api from "./api";

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
}

let exporServiece = new AuthService();

export default exporServiece;
