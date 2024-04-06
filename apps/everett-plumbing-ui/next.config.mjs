/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "assets.vercel.com",
            port: "",
            pathname: "/image/upload/**",
          },
          {
            protocol: "https",
            hostname: "d3uqsdfq5mfofg.cloudfront.net",
            port: "",
            pathname: "/**",
          },
        ],
      },
};

export default nextConfig;
