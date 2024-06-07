import type { Site, SocialObjects, StackObjects } from './types'
import rails from './images/logos/icons/rails.png'
import typescript from './images/logos/icons/typescript.svg'
import javascript from './images/logos/icons/javascript.jpg'
import html5 from './images/logos/icons/html5.png'
import css from './images/logos/icons/css.png'
import python from './images/logos/icons/python.png'
import pico8 from './images/logos/icons/pico8.png'
import aseprite from './images/logos/icons/aseprite.png'
import obs from './images/logos/icons/obs.png'
import godot from './images/logos/icons/godot.svg'
import ruby from './images/logos/icons/ruby.png'
import davinci from './images/logos/icons/davinci.png'
import react from './images/logos/icons/react.svg'

export const SITE: Site = {
  website: 'https://kevinthompson.info',
  author: 'Kevin Thompson',
  description:
    "Hi, I'm Kevin Thompson, a full-stack software engineer, game developer and educator from Southern California. I create web applications, video games and educational content using a variety of tools and technologies.",
  title: 'Kevin Thompson',
  ogImage: 'kevinthompson-og.png',
  postsPerPage: 9,
}

export const SOCIALS: SocialObjects = [
  {
    name: 'github',
    href: 'https://github.com/kevinthompson/',
    label: 'Github',
    ariaLabel: 'Follow on Github',
    showInHero: false,
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/full-stack-kt/',
    label: 'LinkedIn',
    ariaLabel: 'Follow on LinkedIn',
    showInHero: true,
  },
  {
    name: 'itch',
    href: 'https://kevinthompson.itch.io/',
    label: 'Itch.io',
    ariaLabel: 'Play my games on Itch',
    showInHero: true,
  },
  {
    name: 'mastodon',
    href: 'https://mastodon.gamedev.place/@kevin',
    label: 'Mastodon',
    ariaLabel: 'Follow on Mastodon',
    showInHero: false,
  },
  {
    name: 'x',
    href: 'https://x.com/kevinthompson',
    label: 'Twitter / X',
    ariaLabel: 'Follow on X',
    showInHero: false,
  },
  {
    name: 'youTube',
    href: 'https://youtube.com/@kevinmakesgames',
    label: 'YouTube',
    ariaLabel: 'Follow on YouTube',
    showInHero: true,
  },
  // {
  //   name: 'twitch',
  //   href: 'https://twitch.tv/kevinmakesgames',
  //   label: 'Twitch',
  //   ariaLabel: 'Follow on Twitch',
  //   showInHero: false,
  // },
]

export const STACK: StackObjects = [
  {
    name: 'OBS',
    logo: obs,
  },
  {
    name: 'Rails',
    startYear: 2011,
    logo: rails,
    showInHero: true,
  },
  {
    name: 'CSS',
    startYear: 2006,
    logo: css,
  },
  {
    name: 'React',
    startYear: 2016,
    logo: react,
    showInHero: true,
  },
  {
    name: 'JavaScript',
    startYear: 2006,
    logo: javascript,
    showInHero: true,
  },
  {
    name: 'Ruby',
    startYear: 2011,
    logo: ruby,
  },
  {
    name: 'Godot',
    logo: godot,
  },
  {
    name: 'TypeScript',
    logo: typescript,
  },
  {
    name: 'PICO-8',
    logo: pico8,
  },
  {
    name: 'Aseprite',
    logo: aseprite,
  },
  {
    name: 'Python',
    logo: python,
  },
  {
    name: 'HTML5',
    startYear: 2006,
    logo: html5,
  },
  {
    name: 'Davinci Resolve',
    logo: davinci,
  },
]

STACK.filter((tech) => tech.startYear).forEach((tech) => {
  const totalYears = new Date().getFullYear() - tech.startYear!
  tech.years = totalYears > 10 ? '10+' : totalYears
})
