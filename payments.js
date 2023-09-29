import "./App.css";
import logo from "./pabjobs-logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from './Credit-card.jpg';
function Payments() {
  const [error, setErrorMessage] = useState([]);
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [amount, setAmount] = useState("");

  const [data, setdata] = useState([]);
  const useData1 = {
    fullname: fullname,
    email: email,
    mobilenumber: mobilenumber,
    amount: amount,
  };
  console.log(useData1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullname && !email && mobilenumber && amount) {
      // Perform your submit logic here
      setErrorMessage("Form submitted successfully");
    } else {
      setErrorMessage("Form submission failed. Please check errors.");
    }

    if (fullname && email && mobilenumber && amount !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s",
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
      <div class="bg-container41">
        <div class="d-flex flex-row">
          <div class="col-md-1"></div>
          <div class=" col-12 col-md-6">
            <div class="card">
              <h1 class="heading" style={{ textalign: "center" }}>
                Payment Request
              </h1>
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
              <div onClick={handleSubmit}>
                <div class="mb-3 mt-3">
                  <label for=" Name" class="form-label" id="fullname">
                    {" "}
                    Name
                  </label>
                  <br />
                  <input
                    type="text"
                    class="control w-75 "
                    id="email"
                    style={{ padding: "10px " }}
                    placeholder="Enter your full Name"
                    onChange={(e) => setfullname(e.target.value)}
                    value={fullname}
                  />
                </div>
                <div class="mb-3">
                  <label for="Email id" class="form-label">
                    Email ID
                  </label>
                  <br />
                  <input
                    type="text"
                    class="control w-75"
                    id="pwd"
                    style={{ padding: "10px" }}
                    placeholder="Enter your Email ID"
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                  />
                </div>

                <label class="form-label">moblie Number</label>
                <br />

                <div class="">
                  <select
                   style={{ width: "60px", height: "40px",marginLeft:"80px" }}
                  >
                    <option>+91</option>
                  </select>
                  <input
                    type="text"
                    class="control1"
                    style={{ padding: "10px",width:"370px" }}
                    placeholder="Enter your moblie number"
                    onChange={(e) => setMobileNumber(e.target.value)}
                    value={mobilenumber}
                  />
                </div>

                <div class="mb-3 mt-3">
                  <label for=" Name" class="form-label" id="fullname">
                    Amount
                  </label>
                  <br />
                  <input
                    type="text"
                    class="control w-75"
                    id="email"
                    style={{ padding: "10px" }}
                    placeholder="Enter amount in rupees"
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                  />
                </div>

                <button
                  type="Register"
                  class="button1"
                  style={{ width: "450px" }}
                >
                  Make Payment
                </button>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-5 remove">
            
              <img src={img}class="image2"
                style={{ height: "500px", width: "400px",marginTop:"80px",borderRadius:"10px" }}
                id="img"/>
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payments;
