import React from 'react'
import ReactDOM from 'react-dom/client'
import HolaMundo from './App.jsx'
import './index.css'

import { TaskContextProvider } from './context/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <HolaMundo />
    </TaskContextProvider>
  </React.StrictMode>,
)
