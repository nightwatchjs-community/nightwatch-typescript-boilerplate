# Nightwatch Typescript Boilerplate
[![Build][github-action-badge]][github-action-build]
[![TypeScript version][ts-badge]][typescript-4-9]
[![Node.js version][nodejs-badge]][nodejs]
[![MIT][license-badge]][license]

🧑‍💻 Developer ready: This project shows example of Nightwatch end-to-end tests written in typescript.

- [Basic Examples using TypeScript](/nightwatch/examples/)
- Examples using [Page Object Model][page-object-model]
  - [Page Object Definitions](/nightwatch/pages/)
    - [Using satisfies operator](/nightwatch/pages/FileUpload.ts)
    - [Without satisfies operator](/nightwatch/pages/Dropdown.ts) (for TypeScript < 4.9)
    - [Using Page Object Sections](/nightwatch/pages/DragAndDrop.ts)
  - [Page Object Examples](/test/)
- [Custom command example](/nightwatch/custom-commands/strictClick.ts)


### Other features:
- [TypeScript][typescript] [4.9][typescript-4-9]
- [ESLint][eslint] with some initial rules recommendation
- NPM [scripts](#available-scripts) for common operations
- [.editorconfig][editorconfig] for consistent file format
- VSCode Integration
- Multiple Configurations ([Chromedriver][chromedriver], [Cucumberjs][cucumberjs], [Browserstack][browserstack])
- Cross Platform Example Tests

## Getting started

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].

### Use as a repository template
To start, just click the [Use template][template-link] link (or the green button). Start adding your code in the src.

### Clone repository

To clone the repository, use the following commands:

```sh
git clone https://github.com/nightwatchjs/nightwatch-typescript-boilerplate
cd nightwatch-typescript-boilerplate
npm install
```

## Available Scripts

- `clean` - remove transpiled files, logs and test output.
- `build` - transpile TypeScript to ES6,
- `clean:build` - run both clean and build command
- `test` - run nightwatch test,
- `test-browserstack` - run nightwatch tests on browserstack. (To run test in Browserstack, create `.env` file with the credentials)
- `lint` - lint source files,
- `lint-and-fix` - lint source files and fix the lint issue

## License

Licensed under the MIT. See the [LICENSE][license] file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-4.9-blue.svg
[github-action-badge]: https://github.com/nightwatchjs/nightwatch-typescript-boilerplate/actions/workflows/build.yml/badge.svg
[github-action-build]: https://github.com/nightwatchjs/nightwatch-typescript-boilerplate/actions/workflows/build.yml
[typescript]: https://www.typescriptlang.org/
[typescript-4-9]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html
[nodejs]: https://nodejs.org/dist/latest-v16.x/docs/api/
[nodejs-badge]: https://img.shields.io/badge/Node.js-%3E=%2016.0.0-blue.svg
[license]: https://github.com/nightwatchjs/nightwatch-typescript-boilerplate/blob/main/LICENSE.md
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[eslint]: https://github.com/eslint/eslint
[editorconfig]: https://editorconfig.org/
[cucumberjs]: https://github.com/nightwatchjs/cucumberjs-boilerplate
[browserstack]: https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs/nightwatch
[chromedriver]: https://nightwatchjs.org/gettingstarted/browser-drivers-setup/#chromedriver
[page-object-model]: https://nightwatchjs.org/guide/working-with-page-objects/
[template-link]: https://github.com/nightwatchjs/nightwatch-typescript-boilerplate/generate
