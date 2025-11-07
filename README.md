# portfolio.app

A personal portfolio built with React + Vite + Tailwind CSS. This repository contains components for About, Experience and Projects sections plus Contact and Footer components.

## Table of contents
- [About](#about)
- [Experience](#experience)
- [Projects](#projects)
- [Run locally](#run-locally)
- [How to edit content](#how-to-edit-content)
- [Contact](#contact)
- [License](#license)

---

## About
A short personal intro shown on the Home/About section.

Example content (store/update in a component or JSON file):

```js
// src/data/about.js
export default {
  name: "Aneesh Kapoor",
  title: "Frontend Developer",
  bio:
    "I build responsive and accessible web applications with React, Tailwind and modern tooling.",
  location: "Your City, Country",
  avatar: "/src/assets/7358602-removebg-preview.png"
};
```

Render this data in `src/Components/Home/Home.jsx` or a dedicated `About` component.

---

## Experience
List of work or education entries displayed in the Experience section.

Example structure:

```js
// src/data/experience.js
export const experience = [
  {
    id: 1,
    company: "Company Name",
    role: "Frontend Developer",
    startDate: "Jan 2023",
    endDate: "Present",
    location: "City, Country",
    summary: "Built UI components using React, Tailwind CSS; improved performance and accessibility."
  },
  {
    id: 2,
    company: "Another Company",
    role: "Intern",
    startDate: "Jun 2021",
    endDate: "Dec 2022",
    location: "City, Country",
    summary: "Worked on features, bug fixes and tests."
  }
];
```

Import and map this array inside `src/Components/Experience/Experience.jsx` to render cards or list items.

---

## Projects
Project cards that show title, description (main), liveUrl and repoUrl. Example already used in `src/Components/Projects/Projects.jsx`.

Example:

```js
// src/Components/Projects/Projects.jsx (data)
const projects = [
  {
    id: 1,
    title: "Fast React Pizza App",
    main:
      "Built a React SPA using React Router with menu and order pages.",
    liveUrl: "https://fast-react-pizza-rho-self.vercel.app/",
    repoUrl: "https://github.com/aneesh-kapoor/fast-react-pizza"
  },
  // add more projects...
];
```

Project card component should provide two actionable buttons/links:
- Live / Demo (opens `liveUrl` in new tab)
- Source / GitHub (opens `repoUrl` in new tab)

Make sure each anchor uses:
```html
<a href={url} target="_blank" rel="noopener noreferrer">...</a>
```

---

## Run locally

1. Install dependencies
```bash
npm install
```

2. Start dev server
```bash
npm run dev
```

3. Build for production
```bash
npm run build
```

4. Preview production build
```bash
npm run preview
```

---

## How to edit content

- About: update `src/data/about.js` or the Home component.
- Experience: update `src/data/experience.js` or `src/Components/Experience/Experience.jsx`.
- Projects: update `src/Components/Projects/Projects.jsx` (the `projects` array).
- Contact / Footer: update `src/Components/Footer/Footer.jsx` (email, LinkedIn, GitHub).

Keep data separated from UI when possible (data files) so updates don't require changing presentation code.

---

## Contact
Footer contains clickable links for email, LinkedIn and GitHub. Example:

- Email: `mailto:aneeshkapoor786@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/aneesh-kapoor-11101996aneesh`
- GitHub: `https://github.com/aneesh-kapoor`

---

## License
This project is provided as-is. Add your preferred license (e.g. MIT) if you wish.


