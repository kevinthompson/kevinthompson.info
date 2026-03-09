import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Kevin Thompson",
  EMAIL: "email@kevinthompson.info",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_GAMES_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Hi, I'm Kevin Thompson, an engineering manager, full-stack software developer and game designer from Southern California.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION:
    "Thoughts on software development, game design, and building things.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const GAMES: Metadata = {
  TITLE: "Games",
  DESCRIPTION: "HTML5 games you can play right in your browser.",
};

export const SOCIALS: Socials = [
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/full-stack-kt/",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/kevinthompson/",
  },
  {
    NAME: "YouTube",
    HREF: "https://youtube.com/@kevin.makes.videos",
  },
  {
    NAME: "Itch.io",
    HREF: "https://kevinthompson.itch.io/",
  },
  {
    NAME: "Mastodon",
    HREF: "https://mastodon.gamedev.place/@kevin",
  },
];
