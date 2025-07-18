<!-- omit from toc -->
# Portfolio Web App
A portfolio web application built with React, TypeScript, and Material-UI, showcasing professional experience, technical skills, and personal projects.
Built with Redux Toolkit for state management, the app dynamically loads content from JSON data files and includes comprehensive testing with Jest and React Testing Library.
The application is deployed via GitHub Pages and demonstrates proficiency in modern web development practices including TypeScript, responsive design, and CI/CD workflows.

## Tech Stack

- **Frontend**: React, TypeScript, Material-UI
- **State Management**: Redux Toolkit
- **Testing**: Jest, React Testing Library
- **Code Quality**: ESLint, Prettier
- **Deployment**: GitHub Pages, GitHub Actions CI/CD

<!-- omit from toc -->
## Table of Contents
- [Tech Stack](#tech-stack)
- [Development](#development)
  - [Running the Application](#running-the-application)
  - [Building the Application](#building-the-application)
  - [Deploying the Application](#deploying-the-application)
- [Code Checking](#code-checking)
- [License](#license)

## Development

### Running the Application
Run the app in the development mode:

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building the Application
Build the app for production to the `build` folder:

```sh
npm run build
```

It bundles React in production mode and optimizes the build for the best performance.

### Deploying the Application
The application is automatically deployed to GitHub Pages via GitHub Actions workflow.

1. **Automatic Trigger**: Deployment runs automatically on every push to the `main` branch
1. **Manual Trigger**: Can also be triggered manually via the GitHub Actions tab
1. **Build Process**:
   - Sets up Node.js environment with latest version
   - Installs dependencies with `npm ci`
   - Builds the production bundle with `npm run build`
   - Uploads the `build` folder as a Pages artifact
1. **Deployment**: Deploys the artifact to GitHub Pages with proper permissions

The live application is available at: [https://javidahmed64592.github.io/portfolio](https://javidahmed64592.github.io/portfolio)

## Code Checking

- **Run tests:** `npm test`
- **Run linting:** `npm run lint:fix`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
