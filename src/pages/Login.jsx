import { react } from "fontawesome";

const login = () => {
  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="logo">react chat</h2>
        <p>made by M.Hesam.Moradian</p>
        <form action="">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">sing in</button>
        </form>
        <p>
          do you have an acount? <span className="login-link">register</span>
        </p>
      </div>
    </div>
  );
};
export default login;
