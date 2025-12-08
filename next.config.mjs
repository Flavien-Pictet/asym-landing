/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'public/assets/images/**/*',
      ],
    },
  },
};

export default nextConfig;
