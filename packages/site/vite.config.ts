import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import windicss from 'vite-plugin-windicss'
import mdx from 'vite-plugin-mdx'
import remarkShikiTwoslash from 'remark-shiki-twoslash'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    windicss(),
    mdx({
      remarkPlugins: [
        [remarkShikiTwoslash, { themes: ['github-dark', 'github-light'] }],
      ],
    }),
  ],
  base: '/web-infra/',
  define: {
    'process.env': {},
  },
})
