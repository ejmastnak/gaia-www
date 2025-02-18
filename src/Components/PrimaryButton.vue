<script setup>
import { ref } from 'vue'
const button = ref(null)
defineExpose({ focus: () => button.value.focus() });
</script>

<template>
    <button
        ref="button"
        class="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus-visible:bg-gray-700 dark:focus-visible:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800 transition ease-in-out duration-150"
    >
        <slot />
    </button>
</template>
