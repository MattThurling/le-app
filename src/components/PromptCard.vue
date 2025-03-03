<template>
  <div class="card">
    <!-- Image Section -->
    <figure v-if="prompt.image_url">
      <img
        :src="prompt.image_url"
        class="w-full h-40 object-cover rounded-t-lg"
        alt="Prompt image"
      />
    </figure>

    <div class="card-body">
      <!-- Title -->
      <h2 class="card-title text-lg font-semibold">{{ prompt.title }}</h2>

      <!-- Action Buttons -->
      <div class="flex items-center gap-3 mt-3">
        <!-- ChatGPT Button -->
        <button class="btn btn-primary btn-sm" @click="openChatGPT">ChatGPT</button>

        <!-- Copy Button -->
        <LucideClipboardCopy class="w-4 h-4" @click="copyToClipboard" />

        <!-- Copy Success Message -->
        <span v-if="copied" class="text-xs text-green-500">Copied!</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import { ClipboardCopy } from 'lucide-vue-next'

export default defineComponent({
  components: { LucideClipboardCopy: ClipboardCopy },
  props: {
    prompt: {
      required: true,
    },
  },
  setup(props) {
    // ✅ Clipboard Functionality
    const { copy, copied } = useClipboard()

    const copyToClipboard = () => {
      copy(props.prompt.content)
    }

    // ✅ Open ChatGPT (Placeholder Function)
    const openChatGPT = () => {
      const chatGPTURL = `https://chat.openai.com/?q=${encodeURIComponent(props.prompt.content)}`
      window.open(chatGPTURL, '_blank')
    }

    return { LucideClipboardCopy: ClipboardCopy, copyToClipboard, copied, openChatGPT }
  },
})
</script>
