import { useRef, useState } from 'react';
import bcrypt from 'bcryptjs';
import '../App.scss';
import { IUser } from '../data/user';

function App() {
  const usernameInputRef: any = useRef();
  const passwordInputRef: any = useRef();
  let [isInvalid, setIsInvalid] = useState(false);
  let [getProfile, setProfile] = useState<IUser | any>(null);

  const handleLoginForm = async () => {
    const username = usernameInputRef?.current?.value;
    const password = passwordInputRef?.current?.value;

    const prof = await window.api.login({ username: username });
    setProfile(prof);

    // Check if login matched
    setIsInvalid(bcrypt.compareSync(password, prof?.Password));
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <form>
          <input style={{ padding: '15px', borderRadius: '10px', margin: '10px' }} ref={usernameInputRef} type='username' placeholder='Username' />
          <input style={{ padding: '15px', borderRadius: '10px', margin: '10px' }} ref={passwordInputRef} type='password' placeholder='Password' />
          <button
            type='submit'
            style={{ padding: '15px', borderRadius: '10px', margin: '10px' }}
            onClick={e => {
              e.preventDefault();
              handleLoginForm();
            }}>
            Log In
          </button>
          <br />
        </form>
        <br />
        <br />
        <span>
          {isInvalid ? (
            <span>Hello {getProfile?.Name}
              <br />
              Login Details Matched {isInvalid}
            </span>
          ) : (
            <span>Invalid login details</span>
          )}
        </span>
      </header>
    </div>
  );
}

export default App;
