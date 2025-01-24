module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'google',
    'plugin:react/recommended', // React-specific linting rules
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'react/prop-types': 'warn', // Warn when prop types are not defined
    'react/jsx-uses-react': 'error', // Prevent unused React import in JSX files
    'react/jsx-uses-vars': 'error', // Prevent unused variables in JSX files
    'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }], // Allow unused variables prefixed with _ (common for unused function args)
    'max-len': ['error', { 'code': 100 }], // Enforce a maximum line length of 100 characters
    'object-curly-spacing': ['error', 'always'], // Ensure spacing inside curly braces
    'comma-dangle': ['error', 'always-multiline'], // Ensure consistent use of trailing commas
    'indent': ['error', 2], // Enforce 2 spaces indentation
    'no-console': 'warn', // Warn on console.log usage
  },
};
