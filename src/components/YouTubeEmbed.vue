<template>
  <div class="youtube-embed">
    <iframe
      :src="iframeSrc"
      :title="title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'YouTubeEmbed',
  props: {
    videoId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: 'YouTube video player',
    },
  },
  computed: {
    iframeSrc() {
      return `https://www.youtube.com/embed/${this.videoId}`
    },
  },
})
</script>

<style scoped>
.youtube-embed {
  width: 100%; /* Take up the full width of the parent */
  aspect-ratio: 16 / 9; /* Maintain 16:9 aspect ratio */
}

.youtube-embed iframe {
  width: 100%;
  height: 100%;
}
</style>
