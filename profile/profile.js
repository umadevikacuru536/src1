import { Link } from "react-router-dom";
import "./profile.css";
import logo from "./img/pabjobs-logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Profile() {
  const [fullname, setfullname] = useState("");
  const [State, setState] = useState("");
  const [Currentlocation, setCurrentlocation] = useState("");
  const [mobile, setmobile] = useState("");
  const [emailE1, setemail] = useState("");

  const [data, setdata] = useState([]);
  console.log(fullname);
  

  const useData1 = {
    fullname: fullname,
    State: State,
    Currentlocation: Currentlocation,
    mobile: mobile,
    emailE1: emailE1,
  };
  console.log(useData1);

  const [error, setErrorMessage] = useState([]);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");

  const validateName = (value) => {
    if (!/^[A-Za-z ]+$/.test(value)) {
      setNameError("Name should only contain letters");
    } else {
      setNameError("");
    }
  };

  const validateMobileNumber = (value) => {
    if (!/^\d{10}$/.test(value)) {
      setMobileNumberError("Mobile number should be 10 digits");
    } else {
      setMobileNumberError("");
    }
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    validateName(newName);
  };

  const handleMobileNumberChange = (e) => {
    const newNumber = e.target.value;
    setMobileNumber(newNumber);
    validateMobileNumber(newNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameError && !mobileNumberError && name && mobileNumber) {
      // Perform your submit logic here
      setErrorMessage("Form submitted successfully");
    } else {
      setErrorMessage("Form submission failed. Please check errors.");
    }

    if (
      fullname &&
      State &&
      Currentlocation &&
      mobile &&
      emailE1 !== ""
    ) {
      const headers = {
        token :
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s"
      };
      axios
        .post("http://localhost:5010/profile", useData1, { headers })
        .then((response) => {
          setdata(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Registration Successfull", {
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
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
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
      <div>
        <div class="container">
          <div class="row">
            <div class="col-md-2">
              <div class="card profilecard">
                <i
                  class=" fa-sharp fa-solid fa-circle-user profileicon mb-4 mt-3"
                  style={{ fontsize: "200px" }}
                ></i>
                <Link to="/profile">
                  {" "}
                  <button
                    class="p-2 mb-1 profilebutton w-75 active text-white"
                    style={{ backgroundColor: " rgb(19, 19, 66)" }}
                  >
                    Candidate Profile
                  </button>
                </Link>
                <Link to="/resume">
                  <button class="p-2 mb-1 profilebutton w-75">Resume</button>
                </Link>
                <Link to="/applied">
                  <button class="p-2 mb-1 profilebutton w-75">
                    Applied Jobs
                  </button>
                </Link>
                <Link to="/jobalert">
                  <button class="p-2 mb-1 profilebutton w-75">
                    Job Alerts
                  </button>
                </Link>
                <Link to="/savedjobs">
                  <button class="p-2 mb-1 profilebutton w-75">
                    Saved Jobs
                  </button>
                </Link>
                <Link to="/changepassword">
                  <button class="p-2 mb-1 profilebutton w-75">
                    Change Password
                  </button>
                </Link>
                <Link to="/about">
                  <button class="p-2 mb-1 profilebutton w-75">Log Out</button>
                </Link>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div class="col-md-7">
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
                theme="colored"
              />
              <form class="card profilecard1 p-3 " onSubmit={handleSubmit}>
                <h6 class="profileh5">Basic Information</h6>
                <hr />
                <label for="" class="profilename mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full nmae"
                  class="form-control w-100 mb-2"
                  style={{ border: "1px solid rgb(19, 19, 66)" }}
                  onChange={(e) => setfullname(e.target.value)}
                 
                />
                {nameError && <span className="error mes">{nameError}</span>} 
                {nameError && <span className="error mes">{nameError}</span>}
                <div>
                  <p class="profileh5">Experience</p>
                  <input
                    type="radio"
                    name="select"
                   
                  />
                  <label for="" class="m-2">
                    Fresher
                  </label>
                  <input
                    type="radio"
                    name="select"
                 
                  />
                  <label for="" class="m-2">
                    Experienced
                  </label>
                </div>

                <div class="d-flex flex-row">
                  <div class="col-md-4">
                    <label for="" class="profileh5 mb-1">
                      State
                    </label>
                    <br />

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your State"
                      class="p-2 w-100 profileselect mb-2"
                      style={{ border: "1px solid black" }}
                      onChange={(e) => setState(e.target.value)}
                      value={State}
                    />
                  </div>
                  <div class="col-md-2"></div>
                  <div class="col-md-4">
                    <label for="" class="profileh5 mb-1">
                      Current location
                    </label>
                    <br />

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your State"
                      class="p-2 w-100 profileselect mb-2"
                      style={{ border: "1px solid black" }}
                      onChange={(e) => setCurrentlocation(e.target.value)}
                      value={Currentlocation}
                    />
                  </div>
                </div>
                <div class="d-flex flex-row">
                  <div class="col-md-4">
                    <label for="" class="profileh5 mb-1">
                      Mobile Number
                    </label>
                    <br />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your mobile number"
                      class="form-control w-100 p-2 profileselect"
                      style={{ border: "1px solid rgb(19, 19, 66)" }}
                      onChange={(e) => setmobile(e.target.value)}
                      value={mobile}
                    
                    />
                    {mobileNumberError && (
                      <span className="error mes">{mobileNumberError}</span>
                    )}
                  </div>
                  <div class="col-md-2"></div>
                  <div class="col-md-4">
                    <label for="" class="profileh5 mb-1">
                      Email
                    </label>
                    <br />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your Email Address"
                      class="form-control w-100 profileselect "
                      style={{ border: "1px solid rgb(19, 19, 66)" }}
                      onChange={(e) => setemail(e.target.value)}
                      value={emailE1}
                    />
                  </div>
                </div>
                <button class=" mt-4  profilebutton1">Update Details</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;



