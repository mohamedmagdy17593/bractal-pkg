// import _ from 'lodash'

import resolve from 'rollup-plugin-node-resolve'
import common from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

import pkg from './package.json'

const externals = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]

function makeExternalPredicate(externalsArr) {
  if (externalsArr.length === 0) {
    return () => false
  }
  const externalPattern = new RegExp(`^(${externalsArr.join('|')})($|/)`)
  return id => externalPattern.test(id)
}

function mergeInto(baseObject, objects) {
  return objects.map(o => ({...baseObject, ...o}))
}

function generateInputOutputConfig(name) {
  return {
    input: `src/${name}.js`,
    output: [
      {
        file: `dist/${name}.cjs.js`,
        format: 'cjs',
      },
      {
        file: `dist/${name}.es.js`,
        format: 'es',
      },
    ],
  }
}

const baseConfig = {
  external: makeExternalPredicate(externals),
  // sourceMap: 'inline',
  plugins: [
    resolve(),
    babel(),
    common({
      extensions: ['.js', '.jsx'],
    }),
    // sourceMaps(),
  ],
}

function log(x) {
  console.log(x)
  return x
}

export default log(
  mergeInto(baseConfig, [
    generateInputOutputConfig('main'),
    generateInputOutputConfig('core'),
    generateInputOutputConfig('coreUI'),
  ]),
)
