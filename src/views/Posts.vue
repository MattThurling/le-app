<template>
  <!-- Header Section -->
  <header class="text-center">
    <h1 class="text-4xl font-bold mb-6">Blog</h1>
    <p class="text-base-content">Blog articles.</p>
  </header>

  <div class="divider"></div>

  <!-- Contact Section -->
  <div class="text-center">
    <p>
      For private English lessons email:
      <a :href="hiddenEmail().link" class="text-gray-400 hover:underline">{{
        hiddenEmail().text
      }}</a>
    </p>
  </div>

  <div class="divider"></div>

  <!-- Prompts List -->
  <div class="mt-10">
    <p v-for="post in posts" :key="post.id">
      <a :href="`posts/${post.slug}`">{{ post.title }}</a>
    </p>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import { hiddenEmail } from '../utils/emailCodec'

export default defineComponent({
  setup() {
    const posts = ref([])
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}posts/`)
        posts.value = response.data
        console.log(posts.value)
      } catch (error) {
        console.error('API call failed:', error)
      }
    }

    onMounted(fetchPosts)

    return { posts, hiddenEmail }
  },
})
</script>
