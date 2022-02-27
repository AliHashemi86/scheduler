import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace=false) {
    setMode(newMode)
    if (replace) {
      setHistory([...history.slice(0, -1), newMode])
    } else {
      setHistory([...history, newMode])
    }
    
  }
// [FIRST, SECOND, THIRD]
  function back() {
    if (history.length > 1) {
      setHistory((prev)=> {
        const newHistory = [...prev.slice(0, history.length-1)]
        setMode(newHistory[newHistory.length-1])
        return newHistory
      })
    }
    return 
  }
  return {mode, transition, back}
}

