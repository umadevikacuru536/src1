import { Link } from "react-router-dom";

function Sub(){
    return(
        <div>

<div class="container5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="shadow logincard1 " style={{borderradius: "20px"}}>
                        <div class="loginheader">
                            <h2 class="loginheader1">Login</h2>
                            <p class="loginpara">It only takes a couple of minutes to get started!</p>
                        </div>
                        <label for="" class="form-label">Email ID</label><br/>
                        <input type="text" name="" id="" class="control1" style={{marginLeft:"80px"}} placeholder="enter your email ID"/><br/>
                        <label for="" class="form-label">password</label><br/>
                        <input type="password" name="" id="" class="control1" style={{marginLeft:"80px"}} placeholder="enter your password"/> 
                     <a href="./submit.html" style={{color: "white"}}><p class="loginforgot"style={{marginLeft:"80px"}}> Enter password that received on your phone number</p></a>
                     <Link to="/about">  <button class="loginbutton">Login</button></Link>
                      <Link to="loginotp">  <a href="./loginOTP .html" style={{color: "white"}}><h6 class="loginh4">Login via OTP</h6></a></Link>
                        <span class="logingoogle"><button class="loginbutton2 shadow"><img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVDA2e7vaSAfhljLBVppf2X0b0OuAxTQZqjYZcemxu6Umeik13cJI3HYISVRfEz9SMQA&usqp=CAU"
                                    alt="" class="googleimg"/>Sign in with Google</button></span>
<Link to="/"><a href="./index.html"><button class="Register shadow  d-md-none"  style={{padding: "10px", color:"#2c0264" , marginleft: "200px"}}> Register for free</button></a></Link>

                    </div>
                </div>
                

                <div class="col-12 col-md-2">

                </div>
                <div class=" col-12 col-md-4 remove mt-5">
                    <div class=" card1 d-flex flex-column">
                        <h2 class="pabjobheading">New to pabjobs?</h2>
                        <img src="img/Feb-Business_9.jpg"
                            alt="" style={{height: "200px", width: "400px", borderradius: "20px"}}/>
                         
                       <p class="para4" ><i class="fa-solid fa-circle-check janlogin" style={{padding: "10px"}}></i>Build your profile and let recruitrs find yon</p> 
                       <p class="para4" ><i class="fa-solid fa-circle-check janlogin" style={{padding: "10px"}}></i> Get job posting delivered right to your email</p> 
                       <p class="para4" ><i class="fa-solid fa-circle-check janlogin" style={{padding: "10px"}}></i> Find a job and grow your career</p>
                       <p class="para4"> <i class="fa-solid fa-circle-check janlogin" style={{padding: "10px"}}></i>Find a job and grow your career</p>
                       <Link to="/">     <a href="./index.html" style={{color: "white"}}><button class="Register shadow d-none d-md-block" style={{padding: "10px"}}> Register for free</button></a></Link>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
    

        </div>
    )
}

export default Sub;


  