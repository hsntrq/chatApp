import React, { Component } from "react";
import axios from "axios";
import makeToast from "./Toaster";

const Home = (props) => {
  var i = 0;
  var entry = {};

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
      .then((Response) => {
        console.log(Response.data);
        makeToast("Success", Response.data.message);
        i = 2;
      })
      .catch((err) => {
        alert(Response.data.message);
      });
  };
  const Welcome = () => {
    return (
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
          <button
            className="btn btn-primary"
            type="button"
            style={{
              background: "rgb(255,255,255)",
              color: "var(--bs-primary)",
              margin: "0px",
            }}
            onClick={() => {
              i = 1;
            }}
          >
            Register
          </button>
        </div>
      </header>
    );
  };
  const Register = () => {
    return (<div className="container">
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
            <form onSubmit={registerUser}>
              <h2 className="text-center">Sign up</h2>
              <div className="form-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  ref={firstnameRef}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  ref={lastnameRef}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={emailRef}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  name="userName"
                  placeholder="Username"
                  ref={idRef}
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
                <button
                  className="btn btn-primary d-block w-100"
                  type="submit"
                  style={{
                    color: "rgb(255,255,255)",
                    backgroundColor: "#00b5a8",
                  }}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  </div>
)
  }
  const Login = ()=> {
    return (<section id="portfolio" className="portfolio">
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
              <form method="post" action="afterRegister.html">
                <h2 className="text-center">Sign in to your Account</h2>
                <div className="form-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    name="Username"
                    placeholder="Enter your Username"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
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
                    Crear cuenta
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
  )
  }
  return (
    <div>
      {i == 0 && entry && <Welcome />}
      {i == 1 && <Register />}
      {i == 2 && <Login />}
      <section><div id="frame">
      <div id="sidepanel">
        <div id="profile">
          <div className="wrap">
            <img
              id="profile-img"
              src="http://emilcarlsson.se/assets/mikeross.png"
              className="online"
              alt=""
            />
            <p>Mike Ross</p>
            <i
              className="fa fa-chevron-down expand-button"
              aria-hidden="true"
            ></i>
            <div id="status-options">
              <ul>
                <li id="status-online" className="active">
                  <span className="status-circle"></span> <p>Online</p>
                </li>
                <li id="status-away">
                  <span className="status-circle"></span> <p>Away</p>
                </li>
                <li id="status-busy">
                  <span className="status-circle"></span> <p>Busy</p>
                </li>
                <li id="status-offline">
                  <span className="status-circle"></span> <p>Offline</p>
                </li>
              </ul>
            </div>
            <div id="expanded">
              <label htmlFor="twitter">
                <i className="fa fa-facebook fa-fw" aria-hidden="true"></i>
              </label>
              <input name="twitter" type="text" value="mikeross" />
              <label htmlFor="twitter">
                <i className="fa fa-twitter fa-fw" aria-hidden="true"></i>
              </label>
              <input name="twitter" type="text" value="ross81" />
              <label htmlFor="twitter">
                <i className="fa fa-instagram fa-fw" aria-hidden="true"></i>
              </label>
              <input name="twitter" type="text" value="mike.ross" />
            </div>
          </div>
        </div>
        <div id="search">
          <label htmlFor="">
            <i className="fa fa-search" aria-hidden="true"></i>
          </label>
          <input type="text" placeholder="Search contacts..." />
        </div>
        <div id="contacts">
          <ul>
            <li className="contact">
              <div className="wrap">
                <span className="contact-status online"></span>
                <img
                  src="http://emilcarlsson.se/assets/louislitt.png"
                  alt=""
                />
                <div className="meta">
                  <p className="name">Louis Litt</p>
                  <p className="preview">You just got LITT up, Mike.</p>
                </div>
              </div>
            </li>
            <li className="contact active">
              <div className="wrap">
                <span className="contact-status busy"></span>
                <img
                  src="http://emilcarlsson.se/assets/harveyspecter.png"
                  alt=""
                />
                <div className="meta">
                  <p className="name">Harvey Specter</p>
                  <p className="preview">
                    Wrong. You take the gun, or you pull out a bigger one.
                    Or, you call their bluff. Or, you do any one of a
                    hundred and forty six other things.
                  </p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <span className="contact-status away"></span>
                <img
                  src="http://emilcarlsson.se/assets/rachelzane.png"
                  alt=""
                />
                <div className="meta">
                  <p className="name">Rachel Zane</p>
                  <p className="preview">
                    I was thinking that we could have chicken tonight,
                    sounds good?
                  </p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <span className="contact-status online"></span>
                <img
                  src="http://emilcarlsson.se/assets/donnapaulsen.png"
                  alt=""
                />
                <div className="meta">
                  <p className="name">Donna Paulsen</p>
                  <p className="preview">
                    Mike, I know everything! I'm Donna..
                  </p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <span className="contact-status busy"></span>
                <img
                  src="http://emilcarlsson.se/assets/jessicapearson.png"
                  alt=""
                />
                <div className="meta">
                  <p className="name">Jessica Pearson</p>
                  <p className="preview">
                    Have you finished the draft on the Hinsenburg deal?
                  </p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <span className="contact-status"></span>
                <img
                  src="http://emilcarlsson.se/assets/haroldgunderson.png"
                  alt=""
                />
                <div className="meta">
                  <p className="name">Harold Gunderson</p>
                  <p className="preview">Thanks Mike! :)</p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <span className="contact-status"></span>
                <img
                  src="http://emilcarlsson.se/assets/danielhardman.png"
                  alt=""
                />
                <div className="meta">
                  <p className="name">Daniel Hardman</p>
                  <p className="preview">
                    We'll meet again, Mike. Tell Jessica I said 'Hi'.
                  </p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <span className="contact-status busy"></span>
                <img
                  src="http://emilcarlsson.se/assets/katrinabennett.png"
                  alt=""
                />
                <div className="meta">
                  <p className="name">Katrina Bennett</p>
                  <p className="preview">
                    I've sent you the files for the Garrett trial.
                  </p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <span className="contact-status"></span>
                <img
                  src="http://emilcarlsson.se/assets/charlesforstman.png"
                  alt=""
                />
                <div className="meta">
                  <p className="name">Charles Forstman</p>
                  <p className="preview">Mike, this isn't over.</p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <span className="contact-status"></span>
                <img
                  src="http://emilcarlsson.se/assets/jonathansidwell.png"
                  alt=""
                />
                <div className="meta">
                  <p className="name">Jonathan Sidwell</p>
                  <p className="preview">
                    <span>You:</span> That's bullshit. This deal is solid.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div id="bottom-bar">
          <button id="addcontact">
            <i className="fa fa-user-plus fa-fw" aria-hidden="true"></i>{" "}
            <span>Add contact</span>
          </button>
          <button id="settings">
            <i className="fa fa-cog fa-fw" aria-hidden="true"></i>{" "}
            <span>Settings</span>
          </button>
        </div>
      </div>
      <div className="content">
        <div className="contact-profile">
          <img
            src="http://emilcarlsson.se/assets/harveyspecter.png"
            alt=""
          />
          <p>Harvey Specter</p>
          <div className="social-media">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </div>
        </div>
        <div className="messages">
          <ul>
            <li className="sent">
              <img
                src="http://emilcarlsson.se/assets/mikeross.png"
                alt=""
              />
              <p>
                How the hell am I supposed to get a jury to believe you when
                I am not even sure that I do?!
              </p>
            </li>
            <li className="replies">
              <img
                src="http://emilcarlsson.se/assets/harveyspecter.png"
                alt=""
              />
              <p>
                When you're backed against the wall, break the god damn
                thing down.
              </p>
            </li>
            <li className="replies">
              <img
                src="http://emilcarlsson.se/assets/harveyspecter.png"
                alt=""
              />
              <p>Excuses don't win championships.</p>
            </li>
            <li className="sent">
              <img
                src="http://emilcarlsson.se/assets/mikeross.png"
                alt=""
              />
              <p>Oh yeah, did Michael Jordan tell you that?</p>
            </li>
            <li className="replies">
              <img
                src="http://emilcarlsson.se/assets/harveyspecter.png"
                alt=""
              />
              <p>No, I told him that.</p>
            </li>
            <li className="replies">
              <img
                src="http://emilcarlsson.se/assets/harveyspecter.png"
                alt=""
              />
              <p>
                What are your choices when someone puts a gun to your head?
              </p>
            </li>
            <li className="sent">
              <img
                src="http://emilcarlsson.se/assets/mikeross.png"
                alt=""
              />
              <p>
                What are you talking about? You do what they say or they
                shoot you.
              </p>
            </li>
            <li className="replies">
              <img
                src="http://emilcarlsson.se/assets/harveyspecter.png"
                alt=""
              />
              <p>
                Wrong. You take the gun, or you pull out a bigger one. Or,
                you call their bluff. Or, you do any one of a hundred and
                forty six other things.
              </p>
            </li>
          </ul>
        </div>
        <div className="message-input">
          <div className="wrap">
            <input type="text" placeholder="Write your message..." />
            <i
              className="fa fa-paperclip attachment"
              aria-hidden="true"
            ></i>
            <button className="submit">
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
      <div className="text-center text-white copyright py-4">
        <div className="container">
          <small>Copyright ©&nbsp;Brand 2021</small>
        </div>
      </div>
      <div className="d-lg-none scroll-to-top position-fixed rounded">
        <a className="text-center d-block rounded text-white" href="#page-top">
          <i className="fa fa-chevron-up"></i>
        </a>
      </div>
      <div
        className="modal text-center"
        role="dialog"
        tabIndex="-1"
        id="portfolio-modal-1"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container text-center">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <h2 className="text-uppercase text-secondary mb-0">
                      Project Name
                    </h2>
                    <hr className="star-dark mb-5" />
                    <img
                      className="img-fluid mb-5"
                      src="assets/img/portfolio/cabin.png"
                    />
                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer pb-5">
              <a
                className="btn btn-primary btn-lg mx-auto rounded-pill portfolio-modal-dismiss"
                role="button"
                data-bs-dismiss="modal"
              >
                <i className="fa fa-close"></i>&nbsp;Close Project
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal text-center"
        role="dialog"
        tabIndex="-1"
        id="portfolio-modal-2"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container text-center">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <h2 className="text-uppercase text-secondary mb-0">
                      Project Name
                    </h2>
                    <hr className="star-dark mb-5" />
                    <img
                      className="img-fluid mb-5"
                      src="assets/img/portfolio/cake.png"
                    />
                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer pb-5">
              <a
                className="btn btn-primary btn-lg mx-auto rounded-pill portfolio-modal-dismiss"
                role="button"
                data-bs-dismiss="modal"
              >
                <i className="fa fa-close"></i>&nbsp;Close Project
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal text-center"
        role="dialog"
        tabIndex="-1"
        id="portfolio-modal-3"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container text-center">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <h2 className="text-uppercase text-secondary mb-0">
                      Project Name
                    </h2>
                    <hr className="star-dark mb-5" />
                    <img
                      className="img-fluid mb-5"
                      src="assets/img/portfolio/circus.png"
                    />
                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer pb-5">
              <a
                className="btn btn-primary btn-lg mx-auto rounded-pill portfolio-modal-dismiss"
                role="button"
                data-bs-dismiss="modal"
              >
                <i className="fa fa-close"></i>&nbsp;Close Project
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal text-center"
        role="dialog"
        tabIndex="-1"
        id="portfolio-modal-4"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container text-center">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <h2 className="text-uppercase text-secondary mb-0">
                      Project Name
                    </h2>
                    <hr className="star-dark mb-5" />
                    <img
                      className="img-fluid mb-5"
                      src="assets/img/portfolio/game.png"
                    />
                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer pb-5">
              <a
                className="btn btn-primary btn-lg mx-auto rounded-pill portfolio-modal-dismiss"
                role="button"
                data-bs-dismiss="modal"
              >
                <i className="fa fa-close"></i>&nbsp;Close Project
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal text-center"
        role="dialog"
        tabIndex="-1"
        id="portfolio-modal-5"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container text-center">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <h2 className="text-uppercase text-secondary mb-0">
                      Project Name
                    </h2>
                    <hr className="star-dark mb-5" />
                    <img
                      className="img-fluid mb-5"
                      src="assets/img/portfolio/safe.png"
                    />
                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer pb-5">
              <a
                className="btn btn-primary btn-lg mx-auto rounded-pill portfolio-modal-dismiss"
                role="button"
                data-bs-dismiss="modal"
              >
                <i className="fa fa-close"></i>&nbsp;Close Project
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal text-center"
        role="dialog"
        tabIndex="-1"
        id="portfolio-modal-6"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container text-center">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <h2 className="text-uppercase text-secondary mb-0">
                      Project Name
                    </h2>
                    <hr className="star-dark mb-5" />
                    <img
                      className="img-fluid mb-5"
                      src="assets/img/portfolio/submarine.png"
                    />
                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer pb-5">
              <a
                className="btn btn-primary btn-lg mx-auto rounded-pill portfolio-modal-dismiss"
                role="button"
                data-bs-dismiss="modal"
              >
                <i className="fa fa-close"></i>&nbsp;Close Project
              </a>
            </div>
          </div>
        </div>
      </div>
      );
    </div>
  );
};
export default Home;
