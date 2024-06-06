import type { ImageMetadata } from 'astro'
import type { CollectionEntry } from 'astro:content'

export type Post = CollectionEntry<'blog'>

export type Site = {
  website: string
  author: string
  description: string
  title: string
  ogImage: string
  postsPerPage: number
}

export type SocialObjects = {
  name: SocialMedia
  href: string
  showInHero: boolean
  label: string
  ariaLabel: string
}[]

export type SocialMedia =
  | 'github'
  | 'dribbble'
  | 'facebook'
  | 'instagram'
  | 'linkedin'
  | 'mail'
  | 'x'
  | 'twitch'
  | 'youTube'
  | 'whatsApp'
  | 'snapchat'
  | 'pinterest'
  | 'tikTok'
  | 'codePen'
  | 'discord'
  | 'gitLab'
  | 'reddit'
  | 'skype'
  | 'steam'
  | 'telegram'
  | 'mastodon'
  | 'itch'

export type StackObjects = {
  name: string
  logo: ImageMetadata
  showInHero?: boolean
  startYear?: number
  years?: number | string
}[]
