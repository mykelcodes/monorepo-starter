module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'prettier', '@react-native'],
    plugins: ['simple-import-sort'],
    rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            },
        ],
    },
    globals: {
        React: true,
        JSX: true,
    },
    parser: '@typescript-eslint/parser',
    ignorePatterns: ['node_modules/', 'out/', '.expo/', 'build/', 'dist/'],
    parserOptions: {
        requireConfigFile: false,
    },
};
