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
    <router-view class="main-content" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useDocumentsStore } from './stores/documents';
import Sidebar from './components/Sidebar.vue';

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

.main-content {
  flex: 1;
  overflow: auto;
}

@media (max-width: 768px) {
  .main-content {
    width: 100%;
    margin-left: 0;
  }
}
</style>