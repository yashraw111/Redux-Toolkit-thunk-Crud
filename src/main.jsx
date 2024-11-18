import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { Store } from './Redux-thunk/Store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={Store}>
    <App />
    </Provider>
  </StrictMode>,
)
