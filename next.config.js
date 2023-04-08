/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    async rewrites() {
        console.log("Rewrites called");

        return [
            {
                source: "/:path*",
                destination: "https://www.melon.com/:path*",
            },
        ];
    },
};

module.exports = nextConfig;
