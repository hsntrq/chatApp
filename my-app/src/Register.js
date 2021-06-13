import React from "react";
import axios from "axios";
import makeToast from "./Toaster";

const Register = (props) => {
  const firstnameRef = React.createRef();
  const lastnameRef = React.createRef();
  const emailRef = React.createRef();
  const idRef = React.createRef();
  const passwordRef = React.createRef();
  const genderRef = React.createRef();

  const registerUser = (e) => {
    e.preventDefault();
    const firstName = firstnameRef.current.value;
    const lastName = lastnameRef.current.value;
    const email = emailRef.current.value;
    const userName = idRef.current.value;
    const password = passwordRef.current.value;
    const gender = genderRef.current.value;

    axios
      .post("http://localhost:8000/api/users/register", {
        firstName,
        lastName,
        email,
        userName,
        gender,
        password,
      })
      .then((response) => {
        console.log(Response.data);
        makeToast("success", response.data.message);
        props.history.push("/login");
      })
      .catch((err) => {
        makeToast("error", err.response.data.message);
      });
  };
  return (
    <div>
      <div className="container">
        <h2 className="text-uppercase text-center text-secondary">
          Register Here
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
                <form onSubmit={registerUser} action="http://localhost:3000/login">
                  <h2 className="text-center">Sign up</h2>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      ref={firstnameRef}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      ref={lastnameRef}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                      ref={emailRef}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="userName"
                      placeholder="Username"
                      ref={idRef}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      ref={passwordRef}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        value="M"
                        ref={genderRef}
                      />{" "}
                      Male
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        value="F"
                        ref={genderRef}
                      />
                      {" Female"}
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="submit"
                      className="btn btn-primary d-block w-100"
                      value="Register"
                      style={{
                        color: "rgb(255,255,255)",
                        backgroundColor: "#00b5a8",
                      }}
                    />
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
