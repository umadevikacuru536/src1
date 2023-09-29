import { Link } from "react-router-dom";
import  { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

 

  
function Forgot(){
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  let navigate = useNavigate();

 const data ={
mobileNumber :mobileNumber

 }
  // const handleSubmit =  (e) => {
  //   e.preventDefault();

  //   if (mobileNumber !== "") {
  //     axios
  //       .post("http://localhost:5010/forgot-password", usersData)
  //       .then((response) => {
  //         if (response.status === 200) {
  //           toast.success("Registration Successfull", {
  //             position: "top-right",
  //             autoClose: 1000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "colored",
  //           });


  //           setTimeout(function () {
  //             navigate("/sub");
  //           }, 3000);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
        
  //       });
  //   }else {
  //     toast.warning("Enter both email and password");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (mobileNumber) {
        // Send a POST request to your server to initiate the OTP sending process
        const response = await axios.post('http://localhost:5010/forgot-password', data
          
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
                       console.log('Received OTP:', response.data.otp);
                       setOtp(response.data.otp);
                       setTimeout(function () {
                        navigate("/sub");
                      }, 3000);

        }
       

      } else {
        toast.warning("Enter both email and password");
      }
    } catch (error) {
      console.error('Error:', error);
      
    }
  };
return(
        <div>
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
                    <form class="shadow logincard1 "onSubmit={handleSubmit}>
                        <div class="loginheader">
                            <h2 class="loginheader1">Forgotten Password?</h2>
                            <p class="loginpara">It only takes a couple of minutes to get started!</p>
                        </div>
                        <div class="">
                            <label class="form-label">Moblie Number</label><br/>
                            <select style={{width: "50px", height: "40px",marginLeft:"80px"}}>
                                <option>+91</option>
                            </select>
                            <input type="text" class="control1" style={{padding: "10px"}}
                                placeholder="Enter your moblie number" value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}/>
                                <p style={{color: "#2c0264",marginLeft:"80px"}}>You will recevie an Password on this number</p>
                        </div>
                   <Link to="/sub"><button class="loginbutton" style={{margintop: "20px"}}>Submit</button></Link> 
                        <h6 class="loginh4">Login via Email</h6>
                        <p style={{textAlign:"center"}}>or</p>
                        <span class="logingoogle" style={{textAlign:"center"}}><button class="loginbutton2 shadow"><img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVDA2e7vaSAfhljLBVppf2X0b0OuAxTQZqjYZcemxu6Umeik13cJI3HYISVRfEz9SMQA&usqp=CAU"
                                    alt="" class="googleimg"/>Sign in with Google</button></span>
<Link to="/"><a href="./index.html" style={{color: "white"}}><button class="Register shadow  d-md-none"  style={{padding: "10px", color:"#2c0264 ", marginleft: "200px"}}> Register for free</button></a></Link>

                    </form>
                    {otp && <p>OTP: {otp}</p>}
                </div>
<div className="col-md-2"></div>
                <div class=" col-12 col-md-4 remove mt-5">
                    <div class=" card1 d-flex flex-column">

                        <img src="data:image/png;base64,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"
                            alt="" style={{height: "350px", width: "400px", borderradius: "20px"}}/>
                         
                       <p class="para4" ><i class="fa-solid fa-circle-check janlogin" style={{padding: "10px"}}></i>Enter your moblie number and submit</p> 
                       <p class="para4" ><i class="fa-solid fa-circle-check janlogin" style={{padding: "10px"}}></i>You will get temporary password  you moblie number</p> 
                       <p class="para4" ><i class="fa-solid fa-circle-check janlogin" style={{padding: "10px"}}></i>Submit your email and temporary password</p>
                       <p class="para4"> <i class="fa-solid fa-circle-check janlogin" style={{padding: "10px"}}></i>Reset your password as your Wish</p>
                            
                    </div>
                    
                </div>
            </div>

        </div>
            </div>
           
        </div>
    )
}
export default Forgot;

  


