import React from "react";
import { Link } from 'react-router-dom';
import logo from "./img/pabjobs-logo.png";
import axios from "axios";
import { useEffect, useState } from "react";
function Savedjobs() {
  const [saved, setsaved] = useState([]);
 useEffect(() => {
    fetchblogs();
  }, []);

  const fetchblogs = async () => {
    const api = "http://localhost:5010/allsavedjobs";
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s";
    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setsaved(response.data);
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
                <Link to="/applied"><button class="p-2 mb-1 profilebutton w-75">Applied Jobs</button></Link>
                <Link to="/jobalert"><button class="p-2 mb-1 profilebutton w-75">Job Alerts</button></Link>
                <Link to="/savedjobs"><button class="p-2 mb-1 profilebutton w-75 ative bg-primary text-white">Saved Jobs</button></Link>
                <Link to="/changepassword"><button class="p-2 mb-1 profilebutton w-75">Change Password</button></Link>
                <Link to="/about"><button class="p-2 mb-1 profilebutton w-75">Log Out</button></Link>
        </div>
        <div className="col-md-1"></div>
        <div className="col-12 col-sm-12 col-md-9 col-lg-6">
        
            <div class="profilecard23 scroll p-3">
              <h6>{saved.length}saved Jobs</h6>
              <hr />
              {/* <div class="grapicscard p-1  ">
                <div class=" d-flex flex-row ">
                  <div
                    class="d-flex flex-row col-md-6"
                    style={{borderRight: "2px solid black",height: "80"}}
                  >
                    <div class="mt-3">
                      <img
                        src="data:image/png;base64,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"
                        alt=""
                        width="50px"
                      />
                    </div>
                    <div class="p-3 ">
                      <h6 class="appliedh2">Graphic Designer</h6>
                      <p class="small">Angel Broking</p>
                      <p class="small">Show more jobs in the company</p>
                    </div>
                  </div>

                  <div class="col-md-5 ">
                    <h6 class="px-5" style={{fontWeight: "bold"}}>
                      4.5-6 LPA
                    </h6>
                    <i class="fa-solid fa-location-dot p-3"></i>
                    <span class="small">Hyderabad/Secundrabad,Telangana</span>
                    <br />
                    <i class="fa-solid fa-briefcase p-3"></i>
                    <span class="small">1-3 years</span>
                  </div>
                </div>
                <hr />
                <div class="d-flex flex-row">
                  <div class="col-md-1"></div>
                  <div class="col-md-5">
                    <p class="small">Posted:few hours ago</p>
                    <p class="small">Openings 1</p>
                    <p class="small">job applicants:580</p>
                  </div>
                  <div class="col-md-6">
                    <button class="domain p-2 w-75 mt-3">Applied</button>
                  </div>
                </div>
              </div>
              <div class=" grapicscard p-1  ">
                <div class=" d-flex flex-row ">
                  <div
                    class="d-flex flex-row col-md-6"
                    style={{borderRight: "2px solid black",height: "80"}}
                  >
                    <div class="mt-3">
                      <img
                        src="data:image/png;base64,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"
                        alt=""
                        width="50px"
                      />
                    </div>
                    <div class="p-3 ">
                      <h6 class="appliedh2">Graphic Designer</h6>
                      <p class="small">Angel Broking</p>
                      <p class="small">Show more jobs in the company</p>
                    </div>
                  </div>

                  <div class="col-md-5 ">
                    <h6 class="px-5" style={{fontWeight: "bold"}}>
                      4.5-6 LPA
                    </h6>
                    <i class="fa-solid fa-location-dot p-3"></i>
                    <span class="small">Hyderabad/Secundrabad,Telangana</span>
                    <br />
                    <i class="fa-solid fa-briefcase p-3"></i>
                    <span class="small">1-3 years</span>
                  </div>
                </div>
                <hr />
                <div class="d-flex flex-row">
                  <div class="col-md-1"></div>
                  <div class="col-md-5">
                    <p class="small">Posted:few hours ago</p>
                    <p class="small">Openings 1</p>
                    <p class="small">job applicants:580</p>
                  </div>
                  <div class="col-md-6">
                    <button class="domain p-2 w-75 mt-3">Applied</button>
                  </div>
                </div>
              </div> */}
              
              {saved.map((blog) => (
                      <div className="d-flex flex-column mb-4  maa">
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

export default Savedjobs;