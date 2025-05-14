import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MarkdownCheatsheet from '../views/MarkdownCheatsheet.vue'
import EditorView from '../views/EditorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EditorView,
    },
    {
      path: '/cheatsheet',
      name: 'cheatsheet',
      component: MarkdownCheatsheet,
    }
  ],
})

export default router