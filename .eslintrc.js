module.exports = {
    // 'parser': 'babel-eslint',
    'parserOptions': {
        'parser': 'babel-eslint',
        'ecmaVersion': '2018',
        'sourceType': 'module',
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/essential',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    'plugins': [
    //     'import',
        // 'vue',
    ],
    'env': {
        'es6': true,
    },
    'settings': {
        'import/resolver': 'webpack',
    },
    'rules': {
        // 不要分号
        'semi': [1, 'never', { 'beforeStatementContinuationChars': 'always' }],
        'no-console': 0,
        'no-template-curly-in-string': 2,
        'no-extra-parens': 1,
        'import/no-named-as-default-member': 0,
        'comma-dangle': [1, 'always-multiline'],
        'no-fallthrough': 0,
    },
}
