<template>
  <div class="min-h-screen bg-base-200 flex justify-center">
    <div class="container max-w-4xl mx-auto px-6 py-10">
      <!-- Header Section -->
      <header class="text-center">
        <h1 class="text-4xl font-bold mb-6">Large English</h1>
        <p class="text-base-content">
          A collection of AI Drills to help you practise your English. Open them directly in ChatGPT
          or copy the prompt to use in your app of choice. Remember kids, AI makes mistakes and has
          no soul or feelings, so feel free to argue with it!
        </p>
      </header>

      <div class="divider"></div>

      <!-- Contact Section -->
      <div class="text-center">
        <p>
          For private English lessons email:
          <a :href="decodedEmailLink" class="text-gray-400 hover:underline">{{
            decodedEmailText
          }}</a>
        </p>
      </div>

      <div class="divider"></div>

      <!-- Prompts List -->
      <div class="mt-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <PromptCard v-for="prompt in prompts" :key="prompt.id" :prompt="prompt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue'
import axios from 'axios'
import PromptCard from './components/PromptCard.vue'

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
        const response = await axios.get('https://le-api-kpqgwjcf3q-nw.a.run.app/api/prompts/')
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
