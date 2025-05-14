<template>
  <header class="document-header">
    <div class="document-header-left">
      
      <div class="document-name">
        <div class="document-icon">
          <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.107 3.393c.167.167.31.393.429.678.119.286.178.548.178.786v10.286c0 .238-.083.44-.25.607a.827.827 0 0 1-.607.25h-12a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607v-14c0-.238.083-.44.25-.607A.827.827 0 0 1 .857 0h8c.238 0 .5.06.786.178.286.119.512.261.678.429l2.786 2.786zm-3.107-.678H2v14h10V4.5h-2v-1.786zm1.464.679L9.857 1.786v1.608h1.607z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div class="document-info">
          <div class="document-label">Nazwa dokumentu</div>
          <input
            type="text"
            v-model="documentName"
            class="document-title-input"
            @change="updateDocumentName"
          />
        </div>
      </div>
    </div>
    <div class="document-header-right">
      <button class="icon-button delete-button" @click="confirmDelete">
        <svg width="18" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1zM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2zM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button class="icon-button save-button" @click="saveDocument">
        <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.91 5.931 10.575.598A.889.889 0 0 0 10.29.41.969.969 0 0 0 9.945.34H2.834A2.667 2.667 0 0 0 .167 3.007v10.666a2.667 2.667 0 0 0 2.667 2.667H14.5a2.667 2.667 0 0 0 2.667-2.667v-7.11a.97.97 0 0 0-.258-.632zM5.5 2.118h3.556v1.778H5.5V2.118zm3.556 12.444H8.278v-3.556a.889.889 0 0 0-.889-.888H5.5a.889.889 0 0 0-.889.888v3.556H3.722V9.118h5.334v5.444zm5.333 0h-.889V8.673a.889.889 0 0 0-.888-.889H3.722a.889.889 0 0 0-.889.889v5.889h-.889V3.007c0-.489.4-.889.89-.889h.889v2.667c0 .489.4.889.889.889h5.333a.889.889 0 0 0 .89-.889V2.118h.616l3.038 3.038v9.406z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button class="icon-button preview-button" @click="$emit('togglePreview')">
        <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.784.003c4.782-.144 7.597 4.31 8.109 5.198a.8.8 0 0 1 0 .8c-.688 1.2-3.255 5.086-7.677 5.198h-.2c-4.71 0-7.405-4.326-7.909-5.198a.8.8 0 0 1 0-.8C.803 4.001 3.362.088 7.784.003zm.38 1.6h-.3c-3.199.08-5.286 2.71-6.086 3.998C2.482 6.73 4.73 9.68 8.176 9.6c3.199-.08 5.262-2.711 6.086-3.999-.712-1.127-2.967-4.086-6.398-3.998zM8 2.803A2.799 2.799 0 1 1 8 8.4a2.799 2.799 0 0 1 0-5.598zm0 1.599A1.2 1.2 0 1 0 8 6.8a1.2 1.2 0 0 0 0-2.4z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button class="icon-button mode-button" @click="$emit('toggleDarkMode')">
        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.141 8.804a.823.823 0 0 0-.864-.115 6.622 6.622 0 0 1-2.772.6A6.704 6.704 0 0 1 5.81 2.626 7.066 7.066 0 0 1 6.015.981a.823.823 0 0 0-1.094-.93 8.341 8.341 0 1 0 11.516 9.617.823.823 0 0 0-.296-.864zm-7.814 5.503A6.696 6.696 0 0 1 4.164 2.404v.222a8.35 8.35 0 0 0 10.069 8.198 6.671 6.671 0 0 1-5.906 3.483z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button class="sidebar-toggle" @click="$emit('toggleSidebar')">
        <svg width="23" height="13" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.138.04c.344-.056.748.083 1.212.417.2.145.374.323.52.534.156.223.262.465.318.726.066.31.044.608-.065.897-.11.29-.295.553-.553.788-.305.278-.7.417-1.182.417-.131 0-.262-.015-.393-.046a2.13 2.13 0 01-.524-.185 1.107 1.107 0 01-.393-.342A1.002 1.002 0 010 2.5c0-.361.118-.686.353-.977.234-.29.55-.483.946-.58.055-.026.095-.043.118-.051.023-.008.037-.012.043-.012l.09-.011.047-.017c.068.002.083.003.047.003zm5.077 0c.344-.056.748.083 1.212.417.2.145.374.323.52.534.156.223.262.465.318.726.066.31.044.608-.065.897-.11.29-.295.553-.553.788-.305.278-.7.417-1.182.417-.131 0-.262-.015-.393-.046a2.13 2.13 0 01-.524-.185 1.107 1.107 0 01-.393-.342A1.002 1.002 0 015 2.5c0-.361.118-.686.353-.977.234-.29.55-.483.946-.58.055-.026.095-.043.118-.051.023-.008.037-.012.043-.012l.09-.011.047-.017c.068.002.083.003.047.003zm5.077 0c.344-.056.748.083 1.212.417.2.145.374.323.52.534.156.223.262.465.318.726.066.31.044.608-.065.897-.11.29-.295.553-.553.788-.305.278-.7.417-1.182.417-.131 0-.262-.015-.393-.046a2.13 2.13 0 01-.524-.185 1.107 1.107 0 01-.393-.342A1.002 1.002 0 0110 2.5c0-.361.118-.686.353-.977.234-.29.55-.483.946-.58.055-.026.095-.043.118-.051.023-.008.037-.012.043-.012l.09-.011.047-.017c.068.002.083.003.047.003zm5.077 0c.344-.056.748.083 1.212.417.2.145.374.323.52.534.156.223.262.465.318.726.066.31.044.608-.065.897-.11.29-.295.553-.553.788-.305.278-.7.417-1.182.417-.131 0-.262-.015-.393-.046a2.13 2.13 0 01-.524-.185 1.107 1.107 0 01-.393-.342A1.002 1.002 0 0115 2.5c0-.361.118-.686.353-.977.234-.29.55-.483.946-.58.055-.026.095-.043.118-.051.023-.008.037-.012.043-.012l.09-.011.047-.017c.068.002.083.003.047.003zm5.077 0c.344-.056.748.083 1.212.417.2.145.374.323.52.534.156.223.262.465.318.726.066.31.044.608-.065.897-.11.29-.295.553-.553.788-.305.278-.7.417-1.182.417-.131 0-.262-.015-.393-.046a2.13 2.13 0 01-.524-.185 1.107 1.107 0 01-.393-.342A1.002 1.002 0 0120 2.5c0-.361.118-.686.353-.977.234-.29.55-.483.946-.58.055-.026.095-.043.118-.051.023-.008.037-.012.043-.012l.09-.011.047-.017c.068.002.083.003.047.003z"
            fill="currentColor"
            fill-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Document {
  id: string
  name: string
  content: string
}

