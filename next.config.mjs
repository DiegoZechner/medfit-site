/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/haarentfernung',
        destination: '/haarentfernung-dornbirn',
        permanent: true,
      },
      {
        source: '/gesicht',
        destination: '/gesichtsbehandlung-dornbirn',
        permanent: true,
      },
      {
        source: '/koerperformung',
        destination: '/koerperformung-dornbirn',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;

