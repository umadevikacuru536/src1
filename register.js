import logo from "./pabjobs-logo.png";
import "./App.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "./Image 3.png";
import img1 from "./Tablet login-rafiki.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
function Register() {
  const [type, settype] = useState("");
  const [fullname, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [mobilenumber, setmobilenumber] = useState("");
  const [error, setErrorMessage] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  let navigate = useNavigate();
  const [data, Setdata] = useState([]);


  const usersData = {
    type: type,
    fullname: fullname,
    email: email,
    mobilenumber: mobilenumber,
    password: password,
    confirmpassword: confirmpassword,
  };
  console.log(usersData)
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");


  const validateMobileNumber = (value) => {
    if (!/^[9,6]\d{9}$/.test(value)) {
      setMobileNumberError("Mobile number should start with 9 and be exactly 10 digits");
    } else {
      setMobileNumberError("");
    }
  };
  
  const handleMobileNumberChange = (e) => {
    const newNumber = e.target.value;
    setMobileNumber(newNumber);
    validateMobileNumber(newNumber);
  };

  const [password1, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

 
  const validatePassword = (value) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
  
    if (!regex.test(value)) {
      setPasswordError("Password must contain at least one capital letter, one lowercase letter, one special character, and one number, and be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const [confirmpassword1, setConfirmpassword] = useState("");
  const [confirmpasswordError, setconfirmpasswordError] = useState("");

  const validateconfirmPassword = (value) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
  
    if (!regex.test(value)) {
      setconfirmpasswordError("Password must contain at least one capital letter, one lowercase letter, one special character, and one number, and be at least 8 characters long");
    } else {
      setconfirmpasswordError("");
    }
  };
  const arePasswordsMatching = () => {
    return password1 === confirmpassword1;
  };

  const handleconfirmPasswordChange = (e) => {
    const newPassword1 = e.target.value;
    setConfirmpassword(newPassword1);
    validateconfirmPassword(newPassword1);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();




    if (email && mobileNumber && password1 && confirmpassword1 !== "") {
      axios
        .post("http://localhost:5010/signup/", usersData)
        .then((response) => {
          Setdata(response.data);

          console.log(usersData);


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

            setTimeout(function () {
              navigate("/about");
            }, 3000);
          }
        })
        .catch((error) => {
          toast.error("enter new email", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log(error.response.userData)
      
        });
    }
    else {
      toast.warning("Enter the Required Details");
    }
  };

  console.log(type);

  return (
    <div>
      <div className="App">
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
                    <i class=" user fa-sharp fa-solid fa-circle-user  dropdown-toggle bellicon"></i></Link>

                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="bg-container">
          
          <div class="row">
            <div className="col-12 col-md-1"></div>
           
            <div class="col-12 col-md-5 yedookati">
             
                <h1 class="heading">Create an account</h1>
                <p
                  class="para1 heading"
                  style={{ textalign: "center", color: "#2c0264" }}
                >
                  It only takes a couple of minutes to get started!
                </p>
                <div className="swathi">
                <div class="d-flex flex-row">
                  <Link to="/about">
                    <a href="./about">
                      {" "}
                      <button type="button" class="btn1" onclick="Button3()">
                        Login
                      </button>
                    </a>
                  </Link>

                  <button
                    type="button"
                    class="btn2"
                    id="Sign up"
                    onclick="Button4()"
                  >
                    <i class="fa-solid fa-circle-check"></i>Sign UP
                  </button>
                  <br />
                </div>
                <div class="d-flex flex-row">
                  <div>
                    <button
                      type="button"
                      class="btn3"
                      id="jobseeker"
                      onclick="Button1()" name="type"
                     
                    >
                      Job Seekers
                      <input
                        type="radio"
                        id="input1"
                        style={{ padding: "10px", margin: "20px" }}
                        name="type"
                        value="applicant"
                        onChange={(e) => settype(e.target.value)}
                      />
                    </button>
                  </div>

                  <div>
                  <button
                      type="button"
                      class="btn4"
                      id="recruiters"
                      onclick="Button2()"name="type"
                    
                    >
                      Recruiters
                      <input
                        type="radio"
                        id="input2"
                        style={{ padding: "10px", margin: "20px" }}
                        name="type"
                        value="recruiter"
                        onChange={(e) => settype(e.target.value)}
                      />
                    </button>
                  </div>
                </div>
                </div>
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
                <form class="mb-3  p-5" onSubmit={onSubmitForm}>
                  <label for="Full Name" class="form-label" id="fullname">
                    {type === "recruiter" ? "company Name" : "Full Name"}
                  </label>
                  <br />
                  <input
                    type="text"
                    class="control"
                    id="email"
                    style={{ padding: "10px" }}
                    placeholder={
                      type === "recruiter"
                        ? "Enter your company name"
                        : "Enter your full name"
                    }
                    onChange={(e) => setname(e.target.value)}
                    value={fullname}
                  />

                  <div class="mb-3">
                    <label for="email id" class="form-label">
                      Email ID
                    </label>
                    <br />
                    <input
                      type="text"
                      class="control"
                      id="pwd"
                      style={{ padding: "10px" }}
                      placeholder="Enter your Email ID"
                      onChange={(e) => setemail(e.target.value)}
                      value={email}
                    />
                  </div>

                  <div class="mb-3">
                    <label for="password" class="form-label">
                      Password
                    </label>
                   
                  
                    <input
        type={showPassword ? 'text' : 'password'}
        value={password1}
        class="control"
        style={{ padding: "10px" }}
        placeholder="Minimum 6 characters"
        onChange={handlePasswordChange}
      /> <i className="password-toggle" onClick={togglePasswordVisibility}>
      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
    </i><br />
                    {passwordError && (
                      <span className="error mes">{passwordError}</span>
                    )}

                  </div>

                  <div class="mb-3">
                    <label for="password" class="form-label">
                      Confirm Password
                    </label>
                    <br />
                    <input
                    type={showPassword ? 'text' : 'password'}
                      class="control"
                      id="pwd"
                      style={{ padding: "10px" }}
                      placeholder="Minimum 6 characters"
                      onChange={handleconfirmPasswordChange}
                      value={confirmpassword1}
                    /><i className="password-toggle" onClick={togglePasswordVisibility}>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </i>
                    
                    {confirmpasswordError && (
                      <span className="error mes">{confirmpasswordError}</span>
                    )}
                  </div>
                  {arePasswordsMatching() ? null : (
        <span className="error mes">Password and Confirm Password must match.</span>
      )}<br/>
                  <label class="form-label">moblie Number</label>
                  <br />

                  <div class="">
                    <select style={{ width: "60px", height: "40px",marginLeft:"80px" }}>
                      <option>+91</option>
                    </select>
                  
                    <input
                      type="text"
                      className="control1"
                      placeholder="Enter your mobile number"
                      onChange={handleMobileNumberChange}
                      value={mobileNumber}
                    /><br />
                    {mobileNumberError && (
                      <span className="error mes">{mobileNumberError}</span>
                    )}
                  </div>

                  <div class="mb-3 abc" id="gender">
                    <label for="password" class="">
                      Gender
                    </label>
                    <br />
                    <input
                      type="radio"
                      name="gender"
                      id="genderMale"
                      value="Male"
                    />
                    <label for="genderMale">Male</label>
                    <input
                      type="radio"
                      name="gender"
                      id="genderFemale"
                      value="Female"
                    />
                    <label for="genderFemale">Female</label>
                    <input type="radio" name="gender" value="perfer not to say" />
                    <label for="perfer not to say">Perfer Not to say</label>
                  </div>

                  <p className="abc">
                    <i
                      class="fa-solid fa-square-check"
                      style={{ color: "green" }}
                    ></i>{" "}
                    I would to get lates jobupdates on whatsapp
                  </p>

                  <p className="abc">

                    By checking Register you agree to the treams and conditions &
                    privacy polices of pabjobs.com
                  </p>
                  <button class="{type === 'applicant' ? 'jobsikar' : 'company login'} button14">
    Register Now
</button>

                
                </form>
             
            </div>
            <div className="col-12 col-md-1"></div>
            <div class=" col-12 col-md-4 remove">
              <div class="card10 d-flex flex-column">
               
                                    {type === "recruiter" ?  <div> <img
                  src={img1}
                  alt="pic"
                  class="image2"

                  id="img"
                /></div>: <div> <img
                  src={img}
                  alt="pic"
                  class="image2"

                  id="img"
                /></div>}

                <div className="my-5">
                  <p class="para4">
                    <i
                      class="fa-solid fa-circle-check"
                      style={{ padding: "10px" }}
                    ></i>{" "}
                    Build your profile and let recruiters find you
                  </p>
                  <p class="para4">
                    <i
                      class="fa-solid fa-circle-check"
                      style={{ padding: "10px" }}
                    ></i>
                    Get job posting delivered right to your email
                  </p>
                  <p class="para4">
                    <i
                      class="fa-solid fa-circle-check"
                      style={{ padding: "10px" }}
                    ></i>{" "}
                    Find a job and grow your career
                  </p>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Register;
