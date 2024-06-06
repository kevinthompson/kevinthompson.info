import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import alpinejs from '@astrojs/alpinejs'
import mdx from '@astrojs/mdx'
import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'
import sitemap from '@astrojs/sitemap'
import { SITE } from './src/config'

function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.text
  }
}

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  trailingSlash: 'never',
  markdown: {
    syntaxHighlight: 'prism',
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    alpinejs(),
    mdx(),
    sitemap(),
  ],
})
