import logo from  "../dashbord/pab bottom-logo (1).jpg";
import "./dashbord.css";
import { Link } from "react-router-dom";
function Buyservices() {
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
             <div class="buy">
<div className="container">
              <Link to="/buyservices">  <button className="databasebtn">Data Base</button></Link>
              <Link to="/jobposting">  <button className="databasebtn1">Job Posting</button></Link>
              <Link to="/comboproducts">  <button className="databasebtn1">Combo Products</button></Link>

            </div> 
            </div>
            <div style={{backgroundColor:"#d4cbda",marginBottom:""}}>
               
            <div class="container">
                <div className="row">
        
        <div class="cardbuy col-md-4">
            <div class="monthdaily d-flex flex-row">
                <p  class="col-6 px-5 py-2">Monthly</p>
                <p  class="col-6 px-5 py-2">Daily</p>

            </div>
            <div class=" d-flex flex-row">
                <div class="eceldata col-md-6 d-flex flex-row">
                    <p>2000 Excel Downlads<br/>1000 Profile Views<br/>100 SMS</p>
                </div>
             
                <div class="eceldata1 col-md-6 d-flex flex-row">
                    <p>250 Excel Downlads<br/>150 Profile Views<br/>30 SMS</p>
                </div>
            </div>
            <hr/>
            <button class="buybutton d-flex flex-row ">
                <p class="col-6 " style={{marginTop:"5px",borderRight: "2px solid rgb(197, 191, 191)"}}>1 Month</p>

                <p class="col-6 ">4999+</p>

            </button>
            <button class="buybutton d-flex flex-row">
                <p class="col-6 " style={{marginTop:"5px",borderRight: "2px solid rgb(197, 191, 191)"}}>3 Month</p>

                <p class="col-6 ">12999+</p>

            </button>
            <button class="buybutton d-flex flex-row " >
                <p class="col-6 " style={{marginTop:"5px",borderRight: "2px solid rgb(197, 191, 191)"}}>6 Month</p>

                <p class="col-6 ">22999+</p>

            </button>
            <button class="buybutton d-flex flex-row" >
                <p class="col-6 " style={{marginTop:"5px",borderRight: "2px solid rgb(197, 191, 191)"}}>12 Month</p>

                <p class="col-6 ">38999+</p>

            </button>
            <button className="buynow">Buy Now</button>
        </div>
        
        <div class="cardbuy col-md-4">
            <div class="monthdaily d-flex flex-row" >
                <p class="col-6 px-5">Monthly</p>
                <p class="col-6 px-5">Daily</p>

            </div>
            <div class="d-flex flex-row">
                <div class="eceldata col-md-6 d-flex flex-row">
                    <p>2000 Excel Downlads<br/>1000 Profile Views<br/>100 SMS</p>
                </div>
             
                <div class="eceldata1 col-md-6 d-flex flex-row">
                    <p>250 Excel Downlads<br/>150 Profile Views<br/>30 SMS</p>
                </div>
            </div>
            <hr/>
            <button class="buybutton d-flex flex-row ">
                <p class="col-6 " style={{marginTop:"5px",borderRight: "2px solid rgb(197, 191, 191)"}}>1 Month</p>

                <p class="col-6 ">4999+</p>

            </button>
            <button class="buybutton d-flex flex-row ">
                <p class="col-6" style={{marginTop:"5px",borderRight: "2px solid rgb(197, 191, 191)"}}>3 Month</p>

                <p class="col-6 ">12999+</p>

            </button>
            <button class="buybutton d-flex flex-row " >
                <p class="col-6 "style={{marginTop:"5px",borderRight: "2px solid rgb(197, 191, 191)"}}>6 Month</p>

                <p class="col-6">22999+</p>

            </button>
            <button class="buybutton d-flex flex-row " >
                <p class="col-6 " style={{marginTop:"5px",borderRight: "2px solid rgb(197, 191, 191)"}}>12 Month</p>

                <p class="col-6 ">38999+</p>

            </button>
            <button className="buynow">Buy Now</button>
        </div>
        </div> 
        </div>
        <div style={{marginTop: "40px"}}>
    <p style={{marginLeft: "700px"}}>Note:Select the month that you need and click on buy option</p><p style={{marginLeft: "750px"}}> Taxes are excluded in the above plane</p>
</div>
        </div>
        </div>                                     
) }
export default Buyservices;
                    
