<script>
import { defineComponent, ref, computed, onMounted } from 'vue'
import YouTubeEmbed from '../components/YouTubeEmbed.vue'
import axios from 'axios'

export default defineComponent({
  components: {
    YouTubeEmbed,
  },
  setup() {
    const page = ref([])

    const encodedEmail = 'aGVsbG9AbGFyZ2VlbmdsaXNoLmNvbQ==' // Base64

    const decodedEmailText = computed(() => atob(encodedEmail))
    const decodedEmailLink = computed(() => `mailto:${atob(encodedEmail)}`)

    const fetchPages = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}pages/home`)
        page.value = response.data
      } catch (error) {
        console.error('API call failed:', error)
      }
    }

    onMounted(fetchPages)

    return { page, decodedEmailText, decodedEmailLink }
  },
})
</script>

<template>
  <!-- Header Section -->
  <header class="text-center">
    <h1 class="text-4xl font-bold mb-6">Large English</h1>
  </header>

  <p class="text-base-content my-4">
    {{ page.content }}
  </p>

  <YouTubeEmbed :videoId="page.video" />
</template>
