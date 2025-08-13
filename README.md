# NovaFix - On-site Repair Service Landing Page

NovaFix is a modern, responsive landing page built with **Next.js**, **Tailwind CSS**, and **Framer Motion**, designed for a fictional startup offering **on-site smartphone and laptop repairs within 60 minutes**.  
This project is fully theme-enabled (Light/Dark mode) using **next-themes** and includes smooth animations and interactive stats.

---

## 🚀 Features
- **Hero Section** — Fullscreen background image with overlay and call-to-action.
- **Theme Toggle** — Light/Dark mode with persistence.
- **Animated Stats** — Device repair count using `react-countup`.
- **Framer Motion Animations** — Smooth entrance effects.
- **Responsive UI** — Tailored for mobile, tablet, and desktop.
- **Accessible Components** — Proper labels & semantics.

---

## 🛠 Dependencies
This project uses the following libraries:

| Package           | Purpose                           |
| ----------------- | --------------------------------- |
| **next**          | React framework for SSR & routing |
| **react**         | UI library                        |
| **tailwindcss**   | Utility-first CSS framework       |
| **next-themes**   | Theme (Light/Dark) management     |
| **framer-motion** | Animations                        |
| **react-countup** | Animated number counters          |
| **lucide-react**  | Icons                             |
---

## My Approach
- **Planning UI Structure** -Broke down the page into reusable components (Hero, CountUpStat, ThemeToggle, etc.).

- **Theme Integration** - Added next-themes and applied conditional className styles for dark/light mode support.

- **Styling** - Used Tailwind utility classes for fast and consistent styling.

- **Animations** - Integrated framer-motion for subtle UI animations.

- **Testing Responsiveness** - Verified UI in multiple screen sizes using browser dev tools.

- **Polishing** - Adjusted colors, overlay opacity, and typography for better readability.
---

## AI Tools Usage
- **ChatGPT** - Helped in structuring README, optimizing Tailwind classes, and suggesting animation improvements.
- **Cursor** - Used for AI-assisted code generation, debugging, and quick refactoring within the editor.
---

## Working Section
- **book repair button** - When click on book repair button it opens the modal form for booking the repairing slot. I have applied validations on each field in the form. When try to submit form without filling the fields it will give global error message that all fields are required to fill. When form is submitted it will show the message in modal and also show the toast message on right top corner.
-  **Service section** - Services section shows the available services. I have used shadcn card component to render the services. Card component shows icon and text on it. When hover on it it get zoom in. And when click on it the card component get flip and shows the description which is written on backside of the card component.
-  **Our prices section** - This section is showing the dummy charges for the repairing of mobiles or laptops
-  **FAQ** - This section is showing the frequently asked questions along with the answers
-  **Footer** - Footer section shows the links to the particular section
-  **CountStatComponent** - It is showing the counter value of repaired no of mobiles/laptops
  ---
## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/saurabhraut1212/novafix.git
cd novafix
npm install
