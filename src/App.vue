<template>
  <div class="min-h-screen bg-base-200">
    <!-- Header Section -->
    <header class="text-center mt-10 mx-10">
      <h1 class="text-4xl mb-10">Large English</h1>
      <p>
        A collection of AI Drills to help you practise your English. Open directly in ChatGPT or
        copy the prompt to use in your app of choice. Remember kids, AI makes mistakes and has no
        soul or feelings, so feel free to argue with it!
      </p>
    </header>

    <!-- Prompts List -->
    <div class="container mx-auto px-4 mt-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <PromptCard v-for="prompt in prompts" :key="prompt.id" :prompt="prompt" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import PromptCard from './components/PromptCard.vue'

export default defineComponent({
  components: {
    PromptCard,
  },
  setup() {
    const prompts = ref([])

    const fetchPrompts = async () => {
      try {
        const response = await axios.get('https://le-api.onrender.com/api/prompts/')
        prompts.value = response.data
      } catch (error) {
        console.error('API call failed:', error)
      }
    }

    onMounted(fetchPrompts)

    return { prompts }
  },
})
</script>
