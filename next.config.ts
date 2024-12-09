/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint warnings/errors during the build process
  },
  // Add other Next.js config options here if needed
};

module.exports = nextConfig;
