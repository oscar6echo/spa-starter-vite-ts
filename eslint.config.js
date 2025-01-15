// @ts-check

import tseslint from "typescript-eslint";

export default tseslint.config(
  tseslint.configs.strictTypeChecked,
  //   tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["eslint.config.js"],
          defaultProject: "tsconfig.json",
        },
        tsconfigRootDir: String(import.meta.dirname),
      },
    },
  }
);
