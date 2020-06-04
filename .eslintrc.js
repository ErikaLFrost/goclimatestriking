module.exports = {
  "extends": ["react-app",],
  "plugins": [
    "prettier",
    "import"
  ],
  "rules": {
    "import/no-unresolved": 2,
    "react-hooks/exhaustive-deps": 0,
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "es5"
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "src/"]
      }
    }
  }
}