# Cardacci Personal Website

This personal website showcases who I am and various aspects of my life, including my professional experience, interests in technology and programming, cryptocurrency insights, DJing experiences, and travel adventures.

## Project Structure

The project is organized as follows:

```
i
├── public
│   └── assets
│       └── data.json
├── src
│   ├── components
│   │   ├── layout
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── sections
│   │   │   ├── Home.tsx
│   │   │   ├── Resume.tsx
│   │   │   ├── Crypto.tsx
│   │   │   ├── Tech.tsx
│   │   │   ├── DJing.tsx
│   │   │   └── Travel.tsx
│   ├── styles
│   │   ├── global.css
│   │   └── tailwind.css
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── .eslintrc.json
├── .prettierrc
└── README.md
```

## Technologies Used

- **React**: For building the user interface with functional components and hooks.
- **React Router**: For client-side routing between different sections.
- **Tailwind CSS**: For utility-first styling with responsive design support.
- **TypeScript**: For type safety, better developer experience, and code reliability.
- **Vite**: For fast development and optimized builds.

## Code Standards

This project follows industry best practices and coding standards:

- **ESLint**: Configured with recommended React and TypeScript rules.
- **Prettier**: For consistent code formatting across the codebase.
- **Path Aliases**: Using `@/` for cleaner imports from the src directory.
- **Component Organization**: Structured by feature and responsibility.
- **Modern JavaScript**: Using ES modules with proper import ordering.

## Features

- **Home Section**: Personal introduction with profile image and social links.
- **Resume Section**: Professional CV with education, experience, and skills.
- **Crypto Section**: Information and insights about cryptocurrencies.
- **Tech Section**: Technology articles and programming information.
- **DJing Section**: Music experiences and a custom track classification tool.
- **Travel Section**: Adventures and travel experiences around the world.
- **Responsive Design**: Optimized for both mobile and desktop experiences.
- **Animated UI Elements**: Smooth transitions and typing effects.
- **Tab Navigation**: URL-based tab system in the DJing section.

## Getting Started

1. Clone the repository:
    ```
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```
    cd i
    ```
3. Install the dependencies:
    ```
    npm install
    ```
4. Start the development server:
    ```
    npm run dev
    ```
5. Build for production:
    ```
    npm run build
    ```

## Scripts

- `npm run build`: Build for production
- `npm run dev`: Start the development server
- `npm run format`: Format code using Prettier
- `npm run lint`: Run ESLint to check for code issues
- `npm run preview`: Preview the production build locally

## License

This project is licensed under the MIT License.
