/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath:
    process.env.NODE_ENV === "production" ? "/solarpunk25-schedule" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
