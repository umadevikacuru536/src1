import React from "react";
import { Link } from 'react-router-dom';
import logo from "./img/pabjobs-logo.png";
import axios from "axios";
import { useEffect, useState } from "react";
function Applied() {

  const [appiled, setappiled] = useState([]);
  useEffect(() => {
    fetchblogs();
  }, []);

  const fetchblogs = async () => {
    const api = "http://localhost:5010/allappiledjobs";
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s";
    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setappiled(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  return (
   <div>
     <nav class="navbar navbar-expand-sm navbar-dark shadow">
        <div class="container">
          <img
            src={logo}
            style={{ width: "200px", paddingleft: "100px", marginLeft: "30px" }}
          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            style={{ backgroundcolor: "black" }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="collapsibleNavbar"
            style={{ marginleft: "500px" }}
          >
            <ul class="navbar-nav" style={{ marginleft: "500px" }}>
              <li class="nav-item" style={{marginLeft:"400px"}}>
                <Link to="/home" style={{ color: "white" }}>
                  <a class="nav-link " href="" style={{ color: "black" }}>
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/browesjobs" style={{ color: "white" }}>
                  {" "}
                  <a
                    class="nav-link dropdown-toggle"
                    href="/browsejobs"
                    style={{ color: "black" }}
                  >
                    Browse Jobs
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/jobs" style={{ color: "white" }}>
                  {" "}
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    style={{ color: "black" }}
                  >
                    Jobs
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  style={{ color: "black" }}
                >
                  services
                </a>
              </li>
              <li class="nav-item">
                <Link to="/pay" style={{ color: "white" }}>
                  {" "}
                  <a
                    class="nav-link dropdown-toggle"
                    href="payment.html"
                    style={{ color: "black" }}
                  >
                    payments
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <i class="fa-solid fa-bell bellicon"></i>
              </li>
              <li class="nav-item">
              <Link to="/profile">
                  <i class=" user fa-sharp fa-solid fa-circle-user  dropdown-toggle bellicon"></i></Link>
               
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <div className="container ">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3 col-lg-6 profilecard">
           
            <i
              class=" fa-sharp fa-solid fa-circle-user profileicon mb-4 mt-3"
              style={{ fontsize: "200px" }}
            ></i>
            <Link to="/profile"> <button class="p-2 mb-1 profilebutton w-75 " >Candidate Profile</button></Link>
                <Link to="/resume"><button class="p-2 mb-1 profilebutton w-75">Resume</button></Link>
                <Link to="/applied"><button class="p-2 mb-1 profilebutton w-75 ative bg-primary text-white" style={{color:"white"}}>Applied Jobs</button></Link>
                <Link to="/jobalert"><button class="p-2 mb-1 profilebutton w-75 ">Job Alerts</button></Link>
                <Link to="/savedjobs"><button class="p-2 mb-1 profilebutton w-75">Saved Jobs</button></Link>
                <Link to="/changepassword"><button class="p-2 mb-1 profilebutton w-75">Change Password</button></Link>
                <Link to="/about"><button class="p-2 mb-1 profilebutton w-75">Log Out</button></Link>
           
        </div>
        <div className="col-md-1"></div>
        <div className="col-12 col-sm-12 col-md-9 col-lg-6">

            <div class="profilecard23 p-3 scroll">
              <h6>{appiled.length} Applied Jobs Found</h6>
              <hr />
           
                {appiled.map((blog) => (
                      <div className="d-flex flex-column mb-4 maa">
                        <div className="d-flex flex-row">
                          <div className="col-md-2 ">
                            <img
                              src={blog.Img}
                              alt=""
                              className="w-75"
                              style={{ marginTop: "20px" }}
                            />
                          </div>
                          <div className="col-md-4 margin">
                            <h5>{blog.title}</h5>
                            <p>{blog.companyname}</p>
                            <p
                              class="m-0 Show"
                              style={{
                                color: "rgb(88,6,109)",
                                fontSize: "10px",
                              }}
                            >
                              Show more jobs in the company
                            </p>
                          </div>
                          <div className="col-md-5 margin1">
                            <h6
                              style={{ marginLeft: "30px", marginTop: "10px" }}
                            >
                              {blog.salary}
                              <i
                                class="fa-solid fa-bookmark book"
                                id="bookItem"
                                style={{ marginLeft: "120px" }}
                              ></i>
                            </h6>
                            <p class="m-0">
                              <i
                                class="fa-solid fa-location-dot"
                                style={{
                                  marginLeft: "20px",
                                  marginRight: "8px",
                                }}
                              ></i>
                              {blog.cities}
                            </p>
                            <p class="m-0">
                              <i
                                class="fa-solid fa-briefcase"
                                style={{
                                  marginLeft: "20px",
                                  marginRight: "10px",
                                }}
                              ></i>
                              {blog.experience}
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="d-flex flex-row">
                          <div className="col-md-7">
                            <p class="m-0">Posted: Few Hours Ago</p>
                            <p class="m-0">Openings:1</p>
                            <p class="m-0">Job Application:580</p>
                          </div>
                          <div className="col-md-3">
                            <button
                              class="now-item w-100"
                              style={{
                                backgroundColor: "#5b13b9",
                                borderRadius: "10px",
                                color: "white",
                              }}
                              id="applyItem"
                              onclick="applyBtn()"
                            >
                              Apply Now
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
            </div>
         
        </div>
      </div>
    </div>
    </div>
  );
}

export default Applied;
