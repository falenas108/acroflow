module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'airbnb-typescript',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
    ],
    rules: {
        'global-require': 0,
        'react/no-unescaped-entities': 0,
        'import/prefer-default-export': 0,
        '@typescript-eslint/no-use-before-define': 0, // turns off
        '@typescript-eslint/no-unused-vars': 1, // warning, not error
    },
};
