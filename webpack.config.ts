import path from 'path'
import webpack from 'webpack'
import { buildWebpackConfig } from './src/config/build/buildWebpackConfig'
import { BuildEnv, BuildMode, BuildPaths } from './src/config/build/types/config'

export default (env: BuildEnv): webpack.Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }

  const mode: BuildMode = env.mode || 'development'
  const PORT = env.port || 3000

  const isDev = mode === 'development'

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  })
}