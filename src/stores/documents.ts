import { defineStore } from 'pinia'

interface Document {
  id: string
  name: string
  content: string
}

interface DocumentsState {
  documents: Document[]
  activeDocId: string | null
  darkMode: boolean
  sidebarVisible: boolean
  previewVisible: boolean
  fullPreviewMode: boolean
}

export const useDocumentsStore = defineStore('documents', {
  state: (): DocumentsState => ({
    documents: [],
    activeDocId: null,
    darkMode: false,
    sidebarVisible: true,
    previewVisible: true,
    fullPreviewMode: false,
  }),

  getters: {
    activeDocument: (state): Document => {
      return (
        state.documents.find((doc) => doc.id === state.activeDocId) || {
          id: '',
          name: '',
          content: '',
        }
      )
    },
  },

  actions: {
    loadDocuments() {
      // Wczytaj dokumenty z localStorage
      const savedDocs = localStorage.getItem('markdown-documents')
      if (savedDocs) {
        this.documents = JSON.parse(savedDocs)
      }

      // Wczytaj aktywny dokument
      const savedActiveId = localStorage.getItem('active-document-id')
      if (savedActiveId && this.documents.some((doc) => doc.id === savedActiveId)) {
        this.activeDocId = savedActiveId
      } else if (this.documents.length > 0) {
        this.activeDocId = this.documents[0].id
      } else {
        // Utwórz pierwszy dokument, jeśli nie ma zapisanych
        this.createDocument()
      }

      // Wczytaj ustawienia UI
      const savedDarkMode = localStorage.getItem('dark-mode')
      if (savedDarkMode) {
        this.darkMode = JSON.parse(savedDarkMode)
      }

      const savedSidebarVisible = localStorage.getItem('sidebar-visible')
      if (savedSidebarVisible) {
        this.sidebarVisible = JSON.parse(savedSidebarVisible)
      }

      const savedPreviewVisible = localStorage.getItem('preview-visible')
      if (savedPreviewVisible) {
        this.previewVisible = JSON.parse(savedPreviewVisible)
      }
    },

    saveToLocalStorage() {
      // Zapisz dokumenty
      localStorage.setItem('markdown-documents', JSON.stringify(this.documents))

      // Zapisz aktywny dokument
      if (this.activeDocId) {
        localStorage.setItem('active-document-id', this.activeDocId)
      }

      // Zapisz ustawienia UI
      localStorage.setItem('dark-mode', JSON.stringify(this.darkMode))
      localStorage.setItem('sidebar-visible', JSON.stringify(this.sidebarVisible))
      localStorage.setItem('preview-visible', JSON.stringify(this.previewVisible))
    },

    createDocument() {
      const newDoc: Document = {
  id: Date.now().toString(),
  name: 'czesc.md',
  content: `# Witaj w edytorze Markdown

Markdown to lekki język znaczników, którego możesz użyć do dodania elementów formatowania do zwykłych dokumentów tekstowych.

## Jak z tego korzystać?

1. Napisz tekst w formacie markdown w oknie edytora
2. Zobacz wyrenderowany markdown w oknie podglądu

### Funkcje

- Twórz nagłówki, akapity, linki, cytaty blokowe, wstawki kodu, bloki kodu i listy
- Nazwij i zapisz dokument, aby mieć do niego dostęp później
- Wybierz między jasnym a ciemnym motywem, w zależności od preferencji

> To jest przykład cytatu blokowego. Jeśli chcesz dowiedzieć się więcej o składni markdown, możesz odwiedzić tę [ściągawkę markdown](https://www.markdownguide.org/cheat-sheet/).

#### Nagłówki

Aby utworzyć nagłówek, dodaj znak hash (#) przed tekstem nagłówka. Liczba znaków hash powinna odpowiadać poziomowi nagłówka. W tym przewodniku użyliśmy wszystkich sześciu poziomów nagłówków (niekoniecznie w poprawny sposób, w jaki powinieneś używać nagłówków!), aby zilustrować, jak powinny wyglądać.

##### Listy

Powyżej możesz zobaczyć przykłady list numerowanych i nienumerowanych.

###### Bloki kodu

Ten edytor markdown pozwala na wstawki kodu w linii, takie jak: \`<p>Jestem w linii</p>\`. Umożliwia również tworzenie większych bloków kodu, takich jak:

\`\`\`
<main>
  <h1>To jest większy blok kodu</h1>
</main>
\`\`\`
`
}

      this.documents.push(newDoc)
      this.activeDocId = newDoc.id
      this.saveToLocalStorage()
    },

    selectDocument(id: string) {
      this.activeDocId = id
      this.saveToLocalStorage()
    },

    updateDocumentContent(content: string) {
      const document = this.documents.find((doc) => doc.id === this.activeDocId)
      if (document) {
        document.content = content
        this.saveToLocalStorage()
      }
    },

    updateDocumentName(name: string) {
      const document = this.documents.find((doc) => doc.id === this.activeDocId)
      if (document) {
        document.name = name
        this.saveToLocalStorage()
      }
    },

    deleteDocument() {
      const index = this.documents.findIndex((doc) => doc.id === this.activeDocId)
      if (index !== -1) {
        this.documents.splice(index, 1)

        // Wybierz nowy aktywny dokument
        if (this.documents.length > 0) {
          this.activeDocId = this.documents[0].id
        } else {
          // Jeśli nie ma więcej dokumentów, utwórz nowy
          this.createDocument()
        }

        this.saveToLocalStorage()
      }
    },

    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible
      this.saveToLocalStorage()
    },

    togglePreviewMode() {
      if (this.fullPreviewMode) {
        // Wyjdź z trybu pełnoekranowego
        this.fullPreviewMode = false
      } else if (this.previewVisible) {
        // Przejdź do trybu pełnoekranowego
        this.fullPreviewMode = true
      } else {
        // Włącz podgląd
        this.previewVisible = true
      }
      this.saveToLocalStorage()
    },

    toggleDarkMode() {
      this.darkMode = !this.darkMode
      this.saveToLocalStorage()
    },
  },
})
