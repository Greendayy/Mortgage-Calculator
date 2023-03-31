/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["antd-mobile"],
};

module.exports = nextConfig;
const withTM = require("next-transpile-modules")(["antd-mobile"]);

module.exports = withTM({
  // 你项目中其他的 Next.js 配置
});
