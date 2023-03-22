import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { SceneApp, TorusKnotGeomatry } from './Scene'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <SceneApp>
        <TorusKnotGeomatry />
      </SceneApp>
    </div>
  )
}

export default App
