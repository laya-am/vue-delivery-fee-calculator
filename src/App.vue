<script setup>
import { ref } from 'vue'
import Form from './components/Form.vue'

const fee = ref('')
</script>

<template>
  <header>
    <h1>Delivery Fee Calculator</h1>
  </header>
  <main>
    <Form @updateFee="(value) => (fee = value)" />
    <p>Delivery Price: {{ fee }}</p>
  </main>
</template>

<style scoped>
header {
  text-align: center;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
