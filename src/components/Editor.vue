<template>
    <div class="editor" :class="{ 'full-width': !previewVisible }">
      <div class="editor-header">MARKDOWN</div>
      <textarea
        v-model="content"
        class="editor-textarea"
        spellcheck="false"
        @input="updateContent"
      ></textarea>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from 'vue';
  
  
  const props = defineProps<{
    modelValue: string;
    previewVisible: boolean;
  }>();
  
  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();
  
  const content = ref(props.modelValue);
  
  const updateContent = () => {
    emit('update:modelValue', content.value);
  };
  
  // Aktualizuj content gdy zmienia się props.modelValue
  watch(() => props.modelValue, (newValue) => {
    if (newValue !== content.value) {
      content.value = newValue;
    }
  });
  </script>
  
  <style scoped>
  .editor {
    display: flex;
    flex-direction: column;
    width: 50%;
    border-right: 1px solid var(--border-color);
    transition: width 0.3s ease;
  }
  
  .editor.full-width {
    width: 100%;
  }
  
  .editor-header {
    padding: 15px;
    color: var(--text-light);
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    border-bottom: 1px solid var(--border-color);
  }
  
  .editor-textarea {
    flex: 1;
    padding: 20px;
    background-color: var(--bg-editor);
    color: var(--text-color);
    font-family: 'Roboto Mono', monospace;
    font-size: 14px;
    line-height: 1.6;
    resize: none;
    border: none;
    outline: none;
    overflow-y: auto;
    white-space: pre-wrap;
  }
  
  @media (max-width: 768px) {
    .editor {
      width: 100%;
      height: 50%;
      border-right: none;
      border-bottom: 1px solid var(--border-color);
    }
  }
  </style>