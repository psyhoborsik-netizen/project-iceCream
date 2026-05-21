Markdown

🍦 Project Icecream
A responsive, educational front-end web project designed to practice modern layout techniques, modular Sass architecture, and fundamental JavaScript interactivity.

🛠 Tech Stack & Tools
HTML5 – Semantic, accessible, and SEO-friendly markup structure.
CSS3 & Sass (SCSS) – Advanced styling utilizing a modular folder structure, custom variables, mixins for responsiveness, and compiled CSS.
JavaScript (ES6+) – Client-side scripting for interactive UI components (e.g., modals).
Figma – Design layout reference, pixel-perfect UI implementation, and asset extraction.
Trello – Agile task tracking, progress management, and sprint planning.
Git & GitHub – Version control and repository hosting.
📁 Project Structure
Based on the development environment setup, the repository is organized as follows:

├── .vscode/               # Workspace-specific editor configurations
├── css/                   # Automatically compiled CSS files (production)
│   ├── main.css           # Main compiled stylesheet
│   └── main.css.map       # Source map for Sass debugging
├── js/                    # JavaScript source files
│   └── modal.js           # Logic for modal pop-ups and interactive overlays
├── sass/                  # Preprocessor styles (development)
│   ├── components/        # Reusable UI elements (buttons, forms, cards)
│   ├── utils/             # Variables, mixins, functions, and helpers
│   └── main.scss          # Main Sass file importing all modules
├── src/                   # Media and asset library
│   ├── brand/             # Logos, brand guidelines, and official vector assets
│   ├── icons/             # Custom SVG icons
│   └── images/            # Content images (JPG, PNG, WebP)
├── index.html             # Main entry point of the website
└── normalize.css          # CSS reset to ensure cross-browser styling consistency


👥 Contributors / Team
Since this is an educational front-end project, the development team consists of:
[Mikhail Shutiy] – Front-End Developer (Student)/(Team lead)
[Rostyslav Nemesh] – Front-End Developer (Student)/(Developer)
[Polina Sedko] – Front-End Developer (Student)/(Scrum Master)
Responsibilities: Writing semantic HTML, architecture of Sass/SCSS files, implementing Javascript interactivity (modal.js), and maintaining version control via Git.
Links: |Figma - https://www.figma.com/design/ZTW2qE0ACBvqICjVvH1nmc/ice-cream--Copy-?node-id=0-1&p=f&t=Gea8xhoQL7C2r4TR-0
        Trello - https://trello.com/b/c9nPFPu4/ice-cream-project 
[Mentor/Artem Marchenko] – Project Mentor / Code Reviewer
Responsibilities: Providing design mockups, reviewing code quality, and guiding best practices in frontend workflows.

🚀 How to Run the Project Locally
To review or run this project on your local machine, follow these steps:
Clone the repository:
Bash
git clone [https://github.com/your-username/project-icecream.git](https://github.com/your-username/project-icecream.git)
Navigate into the project directory:
Bash
cd project-icecream
Launch the development server:
Open the project in VS Code.
Right-click index.html and select "Open with Live Server" (requires the Live Server extension) to view the project in your browser with live-reloading enabled.