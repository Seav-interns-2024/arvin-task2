<script setup>
import { ref, onMounted } from 'vue';

import { useRouter } from 'vue-router';

const videoPlayer = ref(null);

function togglePlayback() {
  if (videoPlayer.value.paused) {
    videoPlayer.value.play();
  } else {
    videoPlayer.value.pause();
  }
}

onMounted(() => {
  if (process.client) {
    const video = videoPlayer.value;
    if (video) {
      video.play().catch(error => {
        video.pause();
      });
    }
  }
});
</script>

<template>
  <div>
    
  </div>
  <div class="video-container">
    <video ref="videoPlayer" @click="togglePlayback" class="video-player" autoplay>
      <source src="/assets/videos/strawhatToast.mp4" type="video/mp4" alt="Kampayyyy">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 45.25%;
}

.video-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
