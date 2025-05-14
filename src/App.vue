<template>
  <div class="app" :class="{ 'dark-mode': store.darkMode }">
    <Sidebar
      :documents="store.documents"
      :activeDocId="store.activeDocId"
      :isVisible="store.sidebarVisible"
      @selectDocument="store.selectDocument"
      @createDocument="store.createDocument"
      @toggleSidebar="store.toggleSidebar"
    />
    <main class="main" :class="{ 'sidebar-hidden': !store.sidebarVisible }">
      <DocumentHeader
        :document="store.activeDocument"
        :sidebarVisible="store.sidebarVisible"
        @toggleSidebar="store.toggleSidebar"
        @saveDocument="store.updateDocumentName"
        @deleteDocument="store.deleteDocument"
        @togglePreview="store.togglePreviewMode"
        @toggleDarkMode="store.toggleDarkMode"
      />
      <div class="editor-container" v-if="!store.fullPreviewMode">
        <Editor
          :modelValue="store.activeDocument.content"
          :previewVisible="store.previewVisible"
          @update:modelValue="store.updateDocumentContent"
        />
        <Preview :markdown="store.activeDocument.content" v-if="store.previewVisible" />
      </div>
      <div class="full-preview" v-else>
        <Preview :markdown="store.activeDocument.content" :fullScreen="true" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useDocumentsStore } from './stores/documents';
import Sidebar from './components/Sidebar.vue';
import DocumentHeader from './components/DocumentHeader.vue';
import Editor from './components/Editor.vue';
import Preview from './components/Preview.vue';

const store = useDocumentsStore();

onMounted(() => {
  store.loadDocuments();
  
  // Obsługa responsywności - ukryj sidebar automatycznie na mniejszych ekranach
  const handleResize = () => {
    if (window.innerWidth <= 768 && store.sidebarVisible) {
      store.sidebarVisible = false;
    }
  };
  
  // Dodaj listener na zmianę rozmiaru okna
  window.addEventListener('resize', handleResize);
  
  // Sprawdź początkowy rozmiar ekranu
  handleResize();
  
  // Usuń listener przy odmontowaniu komponentu
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });
});
</script>

<style>
:root {
  --bg-main: #ffffff;
  --bg-sidebar: #f5f5f5;
  --bg-editor: #fafafa;
  --text-color: #35393f;
  --text-light: #7c8187;
  --accent-color: #e46643;
  --accent-hover: #f39765;
  --border-color: #e4e4e4;
  --preview-heading: #35393f;
}

.dark-mode {
  --bg-main: #151619;
  --bg-sidebar: #1d1f22;
  --bg-editor: #2d2d2d;
  --text-color: #ffffff;
  --text-light: #c1c4cb;
  --border-color: #5a6069;
  --preview-heading: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', 'Roboto Mono', monospace, sans-serif;
  font-size: 14px;
  line-height: 1.6;
  overflow: hidden;
}

.app {
  display: flex;
  height: 100vh;
  background-color: var(--bg-main);
  color: var(--text-color);
  position: relative;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: margin-left 0.3s ease;
}

@media (min-width: 769px) {
  .main {
    margin-left: 0;
  }
  
  .main.sidebar-hidden {
    margin-left: 0;
  }
}

@media (max-width: 768px) {
  .main {
    width: 100%;
    margin-left: 0;
  }
}

.editor-container {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.full-preview {
  flex: 1;
  overflow: auto;
}

@media (max-width: 768px) {
  .editor-container {
    flex-direction: column;
  }
}
</style>