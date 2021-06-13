import React from "react";

const Welcome = () => {
  return (
    <div>
      <header
        className="text-center text-white masthead"
        style={{ backgroundColor: "rgb(24, 188, 156)" }}
      >
        <div className="container">
          <img
            className="img-fluid d-block mx-auto mb-5"
            src="assets/img/logo.png"
          />
          <h1>TextIt</h1>
          <hr className="star-light" />
          <h2
            className="font-weight-light mb-0"
            style={{ paddingBottom: "25px" }}
          >
            Register and get connected to your friends
          </h2>

          <a
            className="btn btn-primary"
            role="button"
            href="/register"
            style={{
              background: "rgb(255,255,255)",
              color: "var(--bs-primary)",
              margin: "0px",
            }}
          >
            Register
          </a>

          <h3
            className="font-weight-light mb-0"
            style={{ marginTop: "25px", paddingBottom: "25px" }}
          >
            Already have an account?
          </h3>

          <a
            className="btn btn-primary"
            role="button"
            href="/login"
            style={{
              background: "rgb(255,255,255)",
              color: "var(--bs-primary)",
              margin: "0px",
            }}
          >
            Login
          </a>
        </div>
      </header>
    </div>
  );
};

export default Welcome;
