export default defineNuxtPlugin(nuxtApp => ({
    provide: {
      sayHello: (msg: string) => `hello from myPlugin.ts, ${msg}!`,
      pluginPrintNuxtApp: () => console.log('nuxtApp =>', nuxtApp),
    }
}))
