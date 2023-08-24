import { Link } from 'react-router-dom';
import './profile.css';
import logo from "./img/pabjobs-logo.png";
function Resume(){
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
              <li class="nav-item">
                <i class="fa-solid fa-bell bellicon"></i>
              </li>
              <li class="nav-item">
              <Link to="/profile">
                  <i class=" user fa-sharp fa-solid fa-circle-user  dropdown-toggle bellicon"></i></Link>
               
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <div class="container"style={{backgroundColor:" #f8f2f8"}}>
        <div class="row">
            <div class="col-md-4">
                <div class="profilecardi card  shadow">
                    <div class="d-flex flex-row  ">
                        <div>
                            <Link to="/profile"><i class=" fa-sharp fa-solid fa-circle-user profileicon px-3" style={{fontsize: "120px"}}></i></Link>
                        </div>
                        <div>
                            <h5 class="resumeh5">K.umadevi</h5>
                            <p>Software Developer</p>
                            <p>at Perfex Technologies</p>
                        </div>
                    </div>
                    <div class="p-2">
                        <i class="fa-solid fa-phone-volume px-3 resumeicon"></i><span>6305873533</span><i
                            class="fa-solid fa-circle-check janlogin px-3 resumeicon1"></i><br/>
                        <i class="fa-solid fa-envelope px-3 resumeicon"></i><span>kavuurumadevi@gmail.com</span><i
                            class="fa-solid fa-circle-check janlogin px-3 resumeicon1"></i><br/>
                        <i class="fa-solid fa-briefcase px-3 resumeicon"></i><span>2 years</span><br/>
                        <i class="fa-solid fa-location-dot px-3 resumeicon"></i><span>Hyderabad</span><br/>
                        <i class="fa-solid fa-money-bill px-3 resumeicon"></i><span>8,00,000 - 12,00,000</span><br/>
                        <i class="fa-solid fa-calendar-days px-3 resumeicon"></i><span>10 days notice period</span>
                    </div>
                    <hr/>
                    <div>
                        <p class="spa85">Your profile updated</p>
                        <button class="spa82 p-1 px-4 bg-warning " style={{borderColor:"yellow",borderRadius:"10px"}}>89%</button><span class="spa83 mx-3">Add 3 missing details</span>
                        <p class="spa84 ">Profile last updated -25feb,2023</p>
    
                    </div>
                </div>
                <div class="mt-2 ">
                    <button class="w-100 p-2 mt-2 resumebtn shadow">Resume</button>
                    <button class="w-100 p-2 mt-2 resumebtn shadow">Resume Headline</button>
                    <button class="w-100 p-2 mt-2 resumebtn shadow">Profile Summary</button>
                    <button class="w-100 p-2 mt-2 resumebtn shadow">Key skills</button>
                    <button class="w-100 p-2 mt-2 resumebtn shadow">Employment</button>
                    <button class="w-100 p-2 mt-2 resumebtn shadow">Education</button>
                    <button class="w-100 p-2 mt-2 resumebtn shadow">Projects</button>
                    <button class="w-100 p-2 mt-2 resumebtn shadow">Accomplishment</button>
                    <button class="w-100 p-2 mt-2 resumebtn shadow">Desired career Profile</button>
                    <button class="w-100 p-2 mt-2 resumebtn shadow">Personal Details</button>
                </div>
            </div>
            {/* <!-- 2nd part --> */}
            
            <div class="col-md-6">
                <div class="card1 card p-3 shadow">
                    <p><b class="px-2">Resume</b> (Recruiters generally do not look at profiles without resumes.)</p>
                    <hr/>
                    <div class="resumeUploadbtn">
                        <button class="w-25 resumeUploadbtn1">Upload Resume <i
                                class="fa-solid fa-upload text-white px-2"></i></button>
                    </div>
                    <p class="resumepara">Supported formates : doc,docx,rtf,pdf,upto 2mb </p>
    
                </div>
    
                <div class="card2 card p-4 mt-3 shadow">
                    <div>
                        <div class="d-flex flex-row">
                            <h5>Resume Headline</h5>
                            <div style={{marginleft: "200px"}}>
                            {" "}
                        <i
                          type="button"
                          class="material-symbols-outlined text-start"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal23" style={{marginLeft:"400px"}}
                        >
                          edit_square
                        </i>
                            </div>
                        </div>
                        <hr/>
                        <p>Software Developer currently living in Hyderabad</p>
                    </div>
    
                </div>
    
                <div class="card3 card p-4 mt-3 shadow">
                    <div>
                        <div class="d-flex flex-row">
                            <h5>Profile Summary</h5>
                            <div style={{marginleft: "auto"}}>
                            {" "}
                        <i
                          type="button"
                          class="material-symbols-outlined text-start"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal23" style={{marginLeft:"400px"}}
                        >
                          edit_square
                        </i>
                            </div>
                        </div>
                        <hr/>
                        <p>Software Developer specialist with 3+ years of experience in the management of th complete
                            design process from conceptualization to delivery. Skilled with adobe creative suite
                            (photoshop,illustrator,lightroom,aftereffects,charector Animator,adobeanimate).able to
                            stretch the boundaries of digital story telling to support brands standout. </p>
                    </div>
    
                </div>
                <div class="card4 card p-4 mt-3 shadow">
                    <div>
                        <div class="d-flex flex-row">
                            <h5>Key Skills</h5>
                            <div style={{marginleft: "auto"}}>
                            {" "}
                        <i
                          type="button"
                          class="material-symbols-outlined text-start"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal23"style={{marginLeft:"450px"}}
                        >
                          edit_square
                        </i>
                            </div>
                        </div>
                        <hr/>
                        <div class="resumegroup px-5">
                            <button class="btnresume shadow p-2 px-3 m-1 mx-3">Photoshop</button>
                            <button class="btnresume shadow p-2 px-3 m-1 mx-3">aftereffects</button>
                            <button class="btnresume shadow p-2 px-4 m-1 mx-3">Editing</button>
                            <button class="btnresume shadow p-2 px-2 m-1 mx-3">Adobe XD</button>
                            <button class="btnresume shadow p-2 px-2 m-1 mx-3">Animation</button>
                        </div>
                        <div class="resunegroup px-5 mt-2">
                            <button class="btnresume shadow p-2 px-3 m-1 mx-3">Premire Pro</button>
                            <button class="btnresume shadow p-2 px-4 m-1 mx-3">Blender</button>
                            <button class="btnresume shadow p-2 px-3 m-1 mx-3">illustrator</button>
                            <button class="btnresume shadow p-2 px-4 m-1 mx-3">Canva</button>
                            <button class="btnresume shadow p-2 px-4 m-1 mx-3">Figma</button>
                        </div>
                    </div>
    
                </div>
                <div class="card5 card p-4 mt-3 shadow">
                    <div>
                        <div class="d-flex flex-row">
                            <h5>Employment <span style={{fontsize: "small"}}>(Enter your current and previous Employment
                                    details)</span></h5>
    
                        </div>
                        <hr/>
                        <div class="d-flex flex-row">
                            <div style={{borderright: "1px solid gray"}} class="px-5">
                                <h6 class="resumeh6">Software Developer</h6>
                                <p>PerfexTechnologies </p>
                                <p>Fulltime|May 2022 to present (1 year 3 months) </p>
                                <p>1 Month Notice Period</p>
                            </div>
                            <div style={{marginleft: "auto"}} class="mt-5">
                                <b class="resumeh7 ">+ Add Employment</b>
                            </div>
                        </div>
                    </div>
    
                </div>
                <div class="card5 card p-4 mt-3 shadow">
                    <div>
                        <div class="d-flex flex-row">
                            <h5>Education <span style={{fontsize: "small"}}>(Enter your qualification details)</span></h5>
    
                        </div>
                        <hr/>
                        <div class="d-flex flex-row">
                            <div style={{borderright: "1px solid gray"}} class="px-5">
                                <p>Add class x | ADD class XII | Add graduation/Diploma</p>
                                <p>Add masters/Post graduation | Add doctorate/PhD</p>
                            </div>
                            <div style={{marginleft: "auto"}} class="mt-5">
                                <b class="resumeh7 ">+ Add Education</b>
                            </div>
                        </div>
                    </div>
    
                </div>
                <div class="card5 card p-4 mt-3 shadow">
                    <div>
                        <div class="d-flex flex-row">
                            <h5>Projects</h5>
    
                        </div>
                        <hr/>
                        <div class="d-flex flex-row">
                            <div style={{borderright: "1px solid gray"}} class="px-5">
                                <p>(Add details about projects you have done )</p>
    
                            </div>
                            <div style={{marginleft: "auto"}} class="mt-5">
                                <b class="resumeh7 ">+ Add Projects</b>
                            </div>
                        </div>
                    </div>
    
                </div>
                <div class="card p-4 mt-3 shadow">
                    <div>
                        <div class="d-flex flex-row">
                            <h5>Accomplishment</h5>
                            <div style={{marginleft: "auto"}}>
                            {" "}
                        <i
                          type="button"
                          class="material-symbols-outlined text-start"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal23"style={{marginLeft:"400px"}}
                        >
                          edit_square
                        </i>
                            </div>
                        </div>
                        <hr/>
                        <div class="d-flex flex-row">
                            <div>
                                <h6>Work Sample</h6>
                                <p>Add links to your projects(e.g. github links etc.)</p>
                            </div>
                            <div style={{marginleft: "auto"}}>
                            {" "}
                        <i
                          type="button"
                          class="material-symbols-outlined text-start"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal23"style={{marginLeft:"220px"}}
                        >
                          edit_square
                        </i>
                            </div>
                        </div>
                        <hr/>
                        <div class="d-flex flex-row">
                            <div>
                                <h6>White paper/Research publication </h6>
                                <p>Add links to your online publications</p>
                            </div>
                            <div style={{marginleft: "auto"}}>
                            {" "}
                        <i
                          type="button"
                          class="material-symbols-outlined text-start"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal23"style={{marginLeft:"290px"}}
                        >
                          edit_square
                        </i>
                            </div>
                        </div>
                        <hr/>
                        <div class="d-flex flex-row">
                            <div>
                                <h6>Presentation </h6>
                                <p>Add links to your online presentations</p>
                            </div>
                            <div style={{marginleft: "auto"}}>
                            {" "}
                        <i
                          type="button"
                          class="material-symbols-outlined text-start"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal23"style={{marginLeft:"280px"}}
                        >
                          edit_square
                        </i>
                            </div>
                        </div>
                        <hr/>
                        <div class="d-flex flex-row">
                            <div>
                                <h6>Patent </h6>
                                <p>Add deatails of patents you have filed</p>
                            </div>
                            <div style={{marginleft: "auto"}}>
                            {" "}
                        <i
                          type="button"
                          class="material-symbols-outlined text-start"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal23"style={{marginLeft:"280px"}}
                        >
                          edit_square
                        </i>
                            </div>
                        </div>
                        <hr/>
                        <div class="d-flex flex-row">
                            <div>
                                <h6>Certification</h6>
                                <p>Add details of Certifications you have achieved/completed</p>
                            </div>
                            <div style={{marginleft: "auto"}}>
                            {" "}
                        <i
                          type="button"
                          class="material-symbols-outlined text-start"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal23"style={{marginLeft:"130px"}}
                        >
                          edit_square
                        </i>
                            </div>
                        </div>
                    </div>
    
                </div>
                <div class="card4 card p-4 mt-3 shadow">
                    <div>
                        <div class="d-flex flex-row">
                            <h5>Desired career Profile</h5>
                            <div style={{marginleft: "auto"}}>
                            {" "}
                        <i
                          type="button"
                          class="material-symbols-outlined text-start"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal23"style={{marginLeft:"350px"}}
                        >
                          edit_square
                        </i>
                            </div>
                        </div>
    
    
                        <hr/>
                        <div class="d-flex flex-row">
                            <div style={{borderright: "1px solid gray"}} class="px-5">
                                <h6 class="resumeh6">Desire Industry</h6>
                                <p>IT services & conslting</p>
                                <h6 class="resumeh6">designation</h6>
                                <p>Software developer </p>
                                <h6 class="resumeh6">Desired to shift</h6>
                                <p>Day/night</p>
                            </div>
                            <div class=" px-5">
                                <h6 class="resumeh6">Prefered location</h6>
                                <p>Hyderabad</p>
                                <h6 class="resumeh6">Expected ctc</h6>
                                <p>5,00,000 - 7,00,000</p>
                                <h6 class="resumeh6">Employment type</h6>
                                <p>Full time</p>
    
                            </div>
                        </div>
                    </div>
    
                </div>
                <div class="card4 card p-4 mt-3 shadow">
                    <div>
                        <div class="d-flex flex-row">
                            <h5>Personal details</h5>
    
                        </div>
                        <hr/>
                        <div class="d-flex flex-row">
                            <div style={{borderright: "1px solid gray"}} class="px-5">
                                <h6 class="resumeh6">Date Of Birth</h6>
                                <p>06 December 1994</p>
                                <h6 class="resumeh6">Age</h6>
                                <p>25 </p>
                                <h6 class="resumeh6">Gender</h6>
                                <p>Male</p>
                            </div>
                            <div class=" px-5">
                                <h6 class="resumeh6">Marital Status</h6>
                                <p>Single</p>
                                <h6 class="resumeh6">Languages</h6>
                                <p>Telugu,Hindi,English</p>
                                <h6 class="resumeh6">Address</h6>
                                <p>201,plot 82,laxminagar colony,filmnaga<br/>hyderabad,telangana-500008</p>
    
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

export default Resume;




















  
