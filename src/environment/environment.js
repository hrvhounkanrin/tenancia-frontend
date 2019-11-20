const { VUE_APP_API_BASE_URL,VUE_APP_TITLE, NODE_ENV = '' } = process.env

console.log(process.env)
const environment = NODE_ENV.toLowerCase()
const apiBaseUrl = VUE_APP_API_BASE_URL
const appName = VUE_APP_TITLE
export { environment, apiBaseUrl, appName }
