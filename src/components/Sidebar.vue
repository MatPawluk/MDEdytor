<template>
    <aside class="sidebar" :class="{ 'sidebar-hidden': !isVisible }">
      <div class="sidebar-header">
        <h1 class="logo">MARKDOWN</h1>
        <div class="document-count">Dokumenty ({{ documents.length }})</div>
      </div>
      
      <!-- Nawigacja -->
      <nav class="sidebar-nav">
        <router-link to="/" class="nav-item" active-class="nav-active">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h2" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Edytor
        </router-link>
        <router-link to="/cheatsheet" class="nav-item" active-class="nav-active">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Ściągawka
        </router-link>

        <a class="nav-item" href="https://buycoffee.to/matails" target="_blank"><img src="https://buycoffee.to/img/share-button-primary.png" style="width: 146px; height: 38px" alt="Postaw mi kawę na buycoffee.to"></a>
      </nav>
      
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
  <svg v-if="!isVisible" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect y="5" width="24" height="3" rx="1.5" fill="currentColor"/>
    <rect y="11" width="24" height="3" rx="1.5" fill="currentColor"/>
    <rect y="17" width="24" height="3" rx="1.5" fill="currentColor"/>
  </svg>
  <svg v-else width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      fill="currentColor"
    />
  </svg>
</div>
  </template>
  
  <script setup lang="ts">
  import { RouterLink } from 'vue-router'
  
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
  
  /* Style dla nawigacji */
  .sidebar-nav {
    padding: 0 20px;
    margin-bottom: 20px;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
    padding: 10px 0;
    color: var(--text-light);
    text-decoration: none;
    border-bottom: 1px solid var(--border-color);
    transition: color 0.2s;
  }
  
  .nav-item:hover {
    color: var(--accent-color);
  }
  
  .nav-item svg {
    margin-right: 10px;
  }
  
  .nav-active {
    color: var(--accent-color);
    font-weight: 500;
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