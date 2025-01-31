/** @type {import('next').NextConfig} */
const nextConfig = {
    serverActions: {
      bodySizeLimit: '4mb',
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'elasticbeanstalk-ap-south-1-645695466637.s3.ap-south-1.amazonaws.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };

module.exports = nextConfig
