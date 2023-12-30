import { useState, useEffect, useRef } from 'react'
import ToolBar from './components/ToolBar/ToolBar'

function App() {

  return (
    <div className="app-container">
      <ToolBar />
      <textarea></textarea>

      <div className="markdown-content"></div>
    </div>
  )
}

export default App
