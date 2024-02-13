export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return navigateTo(to)
  }

  if (to.path !== '/login') {
    return navigateTo("/login")
  }
})
