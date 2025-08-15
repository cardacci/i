# Cardacci Personal Website

This personal website showcases who I am and various aspects of my life, including my professional experience, interests in technology and programming, cryptocurrency insights, DJing experiences, and travel adventures.

## Project Structure

The project is organized as follows:

```
i
├── .github
│   └── workflows
│       └── deploy.yml
├── .vscode
│   └── settings.json
├── public
│   ├── assets
│   │   └── data.json
│   ├── _redirects
│   ├── .nojekyll
│   ├── 404.html
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── site.webmanifest
│   ├── web-app-manifest-192x192.png
│   └── web-app-manifest-512x512.png
├── src
│   ├── assets
│   │   └── images
│   │       └── profile.png
│   ├── components
│   │   ├── common
│   │   │   ├── TabView.tsx
│   │   │   └── UnderConstruction.tsx
│   │   ├── layout
│   │   │   ├── Header.tsx
│   │   │   └── SidebarNavigation.tsx
│   │   ├── sections
│   │   │   ├── DJing
│   │   │   │   ├── DjInfo.tsx
│   │   │   │   ├── DJing.tsx
│   │   │   │   └── TrackClassifier.tsx
│   │   │   ├── Tech
│   │   │   │   ├── MySkills.tsx
│   │   │   │   ├── ProjectTech.tsx
│   │   │   │   └── Tech.tsx
│   │   │   ├── Crypto.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── Resume.tsx
│   │   │   └── Travel.tsx
│   ├── styles
│   │   ├── app.css
│   │   └── tailwind.css
│   ├── types
│   │   └── index.ts
│   ├── utils
│   │   ├── constants
│   │   │   └── techCategories.ts
│   │   ├── hooks
│   │   │   └── useCardHover.ts
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── fix-paths.js
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Technologies Used

- **GitHub Actions**: For automated deployment to GitHub Pages.
- **React**: For building the user interface with functional components and hooks.
- **React Router**: For client-side routing between different sections.
- **Tailwind CSS v4**: For utility-first styling with responsive design support.
- **TypeScript**: For type safety, better developer experience, and code reliability.
- **Vite**: For fast development and optimized builds.

## Code Standards

This project follows industry best practices and coding standards:

- **ESLint**: Configured with recommended React and TypeScript rules.
- **Prettier**: For consistent code formatting across the codebase.
- **Path Aliases**: Using `@/` for cleaner imports from the src directory.
- **Component Organization**: Structured by feature and responsibility with clear separation.
- **Modern JavaScript**: Using ES modules with proper import ordering.
- **Organized Code Structure**: Using comment sections like `/* ===== State ===== */` for better readability.

## Features

- **Home Section**: Personal introduction with profile image and social links.
- **Resume Section**: Professional CV with education, experience, and skills.
- **Crypto Section**: Information and insights about cryptocurrencies and blockchain innovations.
- **Tech Section**:
    - **My Skills**: Interactive technology showcase with years of experience
    - **Project Technologies**: Technologies used in this portfolio
- **DJing Section**:
    - **DJ Info**: Music experiences and equipment information
    - **Track Classifier**: Custom tool for DJ track tagging with social media links
- **Travel Section**: Adventures and travel experiences around the world.
- **Modern UI/UX**:
    - **Gradient Header**: Beautiful cyan-to-pink gradient on the main title
    - **Blur Overlay Navigation**: Modern sidebar with backdrop blur effect
    - **Responsive Design**: Optimized for both mobile and desktop experiences
    - **Animated UI Elements**: Smooth transitions, typing effects, and card hover animations
    - **Mobile-First Navigation**: Hamburger menu positioned for optimal mobile UX
- **Tab Navigation**: URL-based tab system in Tech and DJing sections.
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
    - Example: `25.0604.1745` (for June 4, 2025 at 17:45)
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
- `npm run lint`: Run ESLint to check for code issues
- `npm run preview`: Preview the production build locally

## Browser Compatibility

This website is optimized for modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Author

Gabriel Cardacci - Principal Frontend Engineer, Software Engineer, Investor, Crypto Enthusiast, World Explorer, and DJ.
