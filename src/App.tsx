import React, { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Ocean from './Modals/Ocean'
import { SceneApp, TorusKnotGeomatry } from './Scene'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <SceneApp>
        <TorusKnotGeomatry />
        <Ocean />
      </SceneApp>
    </div>
  )
}

export default App
