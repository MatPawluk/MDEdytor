<template>
    <div class="preview" :class="{ 'full-screen': fullScreen }">
      <div class="preview-header" v-if="!fullScreen">PODGLĄD</div>
      <div class="preview-content" v-html="renderedContent"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { marked } from 'marked';
  import DOMPurify from 'dompurify';
  
  const props = defineProps<{
    markdown: string;
    fullScreen?: boolean;
  }>();
  
  // Konfiguracja marked
  marked.setOptions({
    breaks: true,
    gfm: true,
    headerIds: true,
    headerPrefix: 'heading-',
    mangle: false,
    smartLists: true,
    smartypants: true,
    xhtml: false
  });
  
  // Renderowanie markdown do HTML
  const renderedContent = computed(() => {
    const rawHtml = marked(props.markdown || '');
    // Sanityzacja HTML
    return DOMPurify.sanitize(rawHtml);
  });
  </script>
  
  <style scoped>
  .preview {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  
  .preview.full-screen {
    width: 100%;
  }
  
  .preview.full-screen .preview-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 20px;
  }
  
  .preview-header {
    padding: 15px;
    color: var(--text-light);
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    border-bottom: 1px solid var(--border-color);
  }
  
  .preview-content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    line-height: 1.6;
  }
  
  /* Styl dla elementów HTML renderowanych z markdown */
  .preview-content :deep(h1),
  .preview-content :deep(h2),
  .preview-content :deep(h3),
  .preview-content :deep(h4),
  .preview-content :deep(h5),
  .preview-content :deep(h6) {
    color: var(--preview-heading);
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    font-weight: 700;
  }
  
  .preview-content :deep(h1) {
    font-size: 2em;
  }
  
  .preview-content :deep(h2) {
    font-size: 1.75em;
  }
  
  .preview-content :deep(h3) {
    font-size: 1.5em;
  }
  
  .preview-content :deep(h4) {
    font-size: 1.25em;
  }
  
  .preview-content :deep(h5) {
    font-size: 1.1em;
  }
  
  .preview-content :deep(h6) {
    font-size: 1em;
  }
  
  .preview-content :deep(p) {
    margin-bottom: 1em;
  }
  
  .preview-content :deep(ul),
  .preview-content :deep(ol) {
    margin-bottom: 1em;
    padding-left: 2em;
  }
  
  .preview-content :deep(li) {
    margin-bottom: 0.5em;
  }
  
  .preview-content :deep(a) {
    color: var(--accent-color);
    text-decoration: none;
  }
  
  .preview-content :deep(a):hover {
    text-decoration: underline;
  }
  
  .preview-content :deep(blockquote) {
    margin: 1em 0;
    padding-left: 1em;
    border-left: 4px solid var(--accent-color);
    color: var(--text-light);
  }
  
  .preview-content :deep(code) {
    font-family: 'Roboto Mono', monospace;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 0.2em 0.4em;
    border-radius: 3px;
  }
  
  .preview-content :deep(pre) {
    background-color: var(--bg-editor);
    padding: 1em;
    border-radius: 4px;
    overflow-x: auto;
    margin: 1em 0;
  }
  
  .preview-content :deep(pre code) {
    background-color: transparent;
    padding: 0;
    border-radius: 0;
  }
  
  .preview-content :deep(img) {
    max-width: 100%;
    height: auto;
  }
  
  .preview-content :deep(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
  }
  
  .preview-content :deep(th),
  .preview-content :deep(td) {
    border: 1px solid var(--border-color);
    padding: 0.5em;
  }
  
  .preview-content :deep(th) {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  @media (max-width: 768px) {
    .preview {
      width: 100%;
      height: 50%;
    }
  }
  </style>