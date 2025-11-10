import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLock } from "react-icons/fa"; // Font Awesome lock icon for OTP button

function Signup() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Main Section */}
      <main className="container flex-grow-1 d-flex align-items-center justify-content-center py-5">
        <div className="row w-100 align-items-center">
          {/* Left Section (Image) */}
          <div className="col-lg-6 text-center mb-4 mb-lg-0 d-flex justify-content-center">
            <img
              src="https://zerodha.com/static/images/landing.png"
              alt="Signup Illustration"
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: "420px" }}
            />
          </div>

          {/* Right Section (Signup Card) */}
          <div className="col-lg-6">
            <div className="card p-5 shadow-lg border-0 rounded-3">
              <h2 className="fw-bold mb-3 text-center text-primary">
                Create Your Account
              </h2>
              <p className="text-muted text-center mb-4 small">
                Get started in just a few steps. Already registered?{" "}
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                  Track here
                </a>
              </p>

              {/* Phone Input */}
              <div className="input-group mb-4">
                <span className="input-group-text bg-white">
                  🇮🇳 +91
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile number"
                />
              </div>

              {/* Button */}
              <button className="btn btn-primary w-100 mb-3 d-flex justify-content-center align-items-center">
                <FaLock className="me-2" /> Get OTP
              </button>

              {/* Terms */}
              <p className="text-muted small text-center">
                By continuing, you agree to our{" "}
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                  Privacy Policy
                </a>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Signup;
