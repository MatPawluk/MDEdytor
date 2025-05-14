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

<script>
import { onMounted } from 'vue';
import { useDocumentsStore } from './stores/documents';
import Sidebar from './components/Sidebar.vue';
import DocumentHeader from './components/DocumentHeader.vue';
import Editor from './components/Editor.vue';
import Preview from './components/Preview.vue';

const store = useDocumentsStore();

onMounted(() => {
  store.loadDocuments();
});

export default {
  name: 'App',
  components: {
    Sidebar,
    DocumentHeader,
    Editor,
    Preview
  },
  setup() {
    const documents = ref([]);
    const activeDocId = ref(null);
    const sidebarVisible = ref(true);
    const previewVisible = ref(true);
    const fullPreviewMode = ref(false);
    const darkMode = ref(false);

    // Pobierz dokumenty z localStorage
    const loadDocuments = () => {
      const savedDocs = localStorage.getItem('markdown-documents');
      if (savedDocs) {
        documents.value = JSON.parse(savedDocs);
      }

      const savedActiveId = localStorage.getItem('active-document-id');
      if (savedActiveId && documents.value.some(doc => doc.id === savedActiveId)) {
        activeDocId.value = savedActiveId;
      } else if (documents.value.length > 0) {
        activeDocId.value = documents.value[0].id;
      } else {
        // Utwórz pierwszy dokument, jeśli nie ma zapisanych
        createDocument();
      }

      const savedDarkMode = localStorage.getItem('dark-mode');
      if (savedDarkMode) {
        darkMode.value = JSON.parse(savedDarkMode);
      }
    };

    // Zapisz dokumenty do localStorage
    const saveToLocalStorage = () => {
      localStorage.setItem('markdown-documents', JSON.stringify(documents.value));
      localStorage.setItem('active-document-id', activeDocId.value);
      localStorage.setItem('dark-mode', JSON.stringify(darkMode.value));
    };

    // Aktywny dokument
    const activeDocument = computed(() => {
      const doc = documents.value.find(doc => doc.id === activeDocId.value);
      return doc || { id: null, name: '', content: '' };
    });

    // Utwórz nowy dokument
    const createDocument = () => {
      const newDoc = {
        id: Date.now().toString(),
        name: 'welcome.md',
        content: `# Welcome to Markdown

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.

## How to use this?

1. Write markdown in the markdown editor window
2. See the rendered markdown in the preview window

### Features

- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists
- Name and save the document to access again later
- Choose between Light or Dark mode depending on your preference

> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).

#### Headings

To create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.

##### Lists

You can see examples of ordered and unordered lists above.

###### Code Blocks

This markdown editor// src/App.vue
<template>
  <div class="app" :class="{ 'dark-mode': darkMode }">
    <Sidebar
      :documents="documents"
      :activeDocId="activeDocId"
      @select-document="selectDocument"
      @create-document="createDocument"
      @toggle-sidebar="sidebarVisible = !sidebarVisible"
    />
    <main class="main" :class="{ 'sidebar-hidden': !sidebarVisible }">
      <DocumentHeader
        :document="activeDocument"
        :sidebarVisible="sidebarVisible"
        @toggle-sidebar="sidebarVisible = !sidebarVisible"
        @save-document="saveDocument"
        @delete-document="deleteDocument"
        @toggle-preview="togglePreview"
        @toggle-mode="darkMode = !darkMode"
      />
      <div class="editor-container" v-if="!fullPreviewMode">
        <Editor
          v-model="activeDocument.content"
          :previewVisible="previewVisible"
        />
        <Preview
          :markdown="activeDocument.content"
          v-if="previewVisible"
        />
      </div>
      <div class="full-preview" v-else>
        <Preview
          :markdown="activeDocument.content"
          :fullScreen="true"
        />
      </div>
    </main>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue';
import Sidebar from './components/Sidebar.vue';
import DocumentHeader from './components/DocumentHeader.vue';
import Editor from './components/Editor.vue';
import Preview from './components/Preview.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    DocumentHeader,
    Editor,
    Preview
  },
  setup() {
    const documents = ref([]);
    const activeDocId = ref(null);
    const sidebarVisible = ref(true);
    const previewVisible = ref(true);
    const fullPreviewMode = ref(false);
    const darkMode = ref(false);

    // Pobierz dokumenty z localStorage
    const loadDocuments = () => {
      const savedDocs = localStorage.getItem('markdown-documents');
      if (savedDocs) {
        documents.value = JSON.parse(savedDocs);
      }

      const savedActiveId = localStorage.getItem('active-document-id');
      if (savedActiveId && documents.value.some(doc => doc.id === savedActiveId)) {
        activeDocId.value = savedActiveId;
      } else if (documents.value.length > 0) {
        activeDocId.value = documents.value[0].id;
      } else {
        // Utwórz pierwszy dokument, jeśli nie ma zapisanych
        createDocument();
      }

      const savedDarkMode = localStorage.getItem('dark-mode');
      if (savedDarkMode) {
        darkMode.value = JSON.parse(savedDarkMode);
      }
    };

    // Zapisz dokumenty do localStorage
    const saveToLocalStorage = () => {
      localStorage.setItem('markdown-documents', JSON.stringify(documents.value));
      localStorage.setItem('active-document-id', activeDocId.value);
      localStorage.setItem('dark-mode', JSON.stringify(darkMode.value));
    };

    // Aktywny dokument
    const activeDocument = computed(() => {
      const doc = documents.value.find(doc => doc.id === activeDocId.value);
      return doc || { id: null, name: '', content: '' };
    });

    // Utwórz nowy dokument
    const createDocument = () => {
      const newDoc = {
        id: Date.now().toString(),
        name: 'welcome.md',
        content: '# Witaj w edytorze Markdown\n\nMarkdown to lekki język znaczników, którego możesz użyć do dodania elementów formatowania do dokumentów tekstowych.'
      };
      documents.value.push(newDoc);
      activeDocId.value = newDoc.id;
      saveToLocalStorage();
    };

    // Wybierz dokument
    const selectDocument = (id) => {
      activeDocId.value = id;
      saveToLocalStorage();
    };

    // Zapisz dokument
    const saveDocument = (name) => {
      const doc = documents.value.find(doc => doc.id === activeDocId.value);
      if (doc) {
        doc.name = name;
        saveToLocalStorage();
      }
    };

    // Usuń dokument
    const deleteDocument = () => {
      const index = documents.value.findIndex(doc => doc.id === activeDocId.value);
      if (index !== -1) {
        documents.value.splice(index, 1);

        if (documents.value.length > 0) {
          activeDocId.value = documents.value[0].id;
        } else {
          createDocument();
        }

        saveToLocalStorage();
      }
    };

    // Przełącz tryb podglądu
    const togglePreview = () => {
      if (fullPreviewMode.value) {
        fullPreviewMode.value = false;
      } else {
        previewVisible.value = !previewVisible.value;
      }
    };

    // Obserwuj zmiany w dokumentach i zapisuj do localStorage
    watch(() => [...documents.value], saveToLocalStorage, { deep: true });

    // Załaduj dane przy starcie aplikacji
    onMounted(loadDocuments);

    return {
      documents,
      activeDocId,
      activeDocument,
      sidebarVisible,
      previewVisible,
      fullPreviewMode,
      darkMode,
      createDocument,
      selectDocument,
      saveDocument,
      deleteDocument,
      togglePreview
    };
  }
};
</script>

<style lang="scss">
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
}

.app {
  display: flex;
  height: 100vh;
  background-color: var(--bg-main);
  color: var(--text-color);
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: margin-left 0.3s ease;

  &.sidebar-hidden {
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
