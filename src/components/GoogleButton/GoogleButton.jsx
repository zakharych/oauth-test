import './GoogleButton.css'

export function GoogleButton({renderProps}) {
  
  return <button className="google-login-button" onClick={renderProps.onClick} disabled={renderProps.disabled}>
    <span className="google-login-button__icon">
      login
    </span>
    Login
  </button>
}
