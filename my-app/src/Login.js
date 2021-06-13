import { useContext, useRef, React } from "react";
import axios from "axios";
import { loginCall } from "./apicalls";
import makeToast from "./Toaster";
import { AuthContext } from "./components/AuthContext";

export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
  const loginUser = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: usernameRef.current.value,
        userName: "",
        password: passwordRef.current.value,
      },
      dispatch
    );
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
                        disabled={isFetching}
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
