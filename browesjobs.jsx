import "./browesjobs.css";
import logo from "./pabjobs-logo.png";
import { Link, useLocation, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Home2(props) {
  const { state } = useLocation();
  console.log("params", state);

  const [blogslist, setblogslist] = useState([]);
  const [selectedblog, setselectedblog] = useState(null);
  const [userskills, setUserskills] = useState("");
  const [userlocation, setUserLocation] = useState("");
  const [experienceFilters, setExperienceFilters] = useState([]);
  const [userstate, setuserstate] = useState({});
  const [userSalary, setuserSalary] = useState({});

  const [selectedCardIndexes, setSelectedCardIndexes] = useState([]);

  const toggleCardSelection = (index) => {
    // Clone the selectedCardIndexes array to avoid mutating state directly
    const updatedSelectedCardIndexes = [...selectedCardIndexes];

    // Check if the card is already selected
    const selectedIndex = updatedSelectedCardIndexes.indexOf(index);

    if (selectedIndex === -1) {
      // If it's not selected, add it to the list and set its color
      updatedSelectedCardIndexes.push(index);
    } else {
      // If it's already selected, remove it from the list
      updatedSelectedCardIndexes.splice(selectedIndex, 1);
    }

    setSelectedCardIndexes(updatedSelectedCardIndexes);
  };
 

  const handleExperienceFilterChange = (e) => {
    const { name, checked } = e.target;
    setExperienceFilters({
      ...experienceFilters,
      [name]: checked,
    });
  };
  const handleExperienceFilterChange1 = (e) => {
    const { name, checked } = e.target;
    setuserstate({
      ...userstate,
      [name]: checked,
    });
  };
  const handleExperienceFilterChange2 = (e) => {
    const { name, checked } = e.target;
    setuserSalary({
      ...userSalary,
      [name]: checked,
    });
  };
  const userExp = () => {
    const selectsalary = Object.keys(userSalary).filter(
      (key) => userSalary[key]
    );
    const filteredJobs2 = blogslist.filter((blog) =>
      selectsalary.includes(blog.salary)
    );
    setblogslist(filteredJobs2);
  };

  const userExp1 = () => {
    const selectedExperienceFilters = Object.keys(experienceFilters).filter(
      (key) => experienceFilters[key]
    );
    const filteredJobs1 = blogslist.filter((blog) =>
      selectedExperienceFilters.includes(blog.experience)
    );
    setblogslist(filteredJobs1);
  };

  const userExp2 = () => {
    const selectstate = Object.keys(userstate).filter((key) => userstate[key]);
    const filteredJobs3 = blogslist.filter((blog) =>
      selectstate.includes(blog.cities)
    );
    setblogslist(filteredJobs3);
  };

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
  useEffect(() => {
    fetchblogs();
  }, [experienceFilters, userstate, userSalary]);

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
      if (state?.location) {
        handleFilter(state?.location, response.data);
      }
      if (response.data.length > 0) {
        setselectedblog(response.data[0]);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const applyBtn = async (blog) => {
    try {
      const { title, salary, companyname, cities, experience, Img, email } =
        blog;

      const response = await axios.post("http://localhost:5010/appiledjobs", {
        title,
        salary,
        companyname,
        cities,
        experience,
        Img,
        email,
      });

      if (response.status === 200) {
        toast.success("Registration Successful", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("User already exists", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const saveBtn = async (blog) => {
    try {
      const { title, salary, companyname, cities, experience, Img, email } =
        blog;
      const response = await axios.post("http://localhost:5010/savedjobs", {
        title,
        salary,
        companyname,
        cities,
        experience,
        Img,
        email,
      });

      if (response.status === 200) {
        toast.success("Registration Successful", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("User already exists", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
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

  const handleFilter = (company, alljobs = blogslist) => {
    company = Array.isArray(company) ? company : [company];
    const filter = alljobs.filter((job) => {
      return company.includes(job.companyname);
    });
    console.log(filter);
    setblogslist(filter);
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
                    <label>
                      <input
                        type="checkbox"
                        name="5-7 years"
                        checked={experienceFilters["5-7 years"]}
                        onChange={handleExperienceFilterChange}
                      />
                      5-7 years
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="2-3 years"
                        checked={experienceFilters["2-3 years"]}
                        onChange={handleExperienceFilterChange}
                      />
                      2-3 years
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="0-3 years"
                        checked={experienceFilters["0-3 years"]}
                        onChange={handleExperienceFilterChange}
                      />
                      0-3 years
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="0-2 years"
                        checked={experienceFilters["0-2 years"]}
                        onChange={handleExperienceFilterChange}
                      />
                      0-2 years
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="7-10 years"
                        checked={experienceFilters["7-10 years"]}
                        onChange={handleExperienceFilterChange}
                      />
                      7-10 years
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="2-5years"
                        checked={experienceFilters["2-5years"]}
                        onChange={handleExperienceFilterChange}
                      />
                      2-5years
                    </label>
                    <br />

                    <button className="registerButton" onClick={userExp1}>
                      Search
                    </button>
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
                    <label>
                      <input
                        type="checkbox"
                        name="Bangalore Rural"
                        checked={userstate["Bangalore Rural"]}
                        onChange={handleExperienceFilterChange1}
                      />
                      Bangalore Rural
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="Visakhapatnam"
                        checked={userstate["Visakhapatnam"]}
                        onChange={handleExperienceFilterChange1}
                      />
                      Visakhapatnam
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="AP"
                        checked={userstate["AP"]}
                        onChange={handleExperienceFilterChange1}
                      />
                      AP
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="Ahmednagar"
                        checked={userstate["Ahmednagar"]}
                        onChange={handleExperienceFilterChange1}
                      />
                      Ahmednagar
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="hyderabad"
                        checked={userstate["hyderabad"]}
                        onChange={handleExperienceFilterChange1}
                      />
                      hyderabad
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="Bangalore"
                        checked={userstate["Bangalore"]}
                        onChange={handleExperienceFilterChange1}
                      />
                      Bangalore
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="kadapa"
                        checked={userstate["kadapa"]}
                        onChange={handleExperienceFilterChange1}
                      />
                      kadapa
                    </label>
                    <br />
                    <button className="registerButton" onClick={userExp2}>
                      Search
                    </button>
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
                    <label>
                      <input
                        type="checkbox"
                        name="4-5LPA"
                        checked={userSalary["4-5LPA"]}
                        onChange={handleExperienceFilterChange2}
                      />
                      4-5LPA
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="3-5LPA"
                        checked={userSalary["3-5LPA"]}
                        onChange={handleExperienceFilterChange2}
                      />
                      3-5LPA
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="2-5LPA"
                        checked={userSalary["2-5LPA"]}
                        onChange={handleExperienceFilterChange2}
                      />
                      2-5LPA
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="4-2LPA"
                        checked={userSalary["4-2LPA"]}
                        onChange={handleExperienceFilterChange2}
                      />
                      4-2LPA
                    </label>
                    <br />
                    <button className="registerButton" onClick={userExp}>
                      Search
                    </button>
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
                        <p class="m-0">{blog.experience}</p>

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
                    <ToastContainer
                      position="top-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                    />
                    {/* Same as */}
                    <ToastContainer />
                    {selectedblog && (
                      <div className="d-flex flex-column maa">
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
                            <div>
                              <h6
                                style={{
                                  marginLeft: "30px",
                                  marginTop: "10px",
                                }}
                              >
                                {selectedblog.salary}
                              </h6>
                            </div>

                            <div
                              key={selectedblog}
                              className={`col-md-5 margin1 ${
                                selectedCardIndexes.includes(selectedblog)
                                  ? "selected-card"
                                  : ""
                              }`}
                              onClick={() => toggleCardSelection(selectedblog)}
                            >
                              <i
                                className={`fa-solid fa-bookmark book ${
                                  selectedCardIndexes.includes(selectedblog)
                                    ? "green-book"
                                    : "black-book"
                                }`}
                                style={{ marginLeft: "220px" }}
                                onClick={() => {
                                  saveBtn(selectedblog);
                                }}
                              ></i>
                            </div>

                            <div>
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
                              onClick={() => applyBtn(selectedblog)}
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
                      <div className="card413  scroll d-flex flex-column ">
                        <h5>Job Description</h5>
                        <h6>Roles and Responsibilities</h6>
                        <p>{selectedblog.description}</p>
                        <h1>skillsets</h1>
                        <p>{selectedblog.skillsets}</p>
                        <h1>cities</h1>
                        <p>{selectedblog.cities}</p>
                      </div>
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
