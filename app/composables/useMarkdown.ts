import { marked, Renderer } from 'marked'
import type { MarkedExtension } from 'marked'
import Prism from 'prismjs'

import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-markup'

import 'prismjs/themes/prism-tomorrow.css'

marked.setOptions({
  breaks: true,
})

const langMap: Record<string, string> = {
  ts: 'typescript',
  js: 'javascript',
  jsx: 'jsx',
  tsx: 'tsx',
}

const prismExtension: MarkedExtension = {
  async: false,
  renderer: {
    code(this: Renderer, codeObj: any) {
      if (!codeObj || !codeObj.code) return ''

      const rawLang = (codeObj.lang || '').trim().toLowerCase()
      const lang = langMap[rawLang] || rawLang

      if (!lang) return `<pre><code>${codeObj.code}</code></pre>`

      if (!Prism.languages[lang]) {
        console.warn(`Prism: Language '${lang}' not found.`)
        return `<pre><code>${codeObj.code}</code></pre>`
      }

      try {
        const highlighted = Prism.highlight(codeObj.code, Prism.languages[lang], lang)
        return `<pre class="language-${lang}"><code class="language-${lang}">${highlighted}</code></pre>`
      } catch (e) {
        console.error('Prism highlight error:', e)
        return `<pre><code>${codeObj.code}</code></pre>`
      }
    },
  },
}

marked.use(prismExtension)

export function useMarkdown() {
  function renderMarkdown(raw: string) {
    console.log('Rendering markdown:', raw)
    return marked.parse(raw)
  }

  return {
    renderMarkdown,
  }
}
