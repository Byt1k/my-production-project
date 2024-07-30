import { BuildOptions } from './types/config'
import webpack from 'webpack'
import { buildRules } from './buildRules'
import { buildResolvers } from './buildResolvers'
import { buildPlugins } from './buildPlugins'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options

  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildRules(options),
    },
    resolve: buildResolvers(),
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined,
  }
}