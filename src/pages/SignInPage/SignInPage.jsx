import "./SignInPage.scss";

export function SignInPage() {
  return (
    <section className="sign-in-page">
      <div className="sign-in-container">
        <label>Email</label>
        <input type="email" placeholder="Enter your email address" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button className="sign-in-button">Countinue</button>
        <span className="divider-text">Or continue with</span>
        <div className="upper-divider"></div>
        <div className="sign-in-with-socials"></div>
        <div className="lower-divider"></div>
        <p>
          By signing in or creating an account, you agree with our
          <a href="#">Terms & conditions</a> and <a href="#">Privacy policy</a>
        </p>
      </div>
    </section>
  );
}
