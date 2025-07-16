const iconPath = (icon: string) => `/assets/icons/${icon}`;

type Technology = {
  name: string;
  url: string;
  icon?: string;
};

type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export const technologies: Technology[] = [
    { name: "React", url: "https://reactjs.org/", icon: iconPath("react.svg") },
    { name: "TypeScript", url: "https://www.typescriptlang.org/", icon: iconPath("typescript.svg") },
    { name: "Node.js", url: "https://nodejs.org/", icon: iconPath("nodejs.svg") },
    { name: "Python", url: "https://www.python.org/", icon: iconPath("python.svg") },
    { name: "JavaScript", url: "https://www.javascript.com/", icon: iconPath("javascript.svg") },
    { name: "HTML/CSS", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: iconPath("html.svg") },
    { name: "Git", url: "https://git-scm.com/", icon: iconPath("git.svg") },
    { name: "SQL", url: "https://www.mysql.com/", icon: iconPath("mysql.svg") },
    { name: "MongoDB", url: "https://www.mongodb.com/", icon: iconPath("mongodb.svg") },
    { name: "Docker", url: "https://www.docker.com/", icon: iconPath("docker.svg") }
];

export const socialLinks: SocialLink[] = [
    { name: "GitHub", url: "https://github.com/javidahmed64592", icon: iconPath("github.svg") },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/javidahmed64592", icon: iconPath("linkedin.svg") },
    { name: "Email", url: "mailto:your.email@example.com", icon: iconPath("email.svg") },
    { name: "Source Code", url: "https://github.com/javidahmed64592/portfolio", icon: iconPath("source.svg") }
];
