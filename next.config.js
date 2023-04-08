/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    async rewrites() {
        console.log("Rewrites called");

        return [
            {
                source: "/melonPage",
                destination: "https://www.melon.com/chart/index.htm",
            },
        ];
    },
};

module.exports = nextConfig;
