export default function SignUpPage() {
  return (
    <div className="SignUp-container">
      <h1>SIGN UP</h1>
      <br />
      <p>🚧 PAGE EN COURS DE CONSTRUCTION 🚧</p>
      <form className="Signup-form">
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="SignUp-btn">
          Create Account
        </button>
      </form>
    </div>
  );
}
