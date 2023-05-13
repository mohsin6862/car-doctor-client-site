import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom';

import router from './components/Routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='w-full  lg:max-w-6xl mx-auto'>
<React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
</div>
)
