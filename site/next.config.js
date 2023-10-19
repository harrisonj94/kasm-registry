/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'ESG Global',
    description: 'Kasm workspaces for ESG Global use.',
    icon: '/public/logo.svg',
    listUrl: 'https://harrisonj94.github.io/kasm-registry/',
    contactUrl: 'https://github.io/harrisonj94skasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
