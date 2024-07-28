const { siteUrl } = require('./next-sitemap.config');

// bundle analyzer 
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'treescene.co.nz',
            port: '',
            pathname: '/**'
        }],
    },
    env: {
        url: "https://treescene.co.nz",
        siteUrl: "https://form.treescene.co.nz",
        name: "Tree Scene Tauranga",
        darkLogo: "/dark-logo.png",
        gurpreet: "/gurpreet.jpg"
    },

}

module.exports = withBundleAnalyzer(nextConfig)
