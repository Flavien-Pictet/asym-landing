/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'public/assets/images/admitted-tips/**/*',
      ],
    },
  },
};

export default nextConfig;
