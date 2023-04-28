import bundleAnalyzer from '@next/bundle-analyzer'
import { withAxiom } from 'next-axiom'

import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()
const withBundleAnalyzer = bundleAnalyzer({
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  transpilePackages: [
    '@rotshi/ui',
    '@rotshi/uikit',
    '@rotshi/localization',
    '@rotshi/hooks',
    '@rotshi/utils',
    '@rotshi/tokens',
    '@rotshi/farms',
  ],
}

export default withBundleAnalyzer(withVanillaExtract(withAxiom(nextConfig)))
