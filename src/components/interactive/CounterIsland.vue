<script setup lang="ts">
import { ref } from 'vue';

// Temporary validation island: proves the Vue integration works end-to-end
// (build + hydration) without touching the real pages. Will be removed when
// the first genuinely interactive component is introduced.
const count = ref(0);
</script>

<template>
  <section class="island-check">
    <p>
      Vue island attivo — contatore: <strong>{{ count }}</strong>
    </p>
    <button type="button" @click="count++">+1</button>
  </section>
</template>
