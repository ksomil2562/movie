/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'in.bmscdn.com',
            },
            {
                protocol: 'https',
                hostname: 'assets-in.bmscdn.com',
            },
            {
                protocol: 'https',
                hostname: 'wallpapercave.com',
            },
            {
                protocol: 'https',
                hostname: 'www.bollywoodhungama.com',  // Add this line
            },
        ],
    },
}

export default nextConfig;
