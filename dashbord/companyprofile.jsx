import logo from  "../dashbord/pab bottom-logo (1).jpg";
import { Link } from "react-router-dom";
import "./dashbord.css";

function Companyprofile(){
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
                    <h5 class="profileh5">Company Profile</h5>
                    <hr/>
                    <label for="" class="profilename mb-1">Name</label>
                    <input type="text" placeholder="Enter Company  name" class="form-control w-75 mb-2"/>
                    <div class="d-flex flex-row">
                        <div class="col-md-5">

                            <label for="" class="profilename mb-1">Website Link</label><br/>
                            <input type="text" placeholder="Enter your Website link" class="form-control w-75 mb-2"/>
                        </div>
                      
                        <div class="col-md-5">
                            <label for="" class="profilename mb-1">Founded Date</label><br/>
                            <input type="text" placeholder="DD-MM-YYYY" class="form-control w-75 mb-2"/>
                        </div>
                    </div>
                    <label for="" class="profilename mb-1">Industry Type</label>
                    <input type="text" placeholder="Enter your Industry Type" class="form-control w-25 mb-2"/>
                    <label for="" class="profilename mb-1">Company Discription</label><br/>
                    <textarea id="w3review" name="w3review" rows="7" cols="80"> Enter your company discription</textarea>
                    <h5>Contact Information</h5>
                    <hr/>
                    <div class="d-flex flex-row">
                        <div class="col-md-6">

                            <label for="" class="profilename mb-1">phone</label><br/>
                            <input type="text" placeholder="Enter your phone" class="form-control w-75 mb-2"/>
                        </div>
                
                        <div class="col-md-6">
                            <label for="" class="profilename mb-1">Email</label><br/>
                            <input type="text" placeholder="Enter your email" class="form-control w-75 mb-2"/>
                        </div>
                    </div>
                    <div class="d-flex flex-row">
                        <div class="col-md-6">

                            <label for="" class="profilename mb-1">Country</label><br/>
                            <input type="text" placeholder="Enter Country" class="form-control w-75 mb-2"/>
                        </div>
                        
                        <div class="col-md-6">
                            <label for="" class="profilename mb-1">State</label><br/>
                            <input type="text" placeholder="Enter State" class="form-control w-75 mb-2"/>
                        </div>
                    </div>
                    <div class="d-flex flex-row">
                        <div class="col-md-6">

                            <label for="" class="profilename mb-1">City</label><br/>
                            <input type="text" placeholder="Enter city" class="form-control w-75 mb-2"/>
                        </div>
                        
                        <div class="col-md-6">
                            <label for="" class="profilename mb-1">Pincode</label><br/>
                            <input type="text" placeholder="Enter pincode" class="form-control w-75 mb-2"/>
                        </div>
                    </div>
                    <label for="" class="profilename mb-1">Address</label><br/>
                    <textarea id="w3review" name="w3review" rows="4" cols="80"></textarea><br/>

                    <label for="" class="profilename mb-1">Social Meadia Links</label>
                    <hr/>
                    <div class="d-flex flex-row">
                        <div class="col-md-5">
                            <div className="d-flex flex-row mb-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" className="socialimags"/>
                            <input type="text" placeholder="Enter linkedin account link" class="form-control w-75 mb-2"/>
                            </div>
                        </div>
                        <div class="col-md-5">
                        <div className="d-flex flex-row">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Twitter2.svg/2048px-Twitter2.svg.png" className="socialimags"/>
                            
                            <input type="text" placeholder="Enter twitter account link" class="form-control w-75 mb-2"/>
                        </div>
                        </div>
                    </div>
                    <div class="d-flex flex-row">
                        <div class="col-md-5">
                            <div class="d-flex flex-row mb-3">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png"className="socialimags"/>
                            <input type="text" placeholder="Enter facebook account link" class="form-control w-75 mb-2"/>

                                </div>
                        </div>
                        <div class="col-md-5">
                        <div className="d-flex flex-row">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" className="socialimags"/>

                            <input type="text" placeholder="Enter instagram account link" class="form-control w-75 mb-2"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                    <div className="d-flex flex-row">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" className="socialimags"/>

                        <input type="text" placeholder="Enter google account link" class="form-control w-75 mb-2"/>
                        </div>
                        
                    </div>
                    <button class="w-25 mt-4 p-2 profilebutton1">Update Details</button>
                </div>
                
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Companyprofile;