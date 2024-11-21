
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'
import { StoreProvider } from 'easy-peasy';
import store from './store/index.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
createRoot(document.getElementById('root')).render(
  // <StrictMode>
      <StoreProvider store={store}>
        <ToastContainer/>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
      </StoreProvider>
  // </StrictMode>,
)
