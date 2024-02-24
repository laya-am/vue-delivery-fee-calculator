<script setup>
defineProps({
  numOfItems: Number
})

const emit = defineEmits(['update'])
</script>

<template>
  <label for="numberOfItems">Number of Items:</label>
  <input
    type="number"
    id="numberOfItems"
    :value="numOfItems"
    @input="(e) => emit('update', +e.target.value)"
  />
</template>
