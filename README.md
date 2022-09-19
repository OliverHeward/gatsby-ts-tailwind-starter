<p align="center">
  <img src="https://user-images.githubusercontent.com/26466516/169722691-77a6ca86-df54-4a0e-b952-48c3f3ed7526.png" alt="Gatsby TypeScript TS Tailwind Starter">
</p>

<br />

<div align="center"><strong>Non-opinionated TypeScript starter for Gatsby</strong></div>
<div align="center">A TypeScript starter for Gatsby, with Tailwind configured and installed.</div>

<br />

<div align="center">
  <sub>Stripped and remodelled by <a href="https://hewy.dev">Oliver Heward</a>, thoughtfully forked from <a href="https://twitter.com/jpedroschmitz">João Pedro</a></sub>
</div>

<br />

## Features

- ⚡️ Gatsby 4
- ⚛️ React 18
- ⛑ TypeScript
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- ⚙️ EditorConfig - Consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `@` prefix

## Quick Start

The best way to start with this template is using the [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/).

```
npx gatsby new starter-ts https://github.com/OliverHeward/gatsby-ts-tailwind-starter
```

### Development

To start the project locally, run:

```bash
npm run start
```

Open `http://localhost:8000` with your browser to see the result.

## Documentation

### Requirements
- Node.js >= 14.17

### Scripts

- `npm run start` — Starts the application in development mode at `http://localhost:8000`.
- `npm run build` — Compile your application and make it ready for deployment.
- `npm run serve` — Serve the production build of your site
- `npm run clean` — Wipe out the cache (`.cache` folder).
- `npm run type-check` — Validate code using TypeScript compiler.
- `npm run lint` — Runs ESLint for all files in the `src` directory.
- `npm run format` — Runs Prettier for all files in the `src` directory.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import Title from '@/components/Title';

import { Button } from '@/components/Button';
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.


## MISSING DEPENDENCIES

- gatsby-plugin-image (plus others)
	- Types need writing for
		- Header (IGatsbyImageData)


Context (global state) set up 🟩 - with menu 🟩 + portal 🟩 + Lightbox 🟧
SSR file for Portal injection 🟩
Portal Component 🟩
Header Component 🟩
Footer Component 🟩
Sidedrawer Component 🟩
Title 🟩
Text 🟩
Anchor (links && Button Link) 🟩
Buttons 🟩
Inputs (All types) 🟩
Cookie Banner
Container - (sets max width etc) 🟩
