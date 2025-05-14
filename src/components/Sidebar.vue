<template>
    <aside class="sidebar" :class="{ 'sidebar-hidden': !isVisible }">
      <div class="sidebar-header">
        <h1 class="logo">MARKDOWN</h1>
        <div class="document-count">Dokumenty ({{ documents.length }})</div>
      </div>
      <button class="new-document-btn" @click="$emit('createDocument')">+ Nowy dokument</button>
      <div class="documents-list">
        <div
          v-for="doc in documents"
          :key="doc.id"
          class="document-item"
          :class="{ active: doc.id === activeDocId }"
          @click="$emit('selectDocument', doc.id)"
        >
          <div class="document-icon">
            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.107 3.393c.167.167.31.393.429.678.119.286.178.548.178.786v10.286c0 .238-.083.44-.25.607a.827.827 0 0 1-.607.25h-12a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607v-14c0-.238.083-.44.25-.607A.827.827 0 0 1 .857 0h8c.238 0 .5.06.786.178.286.119.512.261.678.429l2.786 2.786zm-3.107-.678H2v14h10V4.5h-2v-1.786zm1.464.679L9.857 1.786v1.608h1.607z"
                fill="#FFF"
                fill-rule="evenodd"
              />
            </svg>
          </div>
          <div class="document-details">
            <div class="document-date">{{ formatDate(doc.id) }}</div>
            <div class="document-name">{{ doc.name }}</div>
          </div>
        </div>
      </div>
    </aside>
    
    <!-- Przycisk toggle dla urządzeń mobilnych -->
    <div class="sidebar-toggle-mobile" @click="$emit('toggleSidebar')">
      <svg v-if="!isVisible" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          fill="currentColor"
        />
      </svg>
      <svg v-else width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          fill="currentColor"
        />
      </svg>
    </div>
    
    <!-- Przycisk toggle dla większych ekranów (kropki) -->
    <button class="sidebar-toggle-desktop" @click="$emit('toggleSidebar')" v-if="!isVisible">
      <svg width="23" height="13" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.138.04c.344-.056.748.083 1.212.417.2.145.374.323.52.534.156.223.262.465.318.726.066.31.044.608-.065.897-.11.29-.295.553-.553.788-.305.278-.7.417-1.182.417-.131 0-.262-.015-.393-.046a2.13 2.13 0 01-.524-.185 1.107 1.107 0 01-.393-.342A1.002 1.002 0 010 2.5c0-.361.118-.686.353-.977.234-.29.55-.483.946-.58.055-.026.095-.043.118-.051.023-.008.037-.012.043-.012l.09-.011.047-.017c.068.002.083.003.047.003zm5.077 0c.344-.056.748.083 1.212.417.2.145.374.323.52.534.156.223.262.465.318.726.066.31.044.608-.065.897-.11.29-.295.553-.553.788-.305.278-.7.417-1.182.417-.131 0-.262-.015-.393-.046a2.13 2.13 0 01-.524-.185 1.107 1.107 0 01-.393-.342A1.002 1.002 0 015 2.5c0-.361.118-.686.353-.977.234-.29.55-.483.946-.58.055-.026.095-.043.118-.051.023-.008.037-.012.043-.012l.09-.011.047-.017c.068.002.083.003.047.003zm5.077 0c.344-.056.748.083 1.212.417.2.145.374.323.52.534.156.223.262.465.318.726.066.31.044.608-.065.897-.11.29-.295.553-.553.788-.305.278-.7.417-1.182.417-.131 0-.262-.015-.393-.046a2.13 2.13 0 01-.524-.185 1.107 1.107 0 01-.393-.342A1.002 1.002 0 0110 2.5c0-.361.118-.686.353-.977.234-.29.55-.483.946-.58.055-.026.095-.043.118-.051.023-.008.037-.012.043-.012l.09-.011.047-.017c.068.002.083.003.047.003zm5.077 0c.344-.056.748.083 1.212.417.2.145.374.323.52.534.156.223.262.465.318.726.066.31.044.608-.065.897-.11.29-.295.553-.553.788-.305.278-.7.417-1.182.417-.131 0-.262-.015-.393-.046a2.13 2.13 0 01-.524-.185 1.107 1.107 0 01-.393-.342A1.002 1.002 0 0115 2.5c0-.361.118-.686.353-.977.234-.29.55-.483.946-.58.055-.026.095-.043.118-.051.023-.008.037-.012.043-.012l.09-.011.047-.017c.068.002.083.003.047.003zm5.077 0c.344-.056.748.083 1.212.417.2.145.374.323.52.534.156.223.262.465.318.726.066.31.044.608-.065.897-.11.29-.295.553-.553.788-.305.278-.7.417-1.182.417-.131 0-.262-.015-.393-.046a2.13 2.13 0 01-.524-.185 1.107 1.107 0 01-.393-.342A1.002 1.002 0 0120 2.5c0-.361.118-.686.353-.977.234-.29.55-.483.946-.58.055-.026.095-.043.118-.051.023-.008.037-.012.043-.012l.09-.011.047-.017c.068.002.083.003.047.003z"
          fill="currentColor"
          fill-rule="evenodd"
        />
      </svg>
    </button>
  </template>
  
  <script setup lang="ts">
  interface Document {
    id: string
    name: string
    content: string
  }
  
  defineProps<{
    documents: Document[]
    activeDocId: string | null
    isVisible: boolean
  }>()
  
  defineEmits<{
    (e: 'selectDocument', id: string): void
    (e: 'createDocument'): void
    (e: 'toggleSidebar'): void
  }>()
  
  const formatDate = (timestamp: string) => {
    const date = new Date(parseInt(timestamp))
    return date.toLocaleDateString('pl-PL', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  }
  </script>
  
  <style scoped>
  .sidebar {
    width: 250px;
    height: 100%;
    background-color: var(--bg-sidebar);
    color: var(--text-light);
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
    z-index: 10;
  }
  
  @media (max-width: 768px) {
    .sidebar {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      transform: translateX(0);
    }
  
    .sidebar.sidebar-hidden {
      transform: translateX(-100%);
    }
  }
  
  .sidebar-header {
    padding: 20px;
    background-color: var(--bg-sidebar);
  }
  
  .logo {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 15px;
  }
  
  .document-count {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .new-document-btn {
    margin: 0 20px 20px;
    padding: 12px;
    background-color: var(--accent-color);
    border: none;
    border-radius: 4px;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
  }
  
  .new-document-btn:hover {
    background-color: var(--accent-hover);
  }
  
  .documents-list {
    flex: 1;
    overflow-y: auto;
  }
  
  .document-item {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .document-item:hover,
  .document-item.active {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  .document-icon {
    margin-right: 15px;
    width: 14px;
    height: 16px;
    opacity: 0.7;
  }
  
  .document-details {
    display: flex;
    flex-direction: column;
  }
  
  .document-date {
    font-size: 12px;
    margin-bottom: 4px;
  }
  
  .document-name {
    font-size: 15px;
    color: var(--text-color);
  }
  
  /* Styl przycisku toggle dla urządzeń mobilnych */
  .sidebar-toggle-mobile {
    display: none;
  }
  
  @media (max-width: 768px) {
    .sidebar-toggle-mobile {
      display: block;
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--accent-color);
      color: #fff;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      z-index: 20;
    }
  }
  
  /* Styl przycisku toggle dla większych ekranów */
  .sidebar-toggle-desktop {
    display: none;
    position: fixed;
    left: 20px;
    top: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--text-light);
    z-index: 5;
  }
  
  .sidebar-toggle-desktop:hover {
    color: var(--accent-color);
  }
  
  @media (min-width: 769px) {
    .sidebar-toggle-desktop {
      display: block;
    }
  }
  </style>