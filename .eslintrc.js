module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "i18next"
    ],
    "rules": {
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "@typescript-eslint/indent": [2, 4],
        "indent": [2, 4],
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".tsx"] }],
        "import/no-unresolved": "off",
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": ["error", "only-multiline"],
        "eol-last": ["error", "never"],
        "padded-blocks": ["warn", "always"],
        "@typescript-eslint/consistent-type-imports": "off",
        "import/prefer-default-export": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "no-unused-vars": "warn",
        "@typescript-eslint/explicit-function-return-type": "off",
        "semi": "off",
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/no-floating-promises": "warn",
        "react/require-default-props": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/consistent-indexed-object-style": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/prefer-ts-expect-error": "off",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "react/no-deprecated": "off",
        "i18next/no-literal-string": ['error', {markupOnly: true}]
    },
    globals: {
        __IS_DEV__: true
    },
};
