import logo from  "../dashbord/pab bottom-logo (1).jpg";
import { Link } from "react-router-dom";
import "./dashbord.css";
function PostAjob(){
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
                <div class="E p-3">
                    
                    <h5>Post A Job</h5>
                    <hr/>
                    <div class="d-flex flex-row">
                        <div class="col-md-6">

                            <label for="" class="profilename mb-1">Job Title</label><br/>
                            <input type="text" placeholder="Enter job title" class="form-control w-75 mb-2"/>
                        </div>
                        
                        <div class="col-md-6">
                            <label for="" class="profilename mb-1">Position Available</label><br/>
                            <input type="text" placeholder="Enter no.of Position" class="form-control w-75 mb-2"/>
                        </div>
                    </div>
                    <div class="d-flex flex-row">
                        <div class="col-md-6">

                            <label for="" class="profilename mb-1">Job Type</label><br/>
                            <input type="text" placeholder="Enter job type" class="form-control w-75 mb-2"/>
                        </div>
                        
                        <div class="col-md-6">
                            <label for="" class="profilename mb-1">Experience</label><br/>
                            <input type="text" placeholder="select experience" class="form-control w-75 mb-2"/>
                        </div>
                    </div>
                    <div class="d-flex flex-row">
                        <div class="col-md-6">

                            <label for="" class="profilename mb-1">maximum Salary Per Annum</label><br/>
                            <input type="text" placeholder="Enter maximum Salary" class="form-control w-75 mb-2"/>
                        </div>
                        
                        <div class="col-md-6">
                            <label for="" class="profilename mb-1">Techinical Skills</label><br/>
                            <input type="text" placeholder="press Enter to add skills" class="form-control w-75 mb-2"/>
                        </div>
                    </div>
                    <div class="d-flex flex-row">
                        <div class="col-md-6">

                            <label for="" class="profilename mb-1">Region</label><br/>
                            <input type="text" placeholder="Select your region" class="form-control w-75 mb-2"/>
                        </div>
                        
                        <div class="col-md-6">
                            <label for="" class="profilename mb-1">location</label><br/>
                            <input type="text" placeholder="press Enter to add cities" class="form-control w-75 mb-2"/>
                        </div>
                    </div>
                    <div class="d-flex flex-row">
                        <div class="col-md-6">

                            <label for="" class="profilename mb-1">Deadline</label><br/>
                            <input type="text" placeholder="DD/MM/YYYY" class="form-control w-75 mb-2"/>
                        </div>
                        
                        <div class="col-md-6">
                            <label for="" class="profilename mb-1">Education</label><br/>
                            <input type="text" placeholder="Education required" class="form-control w-75 mb-2"/>
                        </div>
                    </div>
                    <label for="" class="profilename mb-1">job Discription</label><br/>
                    <textarea id="w3review" name="w3review" rows="8" cols="50"></textarea><br/>

                   
                    <button class="w-25 mt-4 p-2  profilebutton1">Post A Job</button>
                </div>
                
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}
export default PostAjob;