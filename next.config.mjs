/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'caas-tenants-assets.s3.eu-west-3.amazonaws.com'
            }
        ]
    },
};

export default nextConfig;
