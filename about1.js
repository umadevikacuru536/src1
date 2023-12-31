import './App.css'
import logo from "./pabjobs-logo.png";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
function About1() {
  let navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  console.log(email);

  const usersData = {
    email: email,
    password: password
  };
  console.log(usersData);

  const onSubmitBtn = (e) => {
    e.preventDefault();
    if (email && password !== "") {
      axios
        .post("http://localhost:5010/login", usersData)
        .then((response) => {
          if (response.status === 200) {
            let jwtToken = response.data.token;
            localStorage.setItem("token", jwtToken);

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
              navigate("/database");
            }, 3000);
          }
        })
        .catch((error) => {
          console.error(error);
          toast.error("Login failed. Check your credentials.", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    }else {
      toast.warning("Enter both email and password");
    }
  };
  return (
    <div className="App">
      <nav class="navbar navbar-expand-sm bg-light">

        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} style={{ width: "300px", paddingleft: "100px" ,marginLeft:"30px"}} />
          </a>

        </div>
      </nav>
      <div class="container5">
        {/* <div class="container"> */}
        <div class="row">
          <div className='col-12 col-md-1'></div>
          <div class="col-12 col-md-6">
            <div class="shadow logincard1 " >
              <div class="loginheader py-4">
                <h2 class="loginheader1"> Recruiter Login</h2>
                <p class="loginpara">It only takes a couple of minutes to get started!</p>
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
                <form onSubmit={onSubmitBtn}>
                  
              <label for="" class="loginemail">Email ID</label><br />
              <input type="text" name="" id="" class="logininput w-75" placeholder="enter your email ID"  onChange={(e) => setemail (e.target.value)}
                    value={email} /><br />
              <label for="" class="loginemail">password</label><br />
              <input  type= "text" name="" id="" class="logininput w-75" placeholder="enter your password" onChange={(e) => setpassword(e.target.value)}
                    value={password}/>
               <i className="password-toggle" onClick={togglePasswordVisibility}>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </i>
              
             <Link to="/forgot"> <a href="./forgot password.html" style={{ color: "white" }}><p class="loginforgot">Forgot password?</p></a></Link>
              <button class="loginbutton" > Login</button>
              </form>
              <Link to="/loginotp"><a href="./loginOTP .html" style={{ color: "white" }}><h6 class="loginh4">Login via OTP</h6></a></Link>
              <span class="logingoogle"><button class="loginbutton2 shadow"><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVDA2e7vaSAfhljLBVppf2X0b0OuAxTQZqjYZcemxu6Umeik13cJI3HYISVRfEz9SMQA&usqp=CAU"
                alt="" class="googleimg" />Sign in with Google</button></span>
           <Link to="/"><button class="Register shadow  d-md-none" style={{ padding: "10px", color: "#2c0264" }}> Register for free</button></Link>

            </div>
          </div>

      
          
          <div class="col-12 col-md-4 remove mt-5">
            <div class=" card1 d-flex flex-column ">
              <h2 class="pabjobheading">New to pabjobs?</h2>
              <img src="https://static.vecteezy.com/system/resources/thumbnails/003/689/228/small/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
                alt="" className='image2' />

              <p class="para4" ><i class="fa-solid fa-circle-check janlogin" style={{ padding: "10px" }}></i>Build your profile and let recruitrs find yon</p>
              <p class="para4" ><i class="fa-solid fa-circle-check janlogin" style={{ padding: "10px" }}></i> Get job posting delivered right to your email</p>
              <p class="para4" ><i class="fa-solid fa-circle-check janlogin" style={{ padding: "10px" }}></i> Find a job and grow your career</p>
              <p class="para4"> <i class="fa-solid fa-circle-check janlogin" style={{ padding: "10px" }}></i>Find a job and grow your career</p>
             <Link to="/"> <a href="./index.html" style={{ color: "white" }}><button class="Register shadow d-none d-md-block" style={{ padding: "10px" }}> Register for free</button></a></Link>
            </div>

          </div>
        </div>

      </div>
    </div>
   

  );
}

export default About1;
