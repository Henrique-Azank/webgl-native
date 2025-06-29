# Three.js native app

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Created this repository as a way to render Three.js scenes in a separate environment with access to the user's local file system and other
utilities that a framework like Tauri enables. The intention is to provide a nice environment for testing out 3D-based applications in a 
way that we can leverage both the powerful WebGL API and not to be overly concerned over building requirements for different platforms.

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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
