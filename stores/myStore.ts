export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    console.log('oi')
    count.value++
  }

  return { count, doubleCount, increment }
})
