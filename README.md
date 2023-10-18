# Playground React (Project Playground React - PPR)

> Coursework repository for the React course - Advanced React for Enterprise Applications: react for Senior Engineers

## Concepts

-   Monorepo project structure with multiple packages as sub-projects and dependencies between them
-   Rollup, Parcel and TSC as build tools
-   Storybook for component development and documentation
-   Jest for unit testing
-   TypeScript as main programming language
-   Scss for CSS styling
-   Atomic Design for component architecture
-   Husky for git hooks
-   Linting and formatting with ESLint, StyleLint and Prettier

## CSS Architecture Checklist

-   Organized - fixed code structure
-   No specificity issues
-   Atomic Design principles applied
-   Easy to understand (comments, variables, etc)
-   Reusable across teams / projects

## Prerequisites

-   Node.js
-   Yarn - `npm install -g yarn`

## Future Improvements or Ideas

-   [ ] Refactor 'prj--fe-ci-build-system' to use monorepo structure as used in this project (prj--playground-react)
-   [ ] Refactor packages/scss to 'prj--fe-ci-build-system'
-   [x] Move Storybook as separate library `packages/storybook` - NOT inside `packages/react`
-   [ ] Rename `packages/scss` to `packages/living-style-guide`
-   [ ] Rename `packages/react` to `packages/react-components-library`
-   [ ] Move `playground` to `frontend`
    -   [ ] `playground` is private and it is used only for development and testing purposes
-   [ ] Refactor `prj--react-component-library` to use monorepo structure as used in this project (prj--playground-react)

## Root Commands

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

## Issues to solve in the future

### 1. Can't publish to npm registry

> on: `yarn lerna publish`

```bash
lerna notice cli v7.3.0
lerna info versioning independent
lerna WARN Yarn's registry proxy is broken, replacing with public npm registry
lerna WARN If you don't have an npm token, you should exit and run `npm login`
lerna info Assuming all packages changed
... some logs ...
lerna WARN notice Package failed to publish: @prj--playground-react/foundation
lerna ERR! E404 Not found
lerna ERR! errno "undefined" is not a valid exit code - exiting with code 1
lerna WARN notice Package failed to publish: @prj--playground-react/scss
lerna ERR! E404 Not found
lerna ERR! errno "undefined" is not a valid exit code - exiting with code 1
error Command failed with exit code 1.
```

### Deploy Storybook to Chromatic

-   there is an issue in GitHub Actions when trying to deploy Storybook to Chromatic

### Deploy Storybook to Netlify

-   follow course instructions to deploy Storybook to Netlify

### Refactor CI Build System for better performance

-   use CI from other projects
