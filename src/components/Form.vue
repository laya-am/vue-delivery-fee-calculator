<script setup>
import { calculateFee } from '../assets/calculateFee'
import CartValueInput from './CartValueInput.vue'
import DistanceInput from './DistanceInput.vue'
import NumOfItemsInput from './NumOfItemsInput.vue'
import OrderTime from './OrderTime.vue'
import { reactive, ref } from 'vue'

const data = reactive({ cartValue: 0, distance: 0, numOfItems: 0, orderTime: '' })

function handleSubmit() {
  console.log('data1: ', data.cartValue)
  console.log('data2: ', data.distance)
  console.log('data3: ', data.numOfItems)
  console.log('data4: ', data.orderTime)
  const newFee = calculateFee(data)
  console.log('form submitted. fee: ', newFee)
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <CartValueInput :cartValue="data.cartValue" @update="(value) => (data.cartValue = value)" />
    <DistanceInput :distance="data.distance" @update="(value) => (data.distance = value)" />
    <NumOfItemsInput :numOfItems="data.numOfItems" @update="(value) => (data.numOfItems = value)" />
    <OrderTime :orderTime="data.orderTime" @update="(value) => (data.orderTime = value)" />
    <button>Submit</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
