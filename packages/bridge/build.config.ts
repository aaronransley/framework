import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  emitCJS: false,
  entries: [
    'src/module',
    'src/vite/index',
    { input: 'src/runtime/', outDir: 'dist/runtime', format: 'esm', declaration: true }
  ],
  externals: [
    'webpack',
    'vite'
  ]
})
