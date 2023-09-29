import { Link } from "react-router-dom";
import logo from "./pabjobs-logo.png";
import  { useState } from 'react';
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Loginotp(){
  
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    let navigate = useNavigate();

 const data ={
mobileNumber :mobileNumber,
otp:otp

 }
 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (mobileNumber) {
        // Send a POST request to your server to initiate the OTP sending process
        const response = await axios.post('http://localhost:5010/otp', data
          
        );

        if (response.status === 200) {
        
          toast.success("OTP sent Successfully", {
                    position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
                         closeOnClick: true,
                         pauseOnHover: true,
                         draggable: true,
                        progress: undefined,
            theme: "colored",
                       });
                       console.log('Received OTP:', response.data);
                       setOtp(response.data);
                       setTimeout(function () {
                        navigate("/getopt");
                      }, 3000);

        }
       

      } else {
        toast.warning("Enter mobile number");
      }
    } catch (error) {
      console.error('Error:', error);
      
    }
  };
    return(
        <div>
            <nav class="navbar navbar-expand-sm bg-light">

<div class="container-fluid">
  <a class="navbar-brand" href="#">
    <img src={logo} style={{ width: "300px", paddingleft: "100px" ,marginLeft:"30px"}} />
  </a>

</div>
</nav>
     <div class="container5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
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
                    <form class="shadow logincard1 " style={{borderRadius:'20px'}}onSubmit={handleSubmit}>
                        <div class="loginheader">
                            <h2 class="loginheader1">Login</h2>
                            <p class="loginpara">It only takes a couple of minutes to get started!</p>
                        </div>
                        <div class="" id="moblienumber">
                            <label class="form-label ">moblie Number</label><br/>
                            <select style={{width:'50px', height:'40px',marginLeft:"80px"}}>
                                <option>+91</option>
                            </select>
                            <input type="text" class="control1" style={{padding:'10px',paddingLeft:"10px"}}value={mobileNumber}
                                placeholder="Enter your moblie number"onChange={(e) => setMobileNumber(e.target.value)}/>
                                
                        </div>
                        <p style={{color:'#2c0264',marginLeft:"80px"}} id="pra31">You will receive an OTP on this Number</p>
                        <div id="OTP">

                        </div>
                        <a href="getotp.html" style={{color:'white'}}><button class="loginbutton" style={{marginTop:'20px'}} onclick="GetOTP()" id="getotp">Get OTP</button></a>
                        <a href="./loginform.html" style={{color:'white'}}><h6 class="loginh4" id="loginemail">Login via Email</h6></a>
                        <p style={{marginLeft: '380px'}}>(or)</p>
                        <span class="logingoogle"><button class="loginbutton2 shadow"><img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVDA2e7vaSAfhljLBVppf2X0b0OuAxTQZqjYZcemxu6Umeik13cJI3HYISVRfEz9SMQA&usqp=CAU"
                                    alt="" class="googleimg"/>Sign in with Google</button></span>
<Link to="/"><a href="/" style={{color:'white'}}><button class="Register shadow  d-md-none"  style={{padding:'10px', color:'#2c0264' ,marginLeft:'200px'}}> Register for free</button></a></Link>

                    </form>
                </div>
                

                <div class="col-12 col-md-2">

                </div>
                <div class=" col-12 col-md-4 remove mt-5">
                    <div class=" card1 d-flex flex-column">
                        <h2 class="pabjobheading">New to pabjobs?</h2>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/003/689/228/small/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
                            alt="" style={{height:'200px', width:'400px', borderRadius:'20px'}}/>
           
                       <p class="para4" ><i class="fa-solid fa-circle-check janlogin" style={{padding:'10px'}}></i>Build your profile and let recruitrs find yon</p> 
                       <p class="para4" ><i class="fa-solid fa-circle-check janlogin" style={{padding:'10px'}}></i> Get job posting delivered right to your email</p> 
                       <p class="para4" ><i class="fa-solid fa-circle-check janlogin" style={{padding:'10px'}}></i> Find a job and grow your career</p>
                       <p class="para4"> <i class="fa-solid fa-circle-check janlogin" style={{padding:'10px'}}></i>Find a job and grow your career</p>
                     <Link to="/"> <a href="./index.html" style={{color: 'white'}}><button class="Register shadow d-none d-md-block" style={{padding:'10px' ,color:'#2c0264 '}}> Register for free</button></a></Link>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>

        </div>
    )
}
export default Loginotp;  

   







