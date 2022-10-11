<script setup>
import { ref } from 'vue'
const count = ref(0)
function increase () {
  count.value ++
}
</script>

<template>
  <div>{{ count }}</div>
  <button class="bg-sky-500/100" @click="increase">按钮</button>
</template>
