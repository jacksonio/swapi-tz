module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        es6: true,
        browser: true,
        amd: true,
        node: true,
    },
    plugins: ['simple-import-sort', 'import'],
    overrides: [
        {
            files: '**/*.{js,jsx}',
            env: { node: true },
            rules: {
                'simple-import-sort/imports': 'off',
                'import/order': ['error', { 'newlines-between': 'always' }],
            },
        },
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton'],
            },
        ],
    },
}
