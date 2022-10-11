<script setup>
import {ref} from 'vue'

const count = ref(0)

function increase() {
  count.value++
}
</script>

<template>
  <div>{{ count }}</div>
  <button class="btn btn-primary" @click="increase">Button</button>
</template>
