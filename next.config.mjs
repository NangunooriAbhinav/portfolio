/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media.licdn.com",
      "noobsverse-cdn-public.s3.ap-south-1.amazonaws.com",
      "www.deccanchronicle.com",
    ], // Add LinkedIn's CDN domain here
  },
};

export default nextConfig;
