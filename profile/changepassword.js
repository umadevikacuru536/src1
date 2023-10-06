import logo from "./img/pabjobs-logo.png";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Changepassword() {
  const [OldPassword, setOldPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [CofirmPassword, setCofirmPassword] = useState("");
  const [data, Setdata] = useState([]);
  const usersData = {
    OldPassword: OldPassword,
    NewPassword: NewPassword,
    CofirmPassword: CofirmPassword,
  };
  console.log(usersData) 
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (OldPassword && NewPassword && CofirmPassword !== "") {
      const headers = {
        token :
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s"
      };
      axios
        .post("http://localhost:5010/changepassword", usersData)
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

           
          }
        })
        .catch((error) => {
          toast.error("user already register", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log(error.response.usersData)
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
              <li class="nav-item1">
                <i class="fa-solid fa-bell bellicon"></i>
              </li>
              <li class="nav-item1">
              <Link to="/profile">
                  <i class=" user fa-sharp fa-solid fa-circle-user  dropdown-toggle "></i></Link>
               
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
          <Link to="/profile"> <button class="p-2 mb-1 profilebutton w-75" >Candidate Profile</button></Link>
                <Link to="/resume"><button class="p-2 mb-1 profilebutton w-75">Resume</button></Link>
                <Link to="/applied"><button class="p-2 mb-1 profilebutton w-75">Applied Jobs</button></Link>
                <Link to="/jobalert"><button class="p-2 mb-1 profilebutton w-75">Job Alerts</button></Link>
                <Link to="/savedjobs"><button class="p-2 mb-1 profilebutton w-75">Saved Jobs</button></Link>
                <Link to="/changepassword"><button class="p-2 mb-1 profilebutton w-75 ative bg-primary text-white">Change Password</button></Link>
                <Link to="/about"><button class="p-2 mb-1 profilebutton w-75">Log Out</button></Link>
        </div>
        <div className="col-md-1">
        </div>
        <div className="col-12 col-sm-12 col-md-9 col-lg-6">
          
          
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
            <form class="profilecard3 p-3" onClick={onSubmitForm}>
              
              <h5 class="profileh5">Change Password</h5>
              <hr />
              <label for="" class="profilename mb-1">
                Old Password
              </label>
              <input
                type="text"
                placeholder="Enter your Old password"
                class="form-control w-75 mb-2"
              
                onChange={(e) => setOldPassword(e.target.value)}
                value={OldPassword}
              />
              <div class="d-flex flex-row mt-2">
                <div class="col-md-4">
                  <label for="" class="profileh5 mb-1">
                    New Password
                  </label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your new Password"
                    class="form-control w-100 p-2 profileselect "
                  
                    onChange={(e) => setNewPassword(e.target.value)}
                    value={NewPassword}
                  />
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-4">
                  <label for="" class="profileh5 mb-1">
                    Confirm Password
                  </label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Confirm Password"
                    class="form-control w-100 p-2 profileselect "
                 
                    onChange={(e) => setCofirmPassword(e.target.value)}
                    value={CofirmPassword}
                  />
                </div>
              </div>
              <button class="w-25 mt-4 p-2 profilebutton1">
                Update Password
              </button>
            </form>
          </div>
       
      </div>
    </div>
    </div>
  );
}
export default Changepassword;
// import React, { useState } from "react";
// import axios from "axios";

// function ChangePassword() {
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmNewPassword, setConfirmNewPassword] = useState("");
//   const [message, setMessage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate that new password and confirm new password match
//     if (newPassword !== confirmNewPassword) {
//       setMessage("New password and confirm password must match.");
//       return;
//     }

//     if (!currentPassword && newPassword && confirmNewPassword !== "") {
//       // Send a request to your server to update the password
//       const response = await axios.post("http://localhost:5010/changepassword", {
//         currentPassword,
//         newPassword,
//       });
      

//       if (response.status === 200) {
//         setMessage("Password updated successfully.");
//       }
//     } 
//     }
  

//   return (
//     <div>
//       <h2>Change Password</h2>
//       {message && <div>{message}</div>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Current Password</label>
//           <input
//             type="password"
//             value={currentPassword}
//             onChange={(e) => setCurrentPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>New Password</label>
//           <input
//             type="password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm New Password</label>
//           <input
//             type="password"
//             value={confirmNewPassword}
//             onChange={(e) => setConfirmNewPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Change Password</button>
//       </form>
//     </div>
//   );
//   }

// export default ChangePassword;
