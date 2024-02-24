<script setup>
defineProps({
  cartValue: Number
})
const emit = defineEmits(['update'])
</script>

<template>
  <label for="cartValue">Cart Value</label>
  <input
    type="number"
    id="cartValue"
    :value="cartValue"
    @input="(e) => emit('update', +e.target.value)"
  />
</template>

<style scoped></style>
