<template>
    <div class="main" :class="{ 'sidebar-hidden': !store.sidebarVisible }">
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
    </div>
  </template>
  
  <script setup lang="ts">
  import { useDocumentsStore } from '../stores/documents';
  import DocumentHeader from '../components/DocumentHeader.vue';
  import Editor from '../components/Editor.vue';
  import Preview from '../components/Preview.vue';
  
  const store = useDocumentsStore();
  </script>
  
  <style scoped>
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