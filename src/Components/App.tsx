// import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/electron-vite.animate.svg'
import tgaLogo from '../assets/TGA.png'
import '../App.scss'
import { setWindowTitle } from '@/Data/IPC/IPCMessages';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <a href="https://electron-vite.github.io" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        <a href="https://react.dev" target="_blank">
          <img src={tgaLogo} className="logo tga" alt="TGA logo" />
        </a>
      </div>
      <h1>THE GIVING APP</h1>
      <div className="card">
        <button onClick={() => setWindowTitle("...Freely you have received; freely give.")}>
          {/* count is {count} */}
          Change Title
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
