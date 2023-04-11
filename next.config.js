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
};

module.exports = nextConfig;
