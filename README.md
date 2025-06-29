# Tauri + Next.js + Sass Template Repo

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern desktop application template combining Tauri's Rust backend with a Next.js frontend, featuring Sass styling and TypeScript support.
Use this repository as a template for you next multi-platform desktop application.

## Features

- **Tauri** - Build smaller, faster, and more secure desktop applications
- **Next.js** - React framework for server-side rendering and static generation
- **TypeScript** - Type-safe JavaScript development
- **Sass** - Professional-grade CSS extension
- **ESLint** - Code quality and consistency
- **Pre-configured** - Ready-to-develop template

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- [Rust](https://www.rust-lang.org/tools/install) (latest stable version)
- [Tauri CLI](https://tauri.app/v1/guides/getting-started/prerequisites)

This template was generated via the command

```bash
npm create tauri-app@latest
```

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo   
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Development mode**

   ```bash
   npm run tauri dev
   # or
   yarn tauri dev
   ```

4. **Production build**

   ```bash
   npm run tauri build
   # or
   yarn tauri build
   ```

## Project Structure

```bash
├── src-tauri/         # Tauri backend (Rust)
├── src/               # Next.js frontend
│   ├── app/           # App router structure
│   └── ...             
├── public/            # Static assets
├── .eslintrc.js       # ESLint configuration
├── next.config.js     # Next.js configuration
├── tsconfig.json      # Typescript configuration
└── ...
```

## Scripts

- `dev`: Start development server (Next.js + Tauri)
- `build`: Create production build
- `tauri dev`: Tauri development mode
- `tauri build`: Tauri production build
- `lint`: Run ESLint
- `lint:fix`: Run ESLint with auto-fixing

## Styling with Sass

This template includes Sass support out of the box. Import your `.scss` files directly in your components:

```scss
// styles/main.scss
$primary-color: #3498db;

.container {
  color: $primary-color;
}
```

```typescript
// In your component
import styles from '../styles/main.scss';
```

## TypeScript Support

All files are configured for TypeScript. Example component:

```typescript
interface Props {
  title: string;
}

const MyComponent: React.FC<Props> = ({ title }) => {
  return <h1>{title}</h1>;
};
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Customization Tips

1. Replace `your-username/your-repo` with your actual GitHub repository path
2. Add any additional features or configurations specific to your template
3. Include screenshots or gifs if you want to showcase the template
4. Add a "Roadmap" section if you have planned features
5. Include troubleshooting tips for common setup issues
