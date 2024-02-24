<script setup>
defineProps({
  distance: Number
})
const emit = defineEmits(['update'])
</script>

<template>
  <label for="distance">Distance:</label>
  <input
    type="number"
    id="distance"
    :value="distance"
    @input="(e) => emit('update', +e.target.value)"
  />
</template>
