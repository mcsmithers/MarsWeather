module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{vue}',
    '!**/node_modules/**'
  ],
  coverageReporters: [
    'html',
    'text-summary'
  ]
}
