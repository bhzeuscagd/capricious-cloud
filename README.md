# Capricious Cloud Portfolio ☁️

> A modern, high-performance web portfolio built with [Astro](https://astro.build), featuring a distinct editorial design, responsive layout, and seamless interactions.

![Portfolio Preview](INSERT_YOUR_SCREENSHOT_HERE)
*Replace this text with a screenshot of your hero section*

## 📋 Overview

**Capricious Cloud** is a personal portfolio crafted to showcase creative work and professional experience. It leverages the power of Astro's island architecture to deliver zero-JavaScript-by-default performance (where possible) while maintaining a rich, interactive user experience. The design emphasizes typography, whitespace, and subtle animations to create a premium, editorial feel.

## ✨ Features

- **⚡ High Performance**: Built on Astro for blazing fast load times.
- **🎨 Editorial Design**: Custom CSS styling with a focus on typography and layout (no heavy CSS frameworks).
- **📱 Fully Responsive**: Adaptive layouts that work beautifully from mobile to large desktop screens.
- **💼 Dynamic Sections**:
  - **Hero**: Impactful first impression.
  - **About**: Editorial-style bio with detailed profile information.
  - **Experience**: Timeline of professional history.
  - **Latest Work**: Showcase of recent projects.
  - **Contact**: Functional contact form integrated with FormSubmit and custom success modal.
- **🔒 Type-Safe**: Built with TypeScript for robust and maintainable code.
- **♿ Accessible**: Semantic HTML and focus management for better accessibility.

## 🛠️ Tech Stack

- **Core**: [Astro 5.0](https://astro.build/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, Grid)
- **Typography**: [Fontsource](https://fontsource.org/)
  - Archivo
  - Bebas Neue
  - DM Serif Display
  - Six Caps
  - Space Mono

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bhzeuscagd/capricious-cloud.git
   cd capricious-cloud
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open your browser at `http://localhost:4321`

## 🏗️ Project Structure

```text
src/
├── assets/         # static assets
├── components/     # UI components (Hero, About, Form, etc.)
├── data/           # Structured data for easy content updates (TS files)
├── layouts/        # Page layouts
├── pages/          # Astro pages (Routing)
└── styles/         # Global styles and variables
```

## 🔧 Customization

Content is separated from presentation logic to make updating easy. You can modify the following files in `src/data/` to update your portfolio details without touching the components:

- `src/data/about.ts`: Edit bio, stats, and skills.
- `src/data/contact.ts`: Configure email and form settings.
- `src/data/experiences.ts`: (If applicable) Update work history.
- `src/data/projects.ts`: (If applicable) Update portfolio items.

## 📝 Scripts

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts local dev server at `localhost:4321` |
| `pnpm build` | Build your production site to `./dist/` |
| `pnpm preview` | Preview your build locally |

## 📬 Contact Form Configuration

The contact form is pre-configured to use **FormSubmit**. To activate it for your email:

1. Open `src/data/contact.ts`.
2. Update the `email` field with your address.
3. The first time you submit the form, you will receive an email to confirm the activation.

---

Designed & Built by **[CAGD]**
