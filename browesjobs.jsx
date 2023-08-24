import "./browesjobs.css";
import logo from "./pabjobs-logo.png";
import { Link, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

function Home2(props) {
  const { state } = useLocation();
  console.log("params", state);
  const [blogslist, setblogslist] = useState([]);
  const [selectedblog, setselectedblog] = useState(null);
  const [userskills, setUserskills] = useState("");
  const [userlocation, setUserLocation] = useState("");
  const [usereperience, setusereperience] = useState("");
  const [userstate, setuserstate] = useState("");
  const [userSalary, setuserSalary] = useState("");

  const searchBySkills = () => {
    const filteredJobs = blogslist.filter(
      (blog) =>
        blog.skillsets &&
        blog.skillsets
          .toLowerCase()
          .includes(userskills.toLowerCase().trim()) &&
        blog.cities &&
        blog.cities.toLowerCase().includes(userlocation.toLowerCase().trim())
    );
    setblogslist(filteredJobs);
  };

  const userExp = (e) => {
    const fillter = blogslist.filter((blog) => blog.experience.includes(e));
    setblogslist(fillter);
    setusereperience(fillter);
  };

  const userState = (e) => {
    const fillter = blogslist.filter((blog) => blog.cities.includes(e));
    setblogslist(fillter);
    setuserstate(fillter);
  };

  const userSalary1 = (e) => {
    const fillter = blogslist.filter((blog) => blog.salary.includes(e));
    setblogslist(fillter);
    setuserSalary(fillter);
  };
  useEffect(() => {
    fetchblogs();
  }, []);

  const fetchblogs = async () => {
    const api = "http://localhost:5010/allbrowsers";
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s";
    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setblogslist(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const onclickblogdetails = async (blogid) => {
    // const api=`https://pab-server.onrender.com/api/jobs/${blogid}`
    // const response=await axios.get(api);
    const selectedJobDetails = blogslist.find((each) => each._id === blogid);
    console.log(selectedJobDetails);
    setselectedblog(selectedJobDetails);
  };

  console.log(blogslist);
  console.log(selectedblog);
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
              <li class="nav-item" style={{ marginLeft: "400px" }}>
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
                  <i class=" user fa-sharp fa-solid fa-circle-user  dropdown-toggle bellicon"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="text-center align-items-center justify-content-center secondContainer p-4">
        <span class="">Home Jobs</span>
        <div class="text-center align-items-center justify-content-center d-flex row m-2">
          <div class="d-flex p-1 align-items-center seacrhMainContainer m-2 col-md-4">
            <div class="">
              <i class="fa-solid fa-magnifying-glass p-3"></i>
              <input
                type="text"
                placeholder="Job title skills or company "
                value={userskills}
                onChange={(e) => setUserskills(e.target.value)}
                class=" p-1 searchBox "
              />
            </div>
            <div>
              <i class="fa-solid fa-sort-down p-2 "></i>
            </div>
          </div>
          <div class="d-flex p-1 align-items-center seacrhMainContainer m-2 col-md-4">
            <div class="">
              <i class="fa-solid fa-location-dot p-3"></i>
              <input
                type="text"
                value={userlocation}
                onChange={(e) => setUserLocation(e.target.value)}
                placeholder="City, Province or region "
                class=" p-1 searchBox "
              />
            </div>
            <div>
              <i class="fa-solid fa-sort-down p-2 "></i>
            </div>
          </div>
        </div>
        <button class=" registerButton" onClick={searchBySkills}>
          Search
        </button>
      </div>
      <section class="container">
        <div class="row">
          <div class="col-lg-1"></div>
          <div class="col-lg-11">
            <div class="d-flex flex-row row mt-3">
              <div class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle location21"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Experience
                  </button>
                  <ul class="dropdown-menu">
                    <li
                      onClick={() => {
                        userExp("0-2 years");
                      }}
                    >
                      0-2 years
                    </li>
                    <li
                      onClick={() => {
                        userExp("2-5 years");
                      }}
                    >
                      2-5 years
                    </li>
                    <li
                      onClick={() => {
                        userExp("5-7 years");
                      }}
                    >
                      5-7 years
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle location21"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Location
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          userState("AP");
                        }}
                      >
                        AP
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          userState("Bangalore Rural");
                        }}
                      >
                        Bangalore Rural
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          userState("Visakhapatnam");
                        }}
                      >
                        Visakhapatnam
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          userState("Ahmednagar");
                        }}
                      >
                        Ahmednagar
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          userState("AP");
                        }}
                      >
                        Mumbai
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle location21"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Salary
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          userSalary1("4-5LPA");
                        }}
                      >
                        4-5LPA
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          userSalary1("3-5LPA");
                        }}
                      >
                        3-5LPA
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          userSalary1("2-5LPA");
                        }}
                      >
                        2-5LPA
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => {
                          userSalary1("2-5LPA");
                        }}
                      >
                        2-5LPA
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle indusrty"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Industry
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Manufacturing
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Construction
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        IT
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Transport
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Food industry
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle indusrty"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Destignation
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Chief Customer Officer
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chief Financial Officer
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chief Information Officer
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chief Human Resources Officer
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chief Product Officer
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle indusrty"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Education
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Any Postgraduate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Any Graduate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        MBA/PGDM{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        M.Pharma{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        MBBS{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Diploma{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Medical-MS/MD{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle indusrty"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Skills
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Core Java
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Dot Net
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Python
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Testing
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        AWS
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Advance Java
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Frames
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {blogslist.length > 0 ? (
          <div>
            {blogslist.map((a) => (
              // <div key={a.skillsets}>
              //   {a.skillsets}

              //   <div key={a.cities}>
              //     {a.cities}
              //   </div>
              // </div>
              <>
                <div></div>
                <div></div>
              </>
            ))}
          </div>
        ) : (
          <div className="App mt-5" style={{ marginLeft: "400px" }}>
            <h3>page Not Found</h3>
            <img
              src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?size=626&ext=jpg&ga=GA1.2.1103244850.1688422723&semt=ais"
              className="w-25"
            />
          </div>
        )}
        <div class="row">
          <div class="col-lg-1"></div>
          <div class="col-lg-11 ">
            <p class="result my-3">
              Showing {blogslist.length} results for "Graphics Designing"
            </p>
            <div class="row">
              <ul className="col-12 col-md-4 ">
                {blogslist.map((blog) => (
                  <div
                    className={`active mt-3  ${
                      selectedblog && selectedblog._id === blog._id
                        ? "select"
                        : ""
                    }`}
                    onClick={(e) => onclickblogdetails(blog._id)}
                  >
                    <div>
                      <div className="d-flex flex-row ml-2">
                        <div className="col-lg-9">
                          <h5 className="" style={{ marginLeft: "10px" }}>
                            {blog.title}
                          </h5>
                        </div>
                        <div className="col-lg-3">
                          <h6> {blog.salary}</h6>
                        </div>
                      </div>
                      <p class="angel" style={{ marginLeft: "10px" }}>
                        {blog.companyname}
                      </p>
                      <div class="loc-item" style={{ marginLeft: "10px" }}>
                        <p class="m-0">{blog.jobType}</p>
                        <p class="m-0">{blog.cities}</p>
                        <p class="m-0">{blog.education}</p>
                        <span
                          class="text-end publish"
                          style={{
                            color: "",
                            fontSize: "10px",
                            marginLeft: "200px",
                          }}
                        >
                          Published one day ago
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
              <div class="col-12 col-md-7">
                <div class="container">
                  <div class="row">
                    <div className="col-md-8"></div>

                    {selectedblog && (
                      <div className="d-flex flex-column card4">
                        <div className="d-flex flex-row">
                          <div className="col-md-2 ">
                            <img
                              src={selectedblog.Img}
                              alt=""
                              className="w-75"
                              style={{ marginTop: "20px" }}
                            />
                          </div>
                          <div className="col-md-4 margin">
                            <h5>{selectedblog.title}</h5>
                            <p>{selectedblog.companyname}</p>
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
                              {selectedblog.salary}
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
                              {selectedblog.cities}
                            </p>
                            <p class="m-0">
                              <i
                                class="fa-solid fa-briefcase"
                                style={{
                                  marginLeft: "20px",
                                  marginRight: "10px",
                                }}
                              ></i>
                              {selectedblog.experience}
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
                    )}
                  </div>
                  <br />
                  <div className="row">
                    {selectedblog && (
                      <div className="card5 d-flex flex-column scroll">
                        <h5>Job Description</h5>
                        <h6>Roles and Responsibilities</h6>
                        <p>{selectedblog.description}</p>
                        <h1>skillsets</h1>
                        <p>{selectedblog.skillsets}</p>
                        <h1>cities</h1>
                        <p>{selectedblog.cities}</p>
                      </div>
                      // siva
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home2;
