import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="frame-1000004343">
      <div className="sign-up-page">
        {/* Decorative Circles */}
        <div className="ellipse-846"></div>
        <div className="ellipse-853"></div>
        <div className="ellipse-845"></div>
        <div className="ellipse-849"></div>
        <div className="ellipse-847"></div>
        <div className="ellipse-852"></div>

        <div className="frame-509">
          <div className="frame-5092">
            <div className="frame-505">
              {/* Logo */}
              <div className="logo">
                <img className="group" src="images/group0.svg" alt="Logo" />
              </div>

              {/* Header Text */}
              <div className="log-in-to-your-account">Login to Your Account</div>
              <div className="select-method-to-create-account">
                Select method to Create Account:
              </div>

              {/* Social Login Buttons */}
              <div className="frame-681">
                <button className="social-login">
                  <img src="images/google.svg" alt="Google" className="component-128" />
                  Continue with Google
                </button>

                <button className="component-125">
                  <img src="images/component-1281.svg" alt="Apple" className="component-1282" />
                  Continue with Apple
                </button>
              </div>

              {/* Separator */}
              <div className="frame-507">
                <div className="line-22"></div>
                <div className="or-continue-with-email">or continue with email</div>
                <div className="line-23"></div>
              </div>

              {/* Email Sign Up Form */}
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="field" style={{ position: "relative" }}>
                  <p>Email*</p>
                  <input
                    type="email"
                    placeholder="Catherine@gmail.com"
                    className="interactive-form-fields"
                    required
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="ZabieM@123456"
                    className="interactive-form-fields"
                    required
                    style={{ paddingRight: "30px" }}
                  />
                  <span
                    onClick={togglePassword}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "85%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </span>
                </div>
                  <div className="gift-any-amount">
                  <button className="amt" type="submit">
                    Continue
                  </button>
                </div>
              </form>

              {/* Login Redirect */}
              <p className="already-have-an-account-log-in">
                Already have an Account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Side Image */}
      <img className="image-223" src="images/image 223.svg" alt="Illustration" />
    </div>
  );
};

export default App;
  