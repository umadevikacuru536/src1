import './profile.css';
import { Link } from 'react-router-dom';
import logo from "./img/pabjobs-logo.png";
function Jobalert(){
    return(
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
            <Link to="/profile"> <button class="p-2 mb-1 profilebutton w-75 " >Candidate Profile</button></Link>
                <Link to="/resume"><button class="p-2 mb-1 profilebutton w-75">Resume</button></Link>
                <Link to="/applied"><button class="p-2 mb-1 profilebutton w-75">Applied Jobs</button></Link>
                <Link to="/jobalert"><button class="p-2 mb-1 profilebutton w-75 ative bg-primary text-white">Job Alerts</button></Link>
                <Link to="/savedjobs"><button class="p-2 mb-1 profilebutton w-75">Saved Jobs</button></Link>
                <Link to="/changepassword"><button class="p-2 mb-1 profilebutton w-75">Change Password</button></Link>
                <Link to="/about"><button class="p-2 mb-1 profilebutton w-75">Log Out</button></Link>
           
        </div>
        <div className='col-md-1'></div>
        <div className="col-12 col-md-9 col-lg-6">
     
            <div class="profilecard2 p-3">
            <h6 class="">Job Alert</h6>
                    <div class="devi d-flex flex-row  ">
                    <h6 class="mt-3 p-2">Sort</h6><br/>
                    <button class="dropdown-toggle  threebutton shadow p-2">Last 3 Days</button>
                    </div>
                    <hr/>
                    <div class="text-center">
            <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?size=626&ext=jpg&ga=GA1.1.1792788615.1688462176&semt=ais" alt="" width="200px"/>
            <h4 class="mb-5">No Applications Found</h4>
             </div> 
            </div>
            
          
        </div>
      </div>
    </div>
    </div>
    )
}
export default Jobalert;

   


      

















    













