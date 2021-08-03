
import './App.css';
import { GoogleLogin } from 'react-google-login';
import { GoogleButton } from './components/GoogleButton/GoogleButton';


const responseGoogle = (response) => {
  console.log(response);
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GoogleLogin
          clientId="441628211591-pdjdt68i465s7atl5br2fs4mfvjnphgq.apps.googleusercontent.com"
          render={renderProps => (
            <GoogleButton renderProps={renderProps} />
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />

      </header>
    </div>
  );
}

export default App;


