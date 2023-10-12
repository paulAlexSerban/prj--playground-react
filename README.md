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
-   [ ] Move Storybook as external library `packages/storybook` - NOT inside `packages/react`
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
