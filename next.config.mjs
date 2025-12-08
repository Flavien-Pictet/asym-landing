/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize serverless function size by excluding large packages
  serverExternalPackages: [],
};

export default nextConfig;
