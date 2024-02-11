import React from "react";
import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";
const title = "Register";
const socialtitle = "Login with social media";
const btntext = "Signup";

const Signup = (event) => {
  const [errormessages, seterrormessages] = useState(" ");
  const { singUpwithgmail, createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  //handelRegister
  const handelRegister = () => {
    singUpwithgmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message;
        seterrormessages("please provide valid email & password !");
      });
  };

  const handelSignup = (event) => {
    event.preventDefault();
    const form = event.target;

    // console.log(from);
    const email = form.email.value;
    const password = form.password.value;
    const  confirmPassword=form.confirmPassword.value;
// console.log(email,password,confirmPassword); 
if (password !==confirmPassword) {
   seterrormessages("password dosn't match ! please provide a correct password");

}else{
    seterrormessages("");
createUser(email,password).then((userCredential)=>{
    const user=userCredential.user;
    alert("Account created successfully done")
    navigate(from,{replace:true})
}).catch((error)=>{
    console.log(error.message);
    alert(`${error.message}`)
})
}

};

  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handelSignup}>
              <div className="form-group">
                <input
                  type="name"
                  name="name"
                  placeholder="User Name"
                  id="name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="email address"
                  id="email"
                  required
                />
              </div>
              <div className="form-group padding-t">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=" password*"
                  required
                />
              </div>
              <div className="form-group padding-t">
                <input
                  type="confirmPassword"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password*"
                  required
                />
              </div>

              {/* showing messages */}
              <div>
                {errormessages && (
                  <div className="error-message text-danger mb-1">
                    {errormessages}
                  </div>
                )}
              </div>
              {/* <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                
                  <Link to="/forgetpass"> Forget Password</Link>
                </div>
              </div> */}

              <div className="form-group">
                <button type="submit" className="d-block lab-btn">
                  <span>{btntext}</span>
                </button>
              </div>
            </form>
            {/* account bottom */}
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Have an Account?<Link to="/login">Login</Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>
              {/* social login */}
              <h5 className="subtitle">{socialtitle}</h5>
              <ul className=" lab-ul social-icons justify-content-center">
                <li>
                  <button className="github" onClick={handelRegister}>
                    <i className="icofont-github"></i>
                  </button>
                </li>
                <li>
                  <a href="/" className="facebook">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="/" className="twitter">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="/" className="linkedin">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>

                <li>
                  <a href="/" className="instagram">
                    <i className="icofont-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
