# Personal Website

This project is a personal website that showcases various aspects of my life, including my professional experience, interests in technology and programming, cryptocurrency insights, DJing experiences, and travel adventures.

## Project Structure

The project is organized as follows:

```
personal-website
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
│   │   └── shared
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── SocialLinks.tsx
│   ├── hooks
│   │   └── useTheme.ts
│   ├── styles
│   │   ├── global.css
│   │   └── theme.ts
│   ├── utils
│   │   └── index.ts
│   ├── types
│   │   └── index.ts
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── Resume.tsx
│   │   ├── Crypto.tsx
│   │   ├── Tech.tsx
│   │   ├── DJing.tsx
│   │   └── Travel.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── public
│   └── assets
│       └── data.json
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type safety and better development experience.
- **Vite**: For fast development and build processes.
- **CSS**: For styling the components.

## Features

- **Home Section**: Displays personal information and an introduction.
- **Resume Section**: Presents the user's CV.
- **Crypto Section**: Provides insights about cryptocurrencies.
- **Tech Section**: Shares information about technology and programming.
- **DJing Section**: Showcases DJing experiences and related content.
- **Travel Section**: Shares travel experiences and related information.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd personal-website
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## License

This project is licensed under the MIT License.