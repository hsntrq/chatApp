import React from "react";
import axios from "axios";
import makeToast from "./Toaster";

const Login = (props) => {
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();

  const loginUser = (e) => {
    e.preventDefault();
    const userName = usernameRef.current.value;
    const email = usernameRef.current.value;
    const password = passwordRef.current.value;

    axios
      .post("http://localhost:8000/api/users/login", {
        userName,
        email,
        password,
      })
      .then((response) => {
          console.log(response.data)
        makeToast("success", response.data.message);
        localStorage.setItem("CC_Token", response.data.token);
        props.history.push("/chat");
      })
      .catch((err) => {
        makeToast("error", err.response.data.message);
      });
  };
  return (
    <div>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="text-uppercase text-center text-secondary">
            LogIn Here
          </h2>
          <hr className="star-dark mb-5" />
          <div className="row">
            <div className="col">
              <section
                className="register-photo"
                style={{ backgroundColor: "transparent" }}
              >
                <div className="form-container" style={{ marginTop: "40px" }}>
                  <div
                    className="image-holder"
                    style={{
                      background:
                        "url(&quot;assets/img/IINET-DOSAGE-1.jpg&quot;) left / cover no-repeat",
                    }}
                  ></div>
                  <form method="post" onSubmit={loginUser}>
                    <h2 className="text-center">Sign in to your Account</h2>
                    <div className="form-group mb-3">
                      <input
                        className="form-control"
                        type="text"
                        name="Username"
                        placeholder="Enter your Username or Email"
                        ref={usernameRef}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Password"
                        ref={passwordRef}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <button
                        className="btn btn-primary d-block w-100"
                        type="submit"
                        style={{
                          color: "rgb(255,255,255)",
                          backgroundColor: "#00b5a8",
                        }}
                      >
                        LogIn
                      </button>
                    </div>
                    <a className="already" href="login.html">
                      ¿Ya tienes una cuenta? Inicia sesión aquí
                    </a>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
