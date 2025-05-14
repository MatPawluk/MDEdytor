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
    <div class="sidebar-toggle-mobile" @click="$emit('toggleSidebar')">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18 3H6C4.34 3 3 4.34 3 6v12c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3zm-1 7.5h-4v4h-2v-4H7v-2h4v-4h2v4h4v2z"
          fill="currentColor"
        />
      </svg>
    </div>
  </aside>
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
}

@media (max-width: 768px) {
  .sidebar {
    position: absolute;
    z-index: 10;
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

.sidebar-toggle-mobile {
  display: none;
  padding: 10px;
  text-align: center;
  background-color: var(--accent-color);
  color: #fff;
  cursor: pointer;
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
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
}
</style>
