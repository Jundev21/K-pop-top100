/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: "https://www.melon.com/:path*",
            },
        ];
    },

    images: {
        domains: ["cdnimg.melon.co.kr", "localhost"],
    },
    // images: {
    //     remotePatterns: [
    //         {
    //             protocol: "https",
    //             hostname: "cdnimg.melon.co.kr/",
    //             port: "",
    //             pathname: "/**",
    //         },
    //     ],
    // },
};

module.exports = nextConfig;
