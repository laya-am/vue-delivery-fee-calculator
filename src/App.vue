<script setup>
import Form from './components/Form.vue'
</script>

<template>
  <header>
    <h1>Delivery Fee Calculator</h1>
  </header>
  <main>
    <Form />
    <p>Delivery Price:</p>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
