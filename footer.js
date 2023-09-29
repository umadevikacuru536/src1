import logo from "./pab bottom-logo.jpg";

function Footer() {
  return (
    <div className="App">
      <footer class="container-fluid d-flex flex-row silent">
        <div class="container">
          <div class="row">
            <div class="col-md-2 col-sm-6 col-lg-3 ">
              <img
                src={logo}
                class="img"
                style={{
                  height: "80px",
                  width: "200px",
                  paddingtop: "10px",
                  borderRadius: "20px",
                }}
              />
              <p style={{ color: "white" }}>
                we provide you direct access to the walk-in
                <br /> opportunities available on the site Recruit can <br /> be
                filtered on work experience Venue from <br />
                location, employee type and data range
              </p>
              <p style={{ color: "white" }}>Toll free number:</p>
              <i
                class="fa-solid fa-phone"
                style={{ color: "white", padding: "10px" }}
              ></i>{" "}
              <span style={{ color: "white" }}>898048084</span>
            </div>
            <div class="col-md-2 col-sm-6 col-lg-3">
              <h5 style={{ color: "white" }}>For Candidates</h5>

              <p>
                <i
                  class="fa-solid fa-greater-than"
                  style={{ color: "white", margin: "10px" }}
                ></i>
                <span style={{ color: "white" }}>Canddate Prohic</span>
              </p>
              <p>
                <i
                  class="fa-solid fa-greater-than"
                  style={{ color: "white", margin: "10px" }}
                ></i>
                <span style={{ color: "white" }}>My Requriment</span>
              </p>
              <p>
                <i
                  class="fa-solid fa-greater-than"
                  style={{ color: "white", margin: "10px" }}
                ></i>
                <span style={{ color: "white" }}>Applied Jobs</span>
              </p>
              <p>
                <i
                  class="fa-solid fa-greater-than"
                  style={{ color: "white", margin: "10px" }}
                ></i>
                <span style={{ color: "white" }}>JOb Alert</span>
              </p>
              <p>
                <i
                  class="fa-solid fa-greater-than"
                  style={{ color: "white", margin: "10px" }}
                ></i>
                <span style={{ color: "white" }}>Change Password</span>
              </p>
            </div>
            <div class="col-md-2 col-sm-6 col-lg-3">
              <h5 style={{ color: "white" }}>Jobs</h5>

              <p>
                <i
                  class="fa-solid fa-greater-than"
                  style={{ color: "white", margin: "10px" }}
                ></i>
                <span style={{ color: "white" }}>All Jobs</span>
              </p>
              <p>
                <i
                  class="fa-solid fa-greater-than"
                  style={{ color: "white", margin: "10px" }}
                ></i>
                <span style={{ color: "white" }}>Company Jobs</span>
              </p>
              <p>
                <i
                  class="fa-solid fa-greater-than"
                  style={{ color: "white", margin: "10px" }}
                ></i>{" "}
                <span style={{ color: "white" }}>Category Jobs</span>
              </p>
              <p>
                <i
                  class="fa-solid fa-greater-than"
                  style={{ color: "white", margin: "10px" }}
                ></i>
                <span style={{ color: "white" }}>Location</span>
              </p>
              <p>
                <i
                  class="fa-solid fa-greater-than"
                  style={{ color: "white", margin: "10px" }}
                ></i>
                <span style={{ color: "white" }}>Designation jobs</span>
              </p>
              <p>
                <i
                  class="fa-solid fa-greater-than"
                  style={{ color: "white", margin: "10px" }}
                ></i>
                <span style={{ color: "white" }}>Skill jobs</span>
              </p>
            </div>

            <div class="col-md-2 col-sm-6 col-lg-3">
              <h5 style={{ color: "white" }}>Browser jobs</h5>

              <p>
                <i
                  class="fa-solid fa-greater-than"
                  style={{ color: "white", margin: "10px" }}
                ></i>
                <span style={{ color: "white" }}>Companies</span>
              </p>
              <p>
                <i
                  class="fa-solid fa-greater-than"
                  style={{ color: "white", margin: "10px" }}
                ></i>
                <span style={{ color: "white" }}>Browser jobs</span>
              </p>
              <p>
                <i
                  class="fa-solid fa-greater-than"
                  style={{ color: "white", margin: "10px" }}
                ></i>
                <span style={{ color: "white" }}>Jobs</span>
              </p>
              <h5 style={{ color: "white" }}>Information</h5>
              <p>
                <i
                  class="fa-solid fa-greater-than"
                  style={{ color: "white", margin: "10px" }}
                ></i>
                <span style={{ color: "white" }}>Privacy and policy</span>
              </p>
              <p>
                <i
                  class="fa-solid fa-greater-than"
                  style={{ color: "white", margin: "10px" }}
                ></i>
                <span style={{ color: "white" }}>Fraudt alert</span>
              </p>
            </div>
          </div>
          <hr style={{ color: "white" }} />
          <div class="d-flex flex-row">
            <div className="container">
              <div className="row">
                <div class="col-12 col-sm-6 col-md-3 col-lg-4">
                  <p style={{ color: "white" }}>
                    All rights reserved @ 2022 PABjobs
                  </p>
                </div>
                <div class="col-12 col-sm-6 col-md-3 col-lg-4">
                  <p style={{ color: "white" }}>
                    Designed by
                    <span style={{ color: "blue" }}>@ PerfexTechnologies</span>
                  </p>
                </div>

                <div class="col-12 col-sm-6 col-md-3 col-lg-4">
                  <div class="d-flex flex-row">
                    <i
                      class="fa-brands fa-linkedin"
                      style={{ color: "white", padding: "5px" }}
                    ></i>
                    <i
                      class="fa-brands fa-instagram"
                      style={{ color: "white", padding: "5px" }}
                    ></i>
                    <i
                      class="fa-brands fa-facebook"
                      style={{ color: "white", padding: "5px" }}
                    ></i>
                    <i
                      class="fa-brands fa-twitter"
                      style={{ color: "white", padding: "5px" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
 
      </footer>
    </div>
  );
}

export default Footer;
