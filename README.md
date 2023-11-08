# Playground React (Template)

> Template repository for React Monorepo projects
> Initially built by following: Advanced React for Enterprise Applications: react for Senior Engineers (udemy)
> Improved by following:
>
> -   Monorepo's - A Beginner's Guide (udemy)
> -   The Complete Github Actions & Workflows Guide (udemy)
> -   Master the Core Concepts of React and Storybook (udemy)

## 1. Introduction

The project comprises multiple packages as sub-projects, with dependencies between them. The monorepo structure is managed using Yarn and Lerna. The following sections provide a detailed breakdown of the project structure, technologies used, and the configuration of various tools and libraries to ensure consistency, quality, and automated workflows across the project.

## 2. Project Structure

### 2.1 Monorepo Setup

-   **Monorepo Management**: Yarn and Lerna are used to manage the monorepo, ensuring consistent dependency versions and streamlined project scripts across packages.
-   **Atomic Design**: Used to organize components into atoms, molecules, organisms, templates, and pages.
-   **Node.js**: 18.17.1

### 2.2 Packages

-   **React Component Library**: A library of reusable React components with a custom build system using Rollup.
-   **Playground**: A playground for testing components, with a custom build using Parcel.
-   **Foundation**: A collection of utilities written in TypeScript, packaged separately.
-   **Storybook**: A separate package for documenting and visually testing components in isolation.
-   **Living Style Guide**: A collections of SCSS variables, mixins, and functions, and component styles packaged separately.

## 3. Technology Stack

-   **Front-end**: React.js, TypeScript, SCSS
-   **Testing**: Jest for unit testing, Storybook and Chromatic for visual testing.
-   **Linting and Formatting**: Prettier, ESLint, and Stylelint.
-   **Version Control**: Git, with Husky for git hooks, Commit Lint, and Commitzen for structured commit messages.

## 4. Development and Build Tools

-   **Component Development**: Storybook for developing and documenting components in an isolated environment.
-   **Build Systems**: Custom build setups using Rollup for the component library and Parcel for the playground.

## 5. Continuous Integration and Deployment

-   **GitHub Actions**: Set up to automate testing, building, and deployment workflows.
-   **Chromatic Deployment**: Automatic deployment to Chromatic for visual regression testing and Storybook hosting.

## 6. Testing and Quality Assurance

-   **Unit Testing**: Jest is used for unit testing components and utility functions.
-   **Visual Testing**: Storybook and Chromatic are used for visual testing of components.
-   **Linting and Formatting**: Prettier, ESLint, and Stylelint are configured to ensure code consistency and quality.

## 7. Version Control and Commit Conventions

-   **Git Hooks**: Husky is configured to enforce linting and testing before commits and pushes.
-   **Commit Conventions**: Commit Lint and Commitzen are used to ensure structured and meaningful commit messages.

## 8. Root Commands / Scripts

-   `npm install -g yarn` - install yarn globally
-   `yarn install` - install dependencies
-   `yarn build:dev` - build all packages for development
-   `yarn build:prod` - build all packages for production
-   `yarn test` - run all tests
-   `yarn lint` - run all linters
-   `yarn formats:check` - check all formats
-   `yarn formats:write` - fix all formats
-   `yarn start` - start and watch all packages in development mode
-   `yarn nx graph` - show dependency graph using NX
-   `yarn commit` - commit changes using Commitizen
-   `yarn lerna version` - bump version of all packages using Lerna

## 9. CSS Architecture Checklist

-   Organized - fixed code structure
-   No specificity issues
-   Atomic Design principles applied
-   Easy to understand (comments, variables, etc)
-   Reusable across teams / projects

## 10. Backlog

### Future Improvements or Ideas

-   [ ] Refactor 'prj--fe-ci-build-system' to use monorepo structure as used in this project (prj--react-playground-typescript)
-   [ ] Refactor packages/scss to 'prj--fe-ci-build-system'
-   [x] Move Storybook as separate library `packages/storybook` - NOT inside `packages/react`
-   [x] Rename `packages/scss` to `packages/living-style-guide`
-   [x] Rename `packages/react` to `packages/react-components-library`
-   [ ] Move `playground` to `frontend`
    -   [ ] `playground` is private and it is used only for development and testing purposes
-   [x] Refactor `prj--react-component-library` to use monorepo structure as used in this project (prj--react-playground-typescript)
-   [ ] follow course instructions to deploy Storybook to Netlify
-   [ ] refactor CI build for better performance (use CI for better performance)
    -   [ ] lint, formats and test
        -   [ ] -   run locally on committing for development branches
        -   [ ] -   run in CI for master branch and on pull requests to release branches

### Issues

#### 1. Can't publish to npm registry

> on: `yarn lerna publish`

Logs:

```bash
lerna notice cli v7.3.0
lerna info versioning independent
lerna WARN Yarn's registry proxy is broken, replacing with public npm registry
lerna WARN If you don't have an npm token, you should exit and run `npm login`
lerna info Assuming all packages changed
... some logs ...
lerna WARN notice Package failed to publish: @prj--react-playground-typescript/foundation
lerna ERR! E404 Not found
lerna ERR! errno "undefined" is not a valid exit code - exiting with code 1
lerna WARN notice Package failed to publish: @prj--react-playground-typescript/lsg
lerna ERR! E404 Not found
lerna ERR! errno "undefined" is not a valid exit code - exiting with code 1
error Command failed with exit code 1.
```
