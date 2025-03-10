<template>
  <!-- Header Section -->
  <header class="text-center">
    <h1 class="text-4xl font-bold mb-6">{{ post.title }}</h1>
  </header>

  <div class="divider"></div>

  <!-- Prompts List -->
  <div v-html="post.content" class="mt-10"></div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const post = ref({})
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}posts/${useRoute().params.slug}`,
        )
        post.value = response.data
      } catch (error) {
        console.error('API call failed:', error)
      }
    }

    onMounted(fetchPost)

    return { post }
  },
})
</script>
