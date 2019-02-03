import resolve from 'rollup-plugin-node-resolve'
import common from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

import pkg from './package.json'
import corePkg from './core/package.json'
import coreUIPkg from './core-ui/package.json'

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

export default [
  {
    input: 'src/index.js',
    external: makeExternalPredicate(externals),
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'es',
      },
    ],
    plugins: [
      resolve(),
      babel(),
      common({
        extensions: ['.js', '.jsx'],
      }),
    ],
  },
  {
    input: 'src/core.js',
    external: makeExternalPredicate(externals),
    output: [
      {
        file: corePkg.main,
        format: 'cjs',
      },
      {
        file: corePkg.module,
        format: 'es',
      },
    ],
    plugins: [
      resolve(),
      babel(),
      common({
        extensions: ['.js', '.jsx'],
      }),
    ],
  },
  {
    input: 'src/coreUI.js',
    external: makeExternalPredicate(externals),
    output: [
      {
        file: coreUIPkg.main,
        format: 'cjs',
      },
      {
        file: coreUIPkg.module,
        format: 'es',
      },
    ],
    plugins: [
      resolve(),
      babel(),
      common({
        extensions: ['.js', '.jsx'],
      }),
    ],
  },
]
