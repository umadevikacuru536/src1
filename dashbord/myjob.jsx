import logo from  "../dashbord/pab bottom-logo (1).jpg";
import "./dashbord.css";
import { Link } from "react-router-dom";
function Myjob(){
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
              <Link to="/database"style={{ color: "white" }}>
                  <a class="nav-link " href="" style={{ color: "black" }}>
                  Dashboard
                  </a>
                  </Link>
              </li>
              <li class="nav-item">
                <Link to="/searchcandidate"style={{ color: "white" }}>
                  {" "}
                  <a
                    class="nav-link "
                    href="/browsejobs"
                    style={{ color: "black" }}
                  >
                     Seach Candidates
                  </a>
                </Link>
              </li>
              <li class="nav-item">
              <Link to="/buyservices"style={{ color: "white" }}>

               
                  <a
                    class="nav-link "
                    href="#"
                    style={{ color: "black" }}
                  >
                 Buy Services
                  </a>
                  </Link>
              </li>
         
            
              <li class="nav-item">
                <i class="fa-solid fa-bell bellicon1"></i>

              </li>
              <li class="nav-item1">
              <Link to="/companyprofile"style={{ color: "white" }}>

                  <i class=" user fa-sharp fa-solid fa-circle-user"></i>
                  </Link>

              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="A">
      <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="D">
                    <i class=" fa-sharp fa-solid fa-circle-user profileicon1"></i>
                <button class="p-2 mb-1 companybutton w-100">Company Profile</button>
                <button class="p-2 mb-1 companybutton w-100">Post A Jobs</button>
                 <button class="p-2 mb-1 companybutton w-100">My Jobs</button>
                <button class="p-2 mb-1 companybutton w-100">change Password</button>
        <button class="p-2 mb-1 companybutton w-100">Log Out</button>
                </div>

            </div>
            <div className="col-md-1"></div>
            <div class="col-md-8">
                <div class="E p-3" >
                    <div class=" p-3">

                        <h5>My Jobs</h5>
                        <hr/>
                        <div class="V d-flex flex-row">
                            <p style={{marginLeft:"4vh"}}>Job Title</p>
                            <p style={{marginLeft:"30vh"}}>Applications</p>
                            <p style={{marginLeft:"20vh"}}>Edit</p>
                        </div>

                    </div>
                    <div class="graphiccard p-3" >
                        <div class="d-flex flex-row">
                            <div class="d-flex flex-column col-md-5" >
                                <h3>Graphic Designer</h3>
                                <p>4.5-6 LPA</p>
                                <p>Hyderabad/secunderabad,telangana</p>
                                <p>1-3 years | Openings 2 </p>
                            </div>
                            <div class="col-md-2" >
                                <p class="mx-5 my-5">69+</p>
                            </div>
                            <div class="col-md-5 icons">
                                <i class="fa-solid fa-eye"></i>
                                <i class="fa-solid fa-pen-to-square"></i>
                                <i class="fa-solid fa-trash"></i>
                            </div>
                        </div>
                    </div>
                    <div class=" p-3" >
                        <div class="d-flex flex-row">
                            <div class="d-flex flex-column col-md-5">
                                <h3>Graphic Designer</h3>
                                <p>4.5-6 LPA</p>
                                <p>Hyderabad/secunderabad,telangana</p>
                                <p>1-3 years | Openings 2 </p>
                            </div>
                            <div class="col-md-2" >
                                <p class="mx-5 my-5">69+</p>
                            </div>
                            <div class="col-md-5 mx-5 my-5">
                                <i class="fa-solid fa-eye"></i>
                                <i class="fa-solid fa-pen-to-square"></i>
                                <i class="fa-solid fa-trash"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Myjob;