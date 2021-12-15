/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  images: {
    formats: ['image/webp']
  },
  reactStrictMode: true
};
