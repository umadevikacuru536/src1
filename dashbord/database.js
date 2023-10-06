import logo from "../dashbord/pab bottom-logo (1).jpg";
import logo1 from "../dashbord/pab bottom-logo (1).jpg";
import { Link } from "react-router-dom";
import "./dashbord.css";
function Database() {

    return (
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
      <div className="uma12">
            <div class="container">       
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="dashbordheading">Dashboard</h1>
                            <p className="dashbordpara">Note:Extra Recruiter Login Cost 499 Rupees + GST Maximum 3 Recruiter Logins For package</p>
                            <div style={{ textAlign: "start", padding: "20px" }}>
                                <button class="profilebutton10 "style={{backgroundColor:"#4f3570",color:"white"}}>Data Base</button>
                                <button class="profilebutton10 " >Job Posting</button>
                                <button class="profilebutton10 " style={{ width: "17%"}}>Combo Products</button>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="company1">
                                <div className="d-flex flex-row">
                                    <i class=" user fa-sharp fa-solid fa-circle-user bellicon"></i>
                                    <div className="">
                                        <h3>Company Name</h3>
                                        <p>It & software</p>
                                        <p>www.company.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="card111 col-md-10 shadow mb-5">
                            <h3 className="monthlyheading m-4">Monthly Usage</h3>
                            <hr style={{ marginLeft: "20px", marginRight: "30px" }} />
                            <div className="row">
                                <div className="col-md-1"></div>

                                <div className="rama col-md-2 d-flex flex-row shadow ">
                                    <span class="material-symbols-outlined download">
                                        download
                                    </span>
                                    <div>
                                        <p >Excle Downloads</p>
                                        <h6>2000</h6>
                                    </div>
                                </div>
                                <div className=" rama col-md-2 d-flex flex-row shadow ">
                                    <span class="material-symbols-outlined profileview">
                                        text_snippet
                                    </span>
                                    <div>
                                        <p>profile view</p>
                                        <h6>2000</h6>
                                    </div>
                                </div>
                                <div className="rama col-md-2 d-flex flex-row shadow ">
                                    <span class="material-symbols-outlined message">
                                        mail
                                    </span>
                                    <div>
                                        <p>message</p>
                                        <h6>2000</h6>
                                    </div>
                                </div>
                                <div className="rama col-md-2 d-flex flex-row shadow">
                                    <span class="material-symbols-outlined edit">
                                        edit_square
                                    </span>
                                    <div>
                                        <p>Edit</p>
                                        <h6>2000</h6>
                                    </div>
                                </div>
                                <p className="mt-5"style={{marginLeft:"50vh"}}>All the values updating since last month</p>
                            </div>
                            <div className="row">

                                <h3 className="dashbordheading m-2">Daily Usage</h3>
                                <hr style={{ marginLeft: "20px",marginRight:"20px" }} />
                                <div className="col-md-1"></div>
                                <div className="rama col-md-2 d-flex flex-row shadow">
                                    <span class="material-symbols-outlined download">
                                        download
                                    </span>
                                    <div>
                                        <p>Excle Downloads</p>
                                        <h6>200</h6>
                                    </div>
                                </div>
                                <div className="rama col-md-2 d-flex flex-row shadow">
                                    <span class="material-symbols-outlined profileview">
                                        text_snippet
                                    </span>
                                    <div>
                                        <p>profile view</p>
                                        <h6>150</h6>
                                    </div>
                                </div>
                                <div className="rama col-md-2 d-flex flex-row shadow">
                                    <span class="material-symbols-outlined message">
                                        mail
                                    </span>
                                    <div>
                                        <p>message</p>
                                        <h6>25</h6>
                                    </div>
                                </div>
                                <div className="rama col-md-2 d-flex flex-row shadow">
                                    <span class="material-symbols-outlined edit">
                                        edit_square
                                    </span>
                                    <div>
                                        <p>Edit</p>
                                        <h6>00</h6>
                                    </div>

                                </div>
                                <p className="mt-5"style={{marginLeft:"50vh"}}>All the values updating since last month</p>
                            </div>
                            <div className="hr d-flex flex-row">
                                <h4>Recruiter profile</h4>
                                <button className="admin">+Creat Admin</button>
                            </div>
                            <div className="hr1 d-flex flex-row">
                                <div className="col-md-2 mx-5">Name</div>
                                <div className="col-md-2 mx-3">Date</div>
                                <div className="col-md-2 mx-3">Position</div>
                                <div className="col-md-2 mx-3">EmployeeID</div>
                                <div className="col-md-2 mx-5">Action</div>


                            </div>
                            <div className="container125  d-flex flex-row">
                                <div className="d-flex flex-row col-md-2 mt-4 " style={{ marginLeft: "60px" }}>
                                    <i class="  fa-sharp fa-solid fa-circle-user bellicon"></i>
                                    <p >Ashokini</p></div>
                                <div className="col-md-2 mx-3 my-3">July 07,2023</div>
                                <div className="col-md-2 mx-3 my-3">HR manager</div>
                                <div className="col-md-3 mx-3 my-3">123456789</div>
                                <div className="col-md-3  my-2">
                                    <button>Login</button></div>
                               
                            </div>
                            <div className="hr d-flex flex-row">
                                <h4>profile</h4>
                                <button className="admin" style={{marginLeft:"105vh"}}>+Creat Admin</button>
                            </div>
                            <div className="hr1 d-flex flex-row">
                                <div className="col-md-2 mx-5">Name</div>
                                <div className="col-md-2 mx-3">Date</div>
                                <div className="col-md-2 mx-3">Position</div>
                                <div className="col-md-2 mx-3">EmployeeID</div>
                                <div className="col-md-2 mx-5">Action</div>


                            </div>
                            <div className="container125  d-flex flex-row">
                                <div className="d-flex flex-row col-md-2 mt-4 " style={{ marginLeft: "60px" }}>
                                    <i class="  fa-sharp fa-solid fa-circle-user bellicon"></i>
                                    <p >Ashokini</p></div>
                                <div className="col-md-2 mx-3 my-3">July 07,2023</div>
                                <div className="col-md-2 mx-3 my-3">HR manager</div>
                                <div className="col-md-3 mx-3 my-3">123456789</div>
                                <div className="col-md-3  my-2">
                                    <button>Login</button></div>
                               
                            </div>
                        </div>

                        <div className="col-md-1"></div>

                    </div>

                </div>

            </div>
            {/* <footer class="container-fluid d-flex flex-row " style={{backgroundColor: "black"}}>
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6" style={{marginTop: "40px"}}>
                    <img src={logo1}class="img"
                        style={{height: "100px", width: "200px", paddingtop: "10px"}} />
                    <p style={{color: "white"}}>we provide you direct access to the walk-in<br/> opportunities available
                        on the site Recruit <br/> be filtered on work experience Venue from <br/>location,
                        employee type and data range</p>
                    <p style={{color: "white"}}>Toll free number:</p>
                    <i class="fa-solid fa-phone" style={{color: "white", padding: "10px"}}></i> <span
                       style={{color: "white"}}>898048084</span>
                </div>
                <div class="col-md-3 col-sm-6" style={{marginTop: "40px"}}>
                    <h5 style={{color: "white"}}>For Candidates</h5>

                    <p><i class="fa-solid fa-greater-than" style={{color: "white", margin: "10px"}}></i><span
                           style={{color: "white"}} >Canddate Prohic</span></p>
                    <p><i class="fa-solid fa-greater-than" style={{color: "white", margin: "10px"}}></i><span
                            style={{color: "white"}}>My
                            Requriment</span></p>
                    <p><i class="fa-solid fa-greater-than" style={{color: "white", margin: "10px"}}></i><span
                           style={{color: "white"}}>Applied
                            Jobs</span></p>
                    <p><i class="fa-solid fa-greater-than" style={{color: "white", margin: "15px"}}></i><span
                           style={{color: "white"}}>JOb
                            Alert</span></p>
                    <p><i class="fa-solid fa-greater-than" style={{color: "white", margin: "10px"}}></i><span
                           style={{color: "white"}}>Change
                            Password</span></p>
                </div>
                <div class="col-md-3 col-sm-6" style={{marginTop: "40px"}}>
                    <h5 style={{color: "white"}}>Jobs</h5>

                    <p><i class="fa-solid fa-greater-than" style={{color: "white", margin: "10px"}}></i><span
                           style={{color: "white"}}>All
                            Jobs</span></p>
                    <p><i class="fa-solid fa-greater-than" style={{color: "white", margin: "10px"}}></i><span
                            style={{color: "white"}}>Company
                            Jobs</span></p>
                    <p><i class="fa-solid fa-greater-than" style={{color: "white", margin: "10px"}}></i> <span
                            style={{color: "white"}}>Category Jobs</span></p>
                    <p><i class="fa-solid fa-greater-than" style={{color: "white", margin: "10px"}}></i><span
                            style={{color: "white"}}>Location</span></p>
                    <p><i class="fa-solid fa-greater-than" style={{color: "white", margin: "10px"}}></i><span
                            style={{color: "white"}}>Designation jobs</span></p>
                    <p><i class="fa-solid fa-greater-than" style={{color: "white", margin: "10px"}}></i><span
                          style={{color: "white"}}>Skill
                            jobs</span></p>
                </div>

                <div class="col-md-3 col-sm-6" style={{marginTop: "40px"}}>
                    <h5 style={{color: "white"}}>Browser jobs</h5>

                    <p><i class="fa-solid fa-greater-than" style={{color: "white", margin: "10px"}}></i><span
                            style={{color: "white"}}>Companies</span></p>
                    <p><i class="fa-solid fa-greater-than" style={{color: "white", margin: "10px"}}></i><span
                            style={{color: "white"}} >Browser
                            jobs</span></p>
                    <p><i class="fa-solid fa-greater-than" style={{color: "white", margin: "10px"}}></i><span
                             style={{color: "white"}}>Jobs</span></p>
                    <h5  style={{color: "white"}}>Information</h5>
                    <p><i class="fa-solid fa-greater-than" style={{color: "white", margin: "10px"}}></i><span
                             style={{color: "white"}}>Privacy
                            and policy</span></p>
                    <p><i class="fa-solid fa-greater-than" style={{color: "white", margin: "10px"}}></i><span
                             style={{color: "white"}}>Fraudt
                            alert</span></p>

                </div>
            </div>
            <hr style={{color: "white"}}/>
            <div class="d-flex flex-row">
               <div class="container">
                <div class="row">
                       
                       <div class="col-12 col-md-4">
                            <p  style={{color: "white"}}>All rights reserved @ 2022 PABjobs</p>
                            </div>
                            <div class="col-12 col-md-4">
                            <p  style={{color: "white"}}>Designed by<span style={{color: "blue"}}>@
                                    PerfexTechnologies</span></p>
                                    </div>
                                   
                                    <div class="col-12 col-md-4">
                            <div class="d-flex flex-row" >
                                <i class="fa-brands fa-linkedin" style={{color: "white", padding: "5px"}}></i>
                                <i class="fa-brands fa-instagram" style={{color: "white", padding: "5px"}}></i>
                                <i class="fa-brands fa-facebook" style={{color: "white", padding: "5px"}}></i>
                                <i class="fa-brands fa-twitter" style={{color: "white", padding: "5px"}}></i>
                            </div>
                      
                            </div>
                        </div>
                        </div>
                        </div>
                
              
        </div>
        <div>

        </div>
    </footer> */}

        </div>

    )
}
export default Database;
