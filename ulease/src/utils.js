import store from '@/store'

export const getDateString = (date) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`
}

export const handleCredentialResponse = (res) => {
  store.commit('setLoggedIn', true)
}