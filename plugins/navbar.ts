import { readFile } from 'node:fs/promises'
import type { Plugin } from 'vite'

export default function NavbarFix(): Plugin {
  // Load logo and replace palette
  const logoPromise = readFile('public/txtlogo.svg', 'utf8')
    .then(logo => logo
      .replaceAll('#fff', 'var(--vp-c-bg)')
      .replaceAll('#898989', 'var(--vp-c-brand-gray)')
      .replaceAll('#BFBFBF', 'var(--vp-c-brand-gray2)')
      .replaceAll('#0066C4', 'var(--vp-c-brand)'),
    )
  return {
    name: 'vitepress-sidebar-navbar',
    enforce: 'pre',
    async transform(code, id) {
      if (id.includes('VPNavBarTitle.vue') && !id.endsWith('.css') && !id.includes('&setup=')) {
        const logo = await logoPromise
        return `
<script setup lang="ts">
import { useData } from '../composables/data'
import { useSidebar } from '../composables/sidebar'
import { useLangs } from '../composables/langs'
import { normalizeLink } from '../support/utils'
import VPImage from './VPImage.vue'

const { site, theme } = useData()
const { hasSidebar } = useSidebar()
const { currentLang } = useLangs()
</script>

<template>
  <div class="VPNavBarTitle" :class="{ 'has-sidebar': hasSidebar }">
    <a class="title" :href="normalizeLink(currentLang.link)" :aria-label="theme.siteTitle ?? site.title">
      <slot name="nav-bar-title-before" />
      ${logo}
    </a>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  width: 100%;
  height: var(--vp-nav-height);
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  transition: opacity 0.25s;
}

.title:hover {
  opacity: 0.6;
}

:deep(.logo) {
  margin-right: 8px;
  height: 24px;
}

@media (min-width: 960px) {
  .title {
    flex-shrink: 0;
  }

  .VPNavBarTitle.has-sidebar .title {
    border-bottom-color: var(--vp-c-divider);
  }
  
  :deep(.logo) {
    min-width: 128px;
    height: auto;
  }
}
</style>
`
      }
    },
  }
}
