This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Configuration

This project uses `next.config.mjs` for Next.js configuration. You can find and modify the configuration in this file.

## Testing

To run tests:

`npm run test`

To run tests in watch mode:

`npm run test:watch`

The project includes tests for utility functions, including:

- `src/utils/search.test.ts`: Tests for the search functionality

## Linting

To run ESLint:

`npm run lint`

## Development Workflow

This project uses Husky to manage Git hooks:

- Pre-commit: Runs Prettier to format staged files.
- Pre-push: Runs tests when pushing to the main branch.

Make sure to run `npm install` to set up these hooks after cloning the repository.

## Development

This project uses Husky for pre-commit and pre-push hooks to ensure code quality.

### Pre-commit Hook

The pre-commit hook runs `lint-staged`, which:

- Runs ESLint and automatically fixes issues on staged JavaScript and TypeScript files.
- Runs Prettier on staged JavaScript, TypeScript, JSON, and Markdown files.

### Pre-push Hook

The pre-push hook runs tests when pushing to the main branch.

To skip the pre-commit or pre-push hooks, you can use the `--no-verify` flag:

`git commit -m "Your commit message" --no-verify`
`git push origin main --no-verify`

### Setting up Husky

After cloning the repository, run:

`npm install`

This will automatically set up the Husky hooks due to the "prepare" script in package.json.

If you encounter any issues with Husky, you can try running:

`npx husky`

This will ensure that Husky is properly installed and configured.
