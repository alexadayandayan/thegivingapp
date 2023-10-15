import tgaLogo from '../assets/TGA.png';
import { useState } from 'react';
import '../App.scss';

function App() {
  const [getUser, setUser] = useState<any>(null);

  const func = async () => {
    const response = await window.api.ping();
    const user = await window.api.users();

    console.log(response); // prints out 'pong'
    console.log(user); // prints out 'pong'
    setUser(user);
  };

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={tgaLogo} className="logo tga" alt="TGA logo" />
        </a>
      </div>
      <h1>THE GIVING APP</h1>

      <button onClick={() => func()}>
        count is {getUser && getUser?.Username}
      </button>

      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