const props = defineProps<{
  document: Document
  sidebarVisible: boolean
}>()

const emit = defineEmits<{
  (e: 'toggleSidebar'): void
  (e: 'saveDocument', name: string): void
  (e: 'deleteDocument'): void
  (e: 'togglePreview'): void
  (e: 'toggleDarkMode'): void
}>()

const documentName = ref(props.document.name || '')

const updateDocumentName = () => {
  emit('saveDocument', documentName.value)
}

const saveDocument = () => {
  emit('saveDocument', documentName.value)
}

const confirmDelete = () => {
  if (confirm('Czy na pewno chcesz usunąć ten dokument?')) {
    emit('deleteDocument')
  }
}

// Aktualizuj documentName gdy zmienia się props.document.name
watch(
  () => props.document.name,
  (newName) => {
    documentName.value = newName || ''
  },
)
</script>

<style scoped>
.document-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid var(--border-color);
}

.document-header-left {
  display: flex;
  align-items: center;
}

.sidebar-toggle {
  background: transparent;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  color: var(--text-light);
}

.sidebar-toggle:hover {
  color: var(--accent-color);
}

.document-name {
  display: flex;
  align-items: center;
}

.document-icon {
  margin-right: 15px;
  color: var(--text-light);
}

.document-info {
  display: flex;
  flex-direction: column;
}

.document-label {
  font-size: 12px;
  color: var(--text-light);
  margin-bottom: 4px;
}

.document-title-input {
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 15px;
  font-weight: 500;
}

.document-title-input:focus {
  outline: none;
}

.document-header-right {
  display: flex;
  align-items: center;
}

.icon-button {
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: 20px;
  color: var(--text-light);
}

.icon-button:hover {
  color: var(--accent-color);
}

.delete-button:hover {
  color: #e83f5b;
}

@media (max-width: 768px) {
  .document-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .document-header-left {
    margin-bottom: 15px;
    width: 100%;
  }

  .document-header-right {
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;
  }

  .document-header-right .icon-button {
    margin-left: 0;
  }
}
</style>
