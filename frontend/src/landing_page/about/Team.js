import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/Saif.jpeg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Saif Sanadi</h4>
          <h6>Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Saif is an innovator and tech enthusiast, building solutions that merge electronics, communication, and real-world problem solving. From IoT-based systems to full-stack applications, he works on projects that aim to create practical impact.
          </p>
          <p>Coding, teaching, and sharing knowledge is his zen.</p>
          <p>
            Connect on : <a href="https://www.linkedin.com/in/saifsanadi" style={{textDecoration: "none"}}>Linkedin</a> / <a href="https://github.com/saifsanadi26" style={{textDecoration: "none"}}>Github</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;