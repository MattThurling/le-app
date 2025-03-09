<script>
import { defineComponent, ref, computed, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
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
  <div>
    <h1>{{ page.title }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>
