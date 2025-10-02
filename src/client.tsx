import { initClient, initClientNavigation } from 'rwsdk/client'

// initClient()
// initClientNavigation()

const { handleResponse } = initClientNavigation();
initClient({ handleResponse });