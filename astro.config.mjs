import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: 'wSY5hr0vVjJZgXyi6nDZxwtt',
      components: {
        page: 'storyblok/Page',
        blogPost: 'storyblok/BlogPost',
        blogPostList: 'storyblok/BlogPostList',
        feature: 'storyblok/Feature',
        image: 'storyblok/Image',
        grid: 'storyblok/Grid',
        hero: 'storyblok/Hero',
        teaser: 'storyblok/Teaser',
      },
    }),
    tailwind(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
})
