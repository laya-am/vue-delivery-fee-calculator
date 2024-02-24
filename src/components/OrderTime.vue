<script setup>
defineProps({
  orderTime: String
})
const emit = defineEmits(['update'])
</script>
<template>
  <label for="orderTime">Order Time:</label>
  <input
    type="datetime-local"
    id="orderTime"
    :value="orderTime"
    @input="(e) => emit('update', e.target.value)"
  />
</template>
