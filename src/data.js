export const profile = {
  name: "Pratik Gautam",
  role: "Software Developer",
  location: "Kathmandu, Nepal",
  email: "gautampratik12@gmail.com",
  github: "https://github.com/Pratikgautam122",
  linkedin: "https://www.linkedin.com/in/pratik-gautam-a59979290/",
  intro:
    "Computer Science student at King's College building web apps, systems software, and cloud infrastructure. I like turning ideas into working software, from React interfaces down to a kernel written in C.",
};

export const projects = [
  {
    title: "Nidhogg OS",
    kind: "Systems",
    description:
      "A 32-bit x86 operating system kernel written in C and Assembly, with paging, a heap allocator, a preemptive scheduler, user-mode process isolation, system calls, and an interactive shell.",
    tags: ["C", "Assembly", "x86", "Kernel"],
    link: "https://github.com/Pratikgautam122/OS-Build",
    featured: true,
  },
  {
    title: "ML Integration Selector",
    kind: "Python / ML",
    description:
      "Trains decision tree and random forest models to pick the best numerical integration method (trapezoidal, Simpson, Romberg, Monte Carlo) for multi-dimensional functions, using custom solvers built from scratch.",
    tags: ["Python", "scikit-learn", "Numerical Methods"],
    link: "https://github.com/Pratikgautam122/BSIT400",
    featured: true,
  },
  {
    title: "NovaBoard",
    kind: "Web app",
    description:
      "A Trello-style Kanban board with drag-and-drop columns, inline task creation and editing, live search, and persistent local storage.",
    tags: ["React", "Vite", "CSS"],
    link: "https://github.com/Pratikgautam122/mini-trello",
    featured: true,
  },
  {
    title: "Finance Dashboard",
    kind: "Python",
    description:
      "A desktop personal finance tracker with expense categories, charts, SQLite storage, CSV export, and Google sign-in.",
    tags: ["Python", "Tkinter", "SQLite", "Matplotlib"],
    link: "https://github.com/Pratikgautam122/FinancePython",
  },
  {
    title: "Chatcircle",
    kind: "Web app",
    description:
      "A simple messaging app designed to make conversations with friends easier.",
    tags: ["Messaging", "Side project"],
    link: "https://github.com/Pratikgautam122/Chatcircle",
  },
  {
    title: "Azure VM with Terraform",
    kind: "Cloud",
    description:
      "Infrastructure-as-code project that provisions and configures an Azure virtual machine with Terraform.",
    tags: ["Terraform", "Azure", "HCL"],
    link: "https://github.com/Pratikgautam122/AzureVM_with_Terraform",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "JavaScript", "C", "C++", "HTML", "CSS"] },
  { group: "Frameworks & Tools", items: ["React", "Vite", "Tailwind CSS", "Git & GitHub", "Figma"] },
  { group: "Cloud & Systems", items: ["AWS Cloud Foundations", "Azure", "Terraform", "x86 Assembly"] },
];

export const education = [
  {
    school: "King's College",
    detail: "BSc in Computer Science",
    period: "2024 – 2028",
    note: "In progress",
  },
  {
    school: "Nepal Mega College",
    detail: "+2 (Higher Secondary), GPA 3.31",
    period: "2023",
  },
  {
    school: "Gyankunj Secondary School",
    detail: "S.E.E., GPA 3.95",
    period: "2021",
  },
];
