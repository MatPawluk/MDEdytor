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

This markdown editor allows for inline-code snippets, like this: \`<p>I'm inline</p>\`. It also allows for larger code blocks like this:

\`\`\`
<main>
  <h1>This is a larger code block</h1>
</main>
\`\`\`
`,
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
