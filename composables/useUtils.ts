export const useUtils = () => ({
  sayHello() {
    console.log('hello')
  },

  state: useState('foo', () => 'foo')
})
