import logo from  "../dashbord/pab bottom-logo (1).jpg";
import "./dashbord.css";
import { Link } from "react-router-dom";
function SearchCandidate(){
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
      <div className="container8">
    <div class="container">
       
        <div class="row">
            <div class="col-12">
                <h2 class="homeh2">Find your dream job here</h2>
                <p class="homepara">5 lakh+ jobs for you to explore</p>
            </div>
            <div class="col-12 homebutton">
                <button class="subhomebutton w-25 p-2"><i class="fa-solid fa-magnifying-glass p-3"></i>job Title or
                    company<i class="fa-solid fa-sort-down p-3 "></i>
                </button>
                <button class="subhomebutton w-25 p-2"><i class="fa-solid fa-location-dot p-3"></i>city,province or
                    Region<i class="fa-solid fa-sort-down p-3 "></i></button>
                <button class="subhomebutton w-25 p-2"><i class="fa-solid fa-inbox p-3"></i>Experience
                    <i class="fa-solid fa-sort-down p-3 "></i></button>
            </div>
            <div class="homebutton1">
                <button class="subbutton1">Search</button>
            </div>
        </div>
        </div>
    </div>
    <div class=" d-flex flex-row text-center m-5">
        <button class="setha px-3 py-3">
            <p className="mx-3"><i class="fa-solid fa-square-check p-3" style={{color: "#2da824"}}></i>Export All Cadidates data to execel
                <button className="excel">Excel<i class="fa-solid fa-download p-2"></i></button>
            </p>
        </button>
        <div>
            <button class="round">Years<i class="fa-solid fa-sort-down px-5 py-3"></i></button>
            <button class="round">Result Per Page:10<i class="fa-solid fa-sort-down px-4 py-2"></i></button>
        </div>
    </div>
    <div className="lela1">
    <div className="container">
        <div className="row">
    <div class="lela d-flex flex-row">
        
        <div class="srinu m-5 text-center">
            <div class="d-flex flex-row px-4 py-4">
                <input type="checkbox" className="mx-3"/>
                <h5 style={{marginleft: "20px"}}>Export Data to Excel</h5>
            </div>
            <div class="b"><i class="fa-solid fa-user kumar"></i></div>
            <h4>Sashi Kumar</h4>
            <hr style={{marginLeft:"30px",marginRight:"30px"}}/>
            <div class="d-flex flex-row m-5">
                <button class="detailsbuttons">Email</button>
                <button class="detailsbuttons">Contact</button>
                <button class="detailsbuttons">SMS</button>
            </div>
        </div>
        <div class="praveen d-flex flex-row">
            <div class="">
                <h5>Key Skills</h5>
                    <p className="keyskills">Photoshop,Aftereffects,Adobe XD,<br/>
                        Primire Pro blender,Illustrator....More</p>
                    <h5>Highest Graduation</h5>
                    <p className="keyskills">Bachelor of arts in Graphic Design</p>
                    <h5> Current Location</h5>
                    <p className="keyskills">Hyderabad</p>
                    <h5>Age</h5>
                    <p className="keyskills">----Years</p>
                    <h5>Date Of Birth</h5>
                    <p className="keyskills">06 December 1969</p>
            </div>
            <div class="m-2">
                <h5>Experinece</h5>
                    <p className="keyskills">3 years</p>
                    <h5>Employement Type</h5>
                    <p className="keyskills">  Full Time ,Permenent</p>
                    <h5>Preferred Location</h5>
                    <p className="keyskills">Hyderabad ,pune ,
                        <br/>Delhi, Chennai
                    </p>
                    <h5>Gender</h5>
                    <p className="keyskills">Male</p>
                    <h5>Address</h5>
                    <p className="keyskills">201,plot 69 ,Lakshmi Nagar,
                        <br/> Film nagar,Hyderabad
                    </p>
            </div>
            <div class="m-2">
                <h5>designation</h5>
                <p className="keyskills">UI & Ux Designer</p>
                <h5>Department</h5>
                <p className="keyskills">UX, Design & Architecture</p>
                <h5>Expected CTC</h5>
                <p className="keyskills">5,00,000-8,00,000</p>
                <h5>Marital Status</h5>
                <p className="keyskills">Single</p>
                <h5>Languages Known</h5>
                <p className="keyskills">Telugu,Hindi,English</p>
            </div>
            <div class="m-2">
                <h5>Desired Industry</h5>
                <p className="keyskills">IT Software</p>
                <h5>Prefered Shift</h5>
                <p className="keyskills">Day/Night</p>
            </div>
        </div>
    </div>
    <div class="lela d-flex flex-row">
        <div class="srinu m-5 text-center">
            <div class="d-flex flex-row px-4 py-4">
            <input type="checkbox" className="mx-3"/>
                <h5 style={{marginleft: "20px"}}>Export Data to Excel</h5>
            </div>
            <div class="b"><i class="fa-solid fa-user kumar"></i></div>
            <h4>Ashok Kumar</h4>
            <hr style={{marginLeft:"30px",marginRight:"30px"}}/>

            <div class="d-flex flex-row m-5">
                <button class="detailsbuttons">Email</button>
                <button class="detailsbuttons">Contact</button>
                <button class="detailsbuttons">SMS</button>
            </div>
        </div>
        <div class="praveen d-flex flex-row">
            <div class="">
                <h5>Key Skills</h5>
                    <p className="keyskills">Photoshop,Aftereffects,Adobe XD,<br/>
                        Primire Pro blender,Illustrator....More</p>
                    <h5>Highest Graduation</h5>
                    <p className="keyskills">Bachelor of arts in Graphic Design</p>
                    <h5> Current Location</h5>
                    <p className="keyskills">Hyderabad</p>
                    <h5>Age</h5>
                    <p className="keyskills">----Years</p>
                    <h5>Date Of Birth</h5>
                    <p className="keyskills">06 December 1969</p>
            </div>
            <div class="m-2">
                <h5>Experinece</h5>
                    <p className="keyskills">3 years</p>
                    <h5>Employement Type</h5>
                    <p className="keyskills">  Full Time ,Permenent</p>
                    <h5>Preferred Location</h5>
                    <p className="keyskills">Hyderabad ,pune ,
                        <br/>Delhi, Chennai
                    </p>
                    <h5>Gender</h5>
                    <p className="keyskills">Male</p>
                    <h5>Address</h5>
                    <p className="keyskills">201,plot 69 ,Lakshmi Nagar,
                        <br/> Film nagar,Hyderabad
                    </p>
            </div>
            <div class="m-2">
                <h5>designation</h5>
                <p className="keyskills">UI & Ux Designer</p>
                <h5>Department</h5>
                <p className="keyskills">UX, Design & Architecture</p>
                <h5>Expected CTC</h5>
                <p className="keyskills">5,00,000-8,00,000</p>
                <h5>Marital Status</h5>
                <p className="keyskills">Single</p>
                <h5>Languages Known</h5>
                <p className="keyskills">Telugu,Hindi,English</p>
            </div>
            <div class="m-2">
                <h5>Desired Industry</h5>
                <p className="keyskills">IT Software</p>
                <h5>Prefered Shift</h5>
                <p className="keyskills">Day/Night</p>
            </div>
        </div>
    </div>
    <div class="lela d-flex flex-row">
        <div class="srinu m-5 text-center">
            <div class="d-flex flex-row px-4 py-4">
            <input type="checkbox" className="mx-3"/>
                <h5 style={{marginleft: "20px"}}>Export Data to Excel</h5>
            </div>
            <div class="b"><i class="fa-solid fa-user kumar"></i></div>
            <h4>Ganesh</h4>
            <hr style={{marginLeft:"30px",marginRight:"30px"}}/>

            <div class="d-flex flex-row m-5">
                <button class="detailsbuttons">Email</button>
                <button class="detailsbuttons">Contact</button>
                <button class="detailsbuttons">SMS</button>
            </div>
        </div>
        <div class="praveen d-flex flex-row">
            <div class="">
                <h5>Key Skills</h5>
                    <p className="keyskills">Photoshop,Aftereffects,Adobe XD,<br/>
                        Primire Pro blender,Illustrator....More</p>
                    <h5>Highest Graduation</h5>
                    <p className="keyskills">Bachelor of arts in Graphic Design</p>
                    <h5> Current Location</h5>
                    <p className="keyskills">Hyderabad</p>
                    <h5>Age</h5>
                    <p className="keyskills">----Years</p>
                    <h5>Date Of Birth</h5>
                    <p className="keyskills">06 December 1969</p>
            </div>
            <div class="m-2">
                <h5>Experinece</h5>
                    <p className="keyskills">3 years</p>
                    <h5>Employement Type</h5>
                    <p className="keyskills">  Full Time ,Permenent</p>
                    <h5>Preferred Location</h5>
                    <p className="keyskills">Hyderabad ,pune ,
                        <br/>Delhi, Chennai
                    </p>
                    <h5>Gender</h5>
                    <p className="keyskills">Male</p>
                    <h5>Address</h5>
                    <p className="keyskills">201,plot 69 ,Lakshmi Nagar,
                        <br/> Film nagar,Hyderabad
                    </p>
            </div>
            <div class="m-2">
                <h5>designation</h5>
                <p className="keyskills">UI & Ux Designer</p>
                <h5>Department</h5>
                <p className="keyskills">UX, Design & Architecture</p>
                <h5>Expected CTC</h5>
                <p className="keyskills">5,00,000-8,00,000</p>
                <h5>Marital Status</h5>
                <p className="keyskills">Single</p>
                <h5>Languages Known</h5>
                <p className="keyskills">Telugu,Hindi,English</p>
            </div>
            <div class="m-2">
                <h5>Desired Industry</h5>
                <p className="keyskills">IT Software</p>
                <h5>Prefered Shift</h5>
                <p className="keyskills">Day/Night</p>
            </div>
        </div>
    </div>

    <div class="lela d-flex flex-row">
        <div class="srinu m-5 text-center">
            <div class="d-flex flex-row px-4 py-4">
            <input type="checkbox" className="mx-3"/>
                <h5 style={{marginleft: "20px"}}>Export Data to Excel</h5>
            </div>
            <div class="b"><i class="fa-solid fa-user kumar"></i></div>
            <h4>Kalyan</h4>
            <hr style={{marginLeft:"30px",marginRight:"30px"}}/>

            <div class="d-flex flex-row m-5">
                <button class="detailsbuttons">Email</button>
                <button class="detailsbuttons">Contact</button>
                <button class="detailsbuttons">SMS</button>
            </div>
        </div>
        <div class="praveen d-flex flex-row">
            <div class="">
                <h5>Key Skills</h5>
                    <p className="keyskills">Photoshop,Aftereffects,Adobe XD,<br/>
                        Primire Pro blender,Illustrator....More</p>
                    <h5>Highest Graduation</h5>
                    <p className="keyskills">Bachelor of arts in Graphic Design</p>
                    <h5> Current Location</h5>
                    <p className="keyskills">Hyderabad</p>
                    <h5>Age</h5>
                    <p className="keyskills">----Years</p>
                    <h5>Date Of Birth</h5>
                    <p className="keyskills">06 December 1969</p>
            </div>
            <div class="m-2">
                <h5>Experinece</h5>
                    <p className="keyskills">3 years</p>
                    <h5>Employement Type</h5>
                    <p className="keyskills">  Full Time ,Permenent</p>
                    <h5>Preferred Location</h5>
                    <p className="keyskills">Hyderabad ,pune ,
                        <br/>Delhi, Chennai
                    </p>
                    <h5>Gender</h5>
                    <p className="keyskills">Male</p>
                    <h5>Address</h5>
                    <p className="keyskills">201,plot 69 ,Lakshmi Nagar,
                        <br/> Film nagar,Hyderabad
                    </p>
            </div>
            <div class="m-2">
                <h5>designation</h5>
                <p className="keyskills">UI & Ux Designer</p>
                <h5>Department</h5>
                <p className="keyskills">UX, Design & Architecture</p>
                <h5>Expected CTC</h5>
                <p className="keyskills">5,00,000-8,00,000</p>
                <h5>Marital Status</h5>
                <p className="keyskills">Single</p>
                <h5>Languages Known</h5>
                <p className="keyskills">Telugu,Hindi,English</p>
            </div>
            <div class="m-2">
                <h5>Desired Industry</h5>
                <p className="keyskills">IT Software</p>
                <h5>Prefered Shift</h5>
                <p className="keyskills">Day/Night</p>
            </div>
        </div>
    </div>

    <div class="lela d-flex flex-row">
        <div class="srinu m-5 text-center">
            <div class="d-flex flex-row px-4 py-4">
            <input type="checkbox" className="mx-3"/>
                <h5 style={{marginleft: "20px"}}>Export Data to Excel</h5>
            </div>
            <div class="b"><i class="fa-solid fa-user kumar"></i></div>
            <h4>Ajay Kumar</h4>
                       <hr style={{marginLeft:"30px",marginRight:"30px"}}/>

            <div class="d-flex flex-row m-5">
                <button class="detailsbuttons">Email</button>
                <button class="detailsbuttons">Contact</button>
                <button class="detailsbuttons">SMS</button>
            </div>
        </div>
        <div class="praveen d-flex flex-row">
            <div class="">
                <h5>Key Skills</h5>
                    <p className="keyskills">Photoshop,Aftereffects,Adobe XD,<br/>
                        Primire Pro blender,Illustrator....More</p>
                    <h5>Highest Graduation</h5>
                    <p className="keyskills">Bachelor of arts in Graphic Design</p>
                    <h5> Current Location</h5>
                    <p className="keyskills">Hyderabad</p>
                    <h5>Age</h5>
                    <p className="keyskills">----Years</p>
                    <h5>Date Of Birth</h5>
                    <p className="keyskills">06 December 1969</p>
            </div>
            <div class="m-2">
                <h5>Experinece</h5>
                    <p className="keyskills">3 years</p>
                    <h5>Employement Type</h5>
                    <p className="keyskills">  Full Time ,Permenent</p>
                    <h5>Preferred Location</h5>
                    <p className="keyskills">Hyderabad ,pune ,
                        <br/>Delhi, Chennai
                    </p>
                    <h5>Gender</h5>
                    <p className="keyskills">Male</p>
                    <h5>Address</h5>
                    <p className="keyskills">201,plot 69 ,Lakshmi Nagar,
                        <br/> Film nagar,Hyderabad
                    </p>
            </div>
            <div class="m-2">
                <h5>designation</h5>
                <p className="keyskills">UI & Ux Designer</p>
                <h5>Department</h5>
                <p className="keyskills">UX, Design & Architecture</p>
                <h5>Expected CTC</h5>
                <p className="keyskills">5,00,000-8,00,000</p>
                <h5>Marital Status</h5>
                <p className="keyskills">Single</p>
                <h5>Languages Known</h5>
                <p className="keyskills">Telugu,Hindi,English</p>
            </div>
            <div class="m-2">
                <h5>Desired Industry</h5>
                <p className="keyskills">IT Software</p>
                <h5>Prefered Shift</h5>
                <p className="keyskills">Day/Night</p>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
        </div>
    )
    }
    export default SearchCandidate