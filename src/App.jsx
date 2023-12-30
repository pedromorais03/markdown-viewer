import { useState, useEffect, useRef } from 'react'
import ToolBar from './components/ToolBar/ToolBar'
import { marked } from 'marked'

function App() {
  const [text, setText] = useState("# AA")
  const textAreaRef = useRef(null)

  const renderText = () => {
    return {__html: marked(text)}
  }

  return (
    <div className="app-container">
      <ToolBar />
      <textarea 
        ref={textAreaRef} 
        value={text} 
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div className="markdown-content" dangerouslySetInnerHTML={renderText()} />
    </div> 
  )
}

export default App
