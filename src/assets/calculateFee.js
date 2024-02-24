// export interface CalculationData {
//     cartValue: number;
//     distance: number;
//     numOfItems: number;
//     orderTime: string;
//   }

export function calculateFee(data) {
  console.log('data in calculateFee: ', data)
  const { cartValue, distance, numOfItems, orderTime } = data

  const cartSurcharge = cartValue < 10 ? 10 - cartValue : 0
  const deliveryFee = 2 + (distance > 1000 ? Math.ceil((distance - 1000) / 500) : 0)
  const numOfItemsSurcharge = numOfItems > 4 ? (numOfItems - 4) * 0.5 : 0
  const bulkFee = numOfItems > 12 ? 1.2 : 0

  let newFee =
    cartValue >= 200 ? 0 : Math.min(cartSurcharge + deliveryFee + bulkFee + numOfItemsSurcharge, 15)

  const date = orderTime.slice(0, 10)
  const time = orderTime.slice(11, 16)

  const hour = +time.slice(0, 2)
  const day = new Date(date).getDay()

  day === 5 && hour >= 15 && hour <= 18 ? (newFee = Math.min(newFee * 1.2, 15)) : null

  return newFee
}
