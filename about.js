import './App.css'
import logo from "./pabjobs-logo.png";
function About() {

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
              <div class="loginheader">
                <h2 class="loginheader1">Login</h2>
                <p class="loginpara">It only takes a couple of minutes to get started!</p>
              </div>
              <label for="" class="loginemail">Email ID</label><br />
              <input type="text" name="" id="" class="logininput w-75" placeholder="enter your email ID" /><br />
              <label for="" class="loginpassword">password</label><br />
              <input type="password" name="" id="" class="logininput w-75" placeholder="enter your password" /><i
                class="fa-solid fa-eye eyeicon" ></i>
              <a href="./forgot password.html" style={{ color: "white" }}><p class="loginforgot">Forgot password?</p></a>
              <a href="./home.html"><button class="loginbutton">Login</button></a>
              <a href="./loginOTP .html" style={{ color: "white" }}><h6 class="loginh4">Login via OTP</h6></a>
              <span class="logingoogle"><button class="loginbutton2 shadow"><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVDA2e7vaSAfhljLBVppf2X0b0OuAxTQZqjYZcemxu6Umeik13cJI3HYISVRfEz9SMQA&usqp=CAU"
                alt="" class="googleimg" />Sign in with Google</button></span>
              <a href="./index.html"><button class="Register shadow  d-md-none" style={{ padding: "10px", color: "#2c0264", marginleft: "200px" }}> Register for free</button></a>

            </div>
          </div>


          
          <div class=" col-12 col-md-4 remove">
            <div class=" card1 d-flex flex-column ">
              <h2 class="pabjobheading">New to pabjobs?</h2>
              <img src="https://static.vecteezy.com/system/resources/thumbnails/003/689/228/small/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
                alt="" style={{ height: "200px", width: "400px", borderradius: "20px" }} />

              <p class="para4" ><i class="fa-solid fa-circle-check janlogin" style={{ padding: "10px" }}></i>Build your profile and let recruitrs find yon</p>
              <p class="para4" ><i class="fa-solid fa-circle-check janlogin" style={{ padding: "10px" }}></i> Get job posting delivered right to your email</p>
              <p class="para4" ><i class="fa-solid fa-circle-check janlogin" style={{ padding: "10px" }}></i> Find a job and grow your career</p>
              <p class="para4"> <i class="fa-solid fa-circle-check janlogin" style={{ padding: "10px" }}></i>Find a job and grow your career</p>
              <a href="./index.html" style={{ color: "white" }}><button class="Register shadow d-none d-md-block" style={{ padding: "10px" }}> Register for free</button></a>
            </div>

          </div>
        </div>

      </div>
    </div>
   

  );
}

export default About;
