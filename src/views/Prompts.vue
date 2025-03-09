<template>
  <!-- Header Section -->
  <header class="text-center">
    <h1 class="text-4xl font-bold mb-6">Large English</h1>
    <p class="text-base-content">
      A collection of AI Drills to help you practise your English. Open them directly in ChatGPT or
      copy the prompt to use in your app of choice. Remember kids, AI makes mistakes and has no soul
      or feelings, so feel free to argue with it!
    </p>
  </header>

  <div class="divider"></div>

  <!-- Contact Section -->
  <div class="text-center">
    <p>
      For private English lessons email:
      <a :href="decodedEmailLink" class="text-gray-400 hover:underline">{{ decodedEmailText }}</a>
    </p>
  </div>

  <div class="divider"></div>

  <!-- Prompts List -->
  <div class="mt-10">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <PromptCard v-for="prompt in prompts" :key="prompt.id" :prompt="prompt" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue'
import axios from 'axios'
import PromptCard from '../components/PromptCard.vue'

export default defineComponent({
  components: {
    PromptCard,
  },
  setup() {
    const prompts = ref([])

    const encodedEmail = 'aGVsbG9AbGFyZ2VlbmdsaXNoLmNvbQ==' // Base64

    const decodedEmailText = computed(() => atob(encodedEmail))
    const decodedEmailLink = computed(() => `mailto:${atob(encodedEmail)}`)

    const fetchPrompts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}prompts/`)
        prompts.value = response.data
      } catch (error) {
        console.error('API call failed:', error)
      }
    }

    onMounted(fetchPrompts)

    return { prompts, decodedEmailText, decodedEmailLink }
  },
})
</script>
