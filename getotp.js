import { Link } from "react-router-dom";
import logo from "./pabjobs-logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import  { useState,useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Getopt(){
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    let navigate = useNavigate();

   
   
        
    useEffect(() => {
      fetchblogs();
    }, []);
    const fetchblogs = async () => {
      const api = "http://localhost:5010/allotp";
      const authToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s";
    
      try {
        const response = await axios.get(api, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
    
        if (response.data && Array.isArray(response.data)) {
          if (response.data.length > 0) {
            const lastIndex = response.data.length - 1;
            const lastMobileEl = response.data[lastIndex].mobileNumber;
            console.log("Mobile Number at the last index:", lastMobileEl);
            setMobileNumber(lastMobileEl)

            
          } else {
            console.error("The array is empty.");
          }
        } else {
          console.error("API response does not contain a valid array.");
        }
        if (response.data && Array.isArray(response.data)) {
          if (response.data.length > 0) {
            const lastIndex = response.data.length - 1;
            const lastMobileEl = response.data[lastIndex].otp;
            console.log("Mobile Number at the last index:", lastMobileEl);
            setOtp(lastMobileEl)

            
          } else {
            console.error("The array is empty.");
          }
        } else {
          console.error("API response does not contain a valid array.");
        }
        toast.success("Data fetched successfully", {
          position: "top-right",      
          hideProgressBar: false, 
          closeOnClick: true,     
          pauseOnHover: true,     
          draggable: true, 
          autoClose: 1000,
          theme: "colored", 
                
        });
        setTimeout(function () {
          navigate("");
        }, 3000);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        toast.error("Error fetching data");
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
                    <form class=" shadow logincard1 " style={{borderradius: "20px"}}>
                        <div class="loginheader">
                            <h2 class="loginheader1">Login</h2>
                            <p class="loginpara">It only takes a couple of minutes to get started!</p>
                        </div>
                        <div class="" id="moblienumber">
                            <label class="form-label">Moblie Number</label><br/>
                            
                            <p style={{color: "gray",marginLeft:"80px"}}>{mobileNumber}</p>
                            <label class="form-label">OTP</label><br/>
                            <input type="text" class="control w-75" style={{padding: "10px"}}
                                placeholder="Enter OTP sent on your moblie number" id="OTP"value={otp} />


                        </div>
                        <p style={{color: "#2c0264",marginLeft:"80px"}}>Resend OTP</p>
                        <p style={{color: "#2c0264",marginLeft:"80px"}} id="pra31">An OTP has been sent to {mobileNumber} may run receive OTP if the number is reqisted with pabjobs</p>
                        <div id="OTP">

                        </div>
                      <Link to="/about"><a href="./loginOTP .html " style={{color: "white"}} ><button class="loginbutton" style={{margintop: "20px"}} id="getotp">Login</button></a></Link>
                       
                        <p style={{textAlign:"center"}}>(or)</p>
                        <span class="logingoogle" style={{textAlign:"center"}}><button class="loginbutton2 shadow" ><img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVDA2e7vaSAfhljLBVppf2X0b0OuAxTQZqjYZcemxu6Umeik13cJI3HYISVRfEz9SMQA&usqp=CAU"
                                    alt="" class="googleimg"/>Sign in with Google</button></span>
<Link to="/"><a href="./index.html" style={{color: "white"}}><button class="Register shadow  d-md-none"  style={{padding: "10px", color:"#2c0264" , marginleft: "200px"}}> Register for free</button></a></Link>

                    </form>
                </div>
                

                <div class="col-12 col-md-2">

                </div>
                <div class=" col-12 col-md-4 remove mt-5">
                    <div class=" card1 d-flex flex-column">
                        <h2 class="pabjobheading">New to pabjobs?</h2>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/003/689/228/small/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
                            alt="" style={{height: "200px", width: "400px", borderradius: "20px"}}/>
                         
                       <p class="para4" ><i class="fa-solid fa-circle-check janlogin" style={{padding: "10px"}}></i>Build your profile and let recruitrs find yon</p> 
                       <p class="para4" ><i class="fa-solid fa-circle-check janlogin" style={{padding: "10px"}}></i> Get job posting delivered right to your email</p> 
                       <p class="para4" ><i class="fa-solid fa-circle-check janlogin" style={{padding: "10px"}}></i> Find a job and grow your career</p>
                       <p class="para4"> <i class="fa-solid fa-circle-check janlogin" style={{padding: "10px"}}></i>Find a job and grow your career</p>
                     <Link to="/">       <a href="/" style={{color: "white"}}><button class="Register shadow d-none d-md-block" style={{padding: "10px", color:"#2c0264"}}> Register for free</button></a></Link>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>



        </div>
    )
}
export default Getopt;

 