module.exports = {
  // plugins: [require('prettier-plugin-tailwindcss')],
  singleQuote: true,
  overrides: [
    {
      files: ["**/**"],
      options: {
        plugins: ["prettier-plugin-tailwindcss"]
      },
    },
  ],
};
