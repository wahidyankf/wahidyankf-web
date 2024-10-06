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

Wahidyan Kresna Fridayoka - [wahidyan.com](https://wahidyan.com)

## Project Structure

The project follows a standard Next.js structure with some custom organization:

- `src/`: Contains the main application code
  - `app/`: Next.js App Router pages and layouts
  - `components/`: Reusable React components
  - `lib/`: Utility functions and shared logic
  - `styles/`: Global styles and Tailwind CSS configuration
- `public/`: Static assets like images and fonts
- `tests/`: Test files for components and utilities

### Layout

The `RootLayout` component in `src/app/layout.tsx` provides the basic structure for all pages. It includes:

- Metadata configuration for SEO optimization
- Global styles and font settings
- The main content area wrapped in a div with the Inter font applied
- A `ScrollToTop` component for improved user experience

This layout ensures consistent styling and structure across all pages while allowing for easy customization and testing.

### Key Components

- `HighlightText`: A reusable component for highlighting search terms within text
- `ScrollToTop`: A utility component to allow users to quickly return to the top of the page

### Testing

The project uses Vitest for unit and component testing. Test files are located alongside the components they test, with additional test utilities in the `tests/` directory.

### Styling

Tailwind CSS is used for styling, with custom configurations in `tailwind.config.js`. Global styles are defined in `src/app/globals.css`.
