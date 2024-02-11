import React from "react";
const subtitle = "Save The Day";

const title = (
  <h2 className="title">
    join on day long free workshop <b>Advance</b> <span>Mastering</span>
  </h2>
);
const desc = "Limited Time offer! Hurry up";
const Register = () => {
  //below footer section
  return (
    <section className="register-section padding-tb pb-0">
      <div className="container">
        <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center"></div>
        <div className="col">
          <div className="section-header">
            <span className="subtitle">{subtitle}</span>
            {title}
            <p>{desc}</p>
          </div>
        </div>
        <div className="col">
          <div className="section-wrapper">
            <h4>Register Now</h4>
            <form className="register-form">
              <input
                type="text"
                name="name"
                placeholder="username"
                className="reg-input"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="reg-input"
              />
              <input
                type="number"
                name="number"
                placeholder="phone number"
                className="reg-input"
              />
              <button type="submit" className="lab-btn">
                {" "}
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
