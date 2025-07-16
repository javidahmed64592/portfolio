const iconPath = (icon: string) => `/assets/icons/${icon}`;

type ProfileSummary = {
  name: string;
  title: string;
  description: string[];
};

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

type HomePageData = {
  profileSummary: ProfileSummary;
  technologies: Technology[];
  socialLinks: SocialLink[];
};

export const homePageData: HomePageData = {
  profileSummary: {
    name: "Javid Ahmed",
    title: "Software Developer",
    description: [
      "I am a passionate software developer with experience in building modern web applications and solutions. I enjoy working with cutting-edge technologies and am always eager to learn new skills and tackle challenging problems. My goal is to create efficient, scalable, and user-friendly applications that make a positive impact.",
      "I have experience in full-stack development, with a focus on React, TypeScript, and modern web technologies. I'm comfortable working in both frontend and backend environments and enjoy collaborating with teams to deliver high-quality software solutions."
    ],
  },
  technologies: [
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
  ],
  socialLinks: [
    { name: "GitHub", url: "https://github.com/javidahmed64592", icon: iconPath("github.svg") },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/javidahmed64592", icon: iconPath("linkedin.svg") },
    { name: "Email", url: "mailto:your.email@example.com", icon: iconPath("email.svg") },
    { name: "Source Code", url: "https://github.com/javidahmed64592/portfolio", icon: iconPath("source.svg") }
  ]
};
