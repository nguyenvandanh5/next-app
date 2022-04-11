import Image from "next/image";
import React from "react";
import styles from "../../styles/User.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.col_1}>
        <div className={styles.col_1_form}>
          <Image src="/images/logo.svg" width="193px" height="97px" />
          <h2>DE2 PORTAL LOGIN</h2>
          <p>Internal management portal for CMC Global</p>
          <form className={styles.form_control}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.input_form}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className={styles.input_form}
            />
            <div className="form-group form-check">
              <input
                type="checkbox"
                id="checkbox"
                className="form-check-input"
              />
              <label htmlFor="#checkbox">Remember me</label>
            </div>
            <button>Login</button>
            <div>
              <a href="#">Forgot your password</a>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.col_2}>
        <Image src="/images/home.jpg" width="858px" height="574px" />
      </div>
    </div>
  );
};

export default Login;
