# Cardacci Personal Website

This personal website showcases who I am and various aspects of my life, including my professional experience, interests in technology and programming, cryptocurrency insights, economic analysis, DJing experiences, and travel adventures.

## Project Structure

The project is organized as follows:

```
i
├── .github
│	└── workflows
├── .vscode
│	└── settings.json
├── public
│	├── assets
│	└── ...
├── src
│	├── assets
│	│	└── images
│	├── components
│	│	├── common
│	│	│	├── BaseView.tsx
│	│	│	├── ContentCard.tsx
│	│	│	└── ...
│	│	├── layout
│	│	│	├── Header.tsx
│	│	│	└── SidebarNavigation.tsx
│	│	└── sections
│	│		├── Crypto
│	│		├── DJing
│	│		├── Economics
│	│		├── Resume
│	│		│	├── tabs
│	│		│	│	├── Experience.tsx
│	│		│	│	├── Projects.tsx
│	│		│	│	└── ...
│	│		│	└── Resume.tsx
│	│		├── Tech
│	│		├── Travel
│	│		└── Home.tsx
│	├── styles
│	│	├── app.css
│	│	└── tailwind.css
│	├── utils
│	│	├── constants
│	│	│	├── companies.ts
│	│	│	├── skills.ts
│	│	│	└── ...
│	│	├── helpers
│	│	├── hooks
│	│	└── index.ts
│	├── App.tsx
│	├── main.tsx
│	└── vite-env.d.ts
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Technologies Used

- **GitHub Actions**: For automated deployment to GitHub Pages.
- **React 19**: For building the user interface with functional components and hooks.
- **React Router 7**: For client-side routing between different sections.
- **Tailwind CSS v4**: For utility-first styling with responsive design support.
- **TypeScript 5.8**: For type safety, better developer experience, and code reliability.
- **Vite 6**: For fast development and optimized builds.
- **DaisyUI**: For additional UI components and design system.
- **ESLint 9**: For code linting with modern configuration.
- **PostCSS**: For CSS processing and Tailwind integration.

## Project Organization

The codebase is organized following modern React best practices:

- **Feature-based Structure**: Components are organized by feature/section rather than by type.
- **Shared Components**: Common reusable components are placed in the `common` folder.
- **Layout Components**: Navigation and layout components are in the `layout` folder.
- **Utility Functions**: Helper functions, constants, and custom hooks are centralized in `utils`.
- **Asset Management**: Images and files are organized by feature in `assets/images` and `assets/files`.
- **Type Safety**: Full TypeScript coverage with strict mode enabled.
- **Route Configuration**: Centralized routing configuration with nested route support.

## Features

- **Home Section**: Personal introduction with profile image and social links.
- **Resume Section**: Professional CV with education, experience, skills, and projects.
- **Crypto Section**: Information and insights about cryptocurrencies and blockchain innovations.
    - **Bitcoin History**: Detailed analysis of Bitcoin's price history and market cycles.
    - **Fair Value Analysis**: Cryptocurrency valuation methodologies and market analysis.
- **Economics Section**: Economic analysis and market insights.
    - **18 Year Real Estate Cycle**: Analysis of property market cycles and timing.
    - **Periods When to Make Money**: Market timing strategies and investment phases.
- **Tech Section**:
    - **Project Technologies**: Technologies used in this portfolio project.
- **DJing Section**:
    - **DJ Info**: Music experiences and equipment information.
    - **Sets**: DJ sets and performances.
    - **Track Classifier**: Custom tool for DJ track tagging with social media links.
- **Travel Section**: Adventures and travel experiences around the world.
- **Modern UI/UX**:
    - **Gradient Header**: Beautiful cyan-to-pink gradient on the main title.
    - **Blur Overlay Navigation**: Modern sidebar with backdrop blur effect.
    - **Responsive Design**: Optimized for both mobile and desktop experiences.
    - **Animated UI Elements**: Smooth transitions, typing effects, and card hover animations.
    - **Mobile-First Navigation**: Hamburger menu positioned for optimal mobile UX.
- **Tab Navigation**: URL-based tab system in multiple sections.
- **Version Tracking**: Automatic versioning based on build timestamp (format: YY.MMDD.HHMM).

## UI/UX Highlights

- **Header**: Fixed header with gradient text and typing animation effect
- **Navigation**: Modern sidebar with blur overlay, responsive positioning, and smooth animations
- **Typography**: Improved text contrast and readability with proper color hierarchy
- **Interactive Elements**: Card hover effects with subtle animations
- **Color Scheme**: Professional blue/purple gradient theme throughout the application

## Build and Versioning

The project includes an automatic versioning system:

- The version is generated at build time in the format `YY.MMDD.HHMM`
    - Current version: `1.06.24` (June 2024)
    - Example: `25.1101.1430` (for November 1, 2025 at 14:30)
- The versioning system is configured in `vite.config.ts`
- The version is displayed in the footer of the website
- This approach ensures each build can be uniquely identified by when it was created

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions:

- Every push to the `main` branch triggers the deployment workflow.
- The workflow builds the project and publishes it to the `gh-pages` branch.
- Configuration is defined in `.github/workflows/deploy.yml`
- The site is accessible at: `https://cardacci.github.io/i/`

The deployment process includes:

1. Checking out the repository.
2. Setting up Node.js environment.
3. Installing dependencies.
4. Building the project (which includes generating the version).
5. Running the `fix-paths.js` script to adjust paths for GitHub Pages.
6. Deploying to GitHub Pages.

## Getting Started

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd i
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
5. Build for production:
    ```bash
    npm run build
    ```

## Scripts

- `npm run build`: Build for production and run the fix-paths script
- `npm run dev`: Start the development server
- `npm run format`: Format code using Prettier
- `npm run format:quotes`: Format code and fix quotes using Prettier and ESLint
- `npm run lint`: Run ESLint to check for code issues and auto-fix
- `npm run lint:check`: Run ESLint to check for code issues without fixing
- `npm run preview`: Preview the production build locally

## Dependencies

### Core Dependencies

- **React 19.1.0**: UI library for building user interfaces
- **React DOM 19.1.0**: React rendering library for the web
- **React Router DOM 7.6.2**: Declarative routing for React

### Development Dependencies

- **Vite 6.3.5**: Fast build tool and development server
- **TypeScript 5.8.3**: Typed superset of JavaScript
- **Tailwind CSS 4.1.11**: Utility-first CSS framework
- **ESLint 9.28.0**: Code linting tool
- **Prettier 3.5.3**: Code formatter
- **DaisyUI 5.0.50**: Component library for Tailwind CSS

## Available Routes

The application features the following main sections:

- `/` - Home page with personal introduction
- `/resume` - Resume section with tabs for Personal, Education, Experience, Skills, and Projects
- `/economics` - Economics section with 18 Year Real Estate Cycle and Market Timing analysis
- `/crypto` - Cryptocurrency section with Bitcoin History and Fair Value Analysis
- `/tech` - Technology section with Project Technologies
- `/djing` - DJing section with DJ Info, Sets, and Track Classifier
- `/travel` - Travel experiences and adventures

All routes support hash-based routing for GitHub Pages compatibility.
