const currentVersion = process.env.PRIMER_VERSION || require('./package.json').version

module.exports = {
  extends: ['stylelint-config-primer'],
  plugins: ['stylelint-scss', './script/stylelint-todo.cjs'],
  syntax: 'scss',
  ignoreFiles: ['src/fonts/**/*'],
  rules: {
    'scss/dollar-variable-default': [true, {ignore: 'local'}],
    'primer/no-override': false,
    'primer/colors': false,
    'primer/borders': false,
    'primer/spacing': true,
    'primer/typography': true,
    'primer/box-shadow': true,
    'primer-css/TODO': [true, {currentVersion, severity: 'error'}],
    'primer/no-undefined-vars': [true, {files: 'node_modules/@primer/primitives/dist/scss/colors*/*.scss'}],
    'primer/no-deprecated-colors': [true, {severity: 'warning'}]
  }
}
