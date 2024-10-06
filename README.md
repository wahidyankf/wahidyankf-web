# Personal Portfolio Website

This is a personal portfolio website built with [Next.js](https://nextjs.org), showcasing CV, personal projects, and more. It's designed to be easily customizable for anyone who wants to create their own portfolio.

## Features

- Responsive design
- CV/Resume page with searchable entries
- Personal projects showcase
- Dynamic content rendering
- SEO optimization

## Getting Started

### Prerequisites

- Node.js (v20.17.0 or later recommended)
- npm (v10.8.3 or later recommended)

### Installation

1. Clone the repository:
   `git clone https://github.com/your-username/your-portfolio-repo.git`
   `cd your-portfolio-repo`

2. Install dependencies:
   `npm install`

3. Run the development server:
   `npm run dev`

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

To use this project for your own portfolio:

1. Update `src/app/data.ts` with your personal information, work experience, education, and projects.
2. Modify the content in `src/app/page.tsx`, `src/app/cv/page.tsx`, and `src/app/personal-projects/page.tsx` to reflect your personal information and style.
3. Replace `src/app/favicon.ico` with your own favicon.
4. Update `src/app/layout.tsx` with your name and relevant metadata.

## Testing

Run tests:
`npm run test`

Run tests in watch mode:
`npm run test:watch`

## Linting and Formatting

Run ESLint:
`npm run lint`

Format code with Prettier:
`npm run format`

## Development Workflow

This project uses Husky for Git hooks:

- Pre-commit: Runs linting and formatting on staged files.
- Pre-push: Runs tests when pushing to the main branch.

## Building for Production

Build the application for production:
`npm run build`

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/) for testing
- [ESLint](https://eslint.org/) for linting
- [Prettier](https://prettier.io/) for code formatting
- [Husky](https://typicode.github.io/husky/) for Git hooks

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/your-username/your-portfolio-repo/issues) if you want to contribute.

## Author

Your Name - [Your Website](https://your-website.com)

## Project Structure

...

### Layout

The `RootLayout` component in `src/app/layout.tsx` provides the basic structure for all pages. It uses `<div>` elements to simulate the `<html>` and `<body>` structure, which allows for easier testing while maintaining the necessary attributes and classes. Next.js handles the proper HTML structure in the production build.

...
