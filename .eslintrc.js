/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import',
    'jsx-a11y',
    'react',
    'react-hooks',
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'react-app'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // eslint
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'lines-around-comment': ['error', { beforeBlockComment: true }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'no-nested-ternary': 'error',
    'no-trailing-spaces': 'error',
    'prefer-object-spread': 'error',
    'no-duplicate-imports': 'warn',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false
      }
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['index', 'sibling', 'parent'],
          'object',
          'unknown'
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@/**',
            group: 'internal'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'space-before-blocks': 'error',
    'spaced-comment': ['error', 'always'],
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true
      }
    ],
    // tslint
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-interface': 1,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        interfaces: ['signature', 'field', 'constructor', 'method'],
        typeLiterals: ['signature', 'field', 'constructor', 'method']
      }
    ],
    // prettier
    'prettier/prettier': ['error', { singleQuote: true }],
    // react
    'react/jsx-sort-props': [
      1,
      {
        shorthandFirst: true,
        callbacksLast: true,
        ignoreCase: false,
        noSortAlphabetically: true,
        reservedFirst: true
      }
    ],
    'react/sort-comp': [
      1,
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'rendering'],
        groups: {
          rendering: ['/^render.+$/', 'render']
        }
      }
    ],
    'react/jsx-newline': [1, { prevent: true }],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }]
  }
}
