import { useState, useEffect, useRef } from 'react'
import ToolBar from './components/ToolBar/ToolBar'
import { marked } from 'marked'

function App() {
  const [text, setText] = useState(localStorage.getItem("markdownText"))
  const textAreaRef = useRef(null)

  const renderText = () => {
    return {__html: marked(text)}
  }

  useEffect(() => {
    localStorage.setItem("markdownText", text)
  }, [text])

  const insertText = (before, after) => {
    const textArea = textAreaRef.current
    const start = textArea.selectionStart
    const end = textArea.selectionEnd

    const previousText = textArea.value
    const beforeText = previousText.substring(0, start)
    const selectedText = previousText.substring(start, end)
    const afterText = previousText.substring(end)

    const newText = `${beforeText}${before}${selectedText}${after}${afterText}`

    setText(newText)
    textArea.focus()
  }

  const clearTextArea = () => {
    setText("")
  }

  return (
    <div className="app-container">
      <ToolBar insertText={insertText} />
      <textarea 
        ref={textAreaRef} 
        value={text} 
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div className="markdown-content" dangerouslySetInnerHTML={renderText()} />

      <button className="clear-btn" onClick={clearTextArea}> Clear </button>
    </div> 
  )
}

export default App
