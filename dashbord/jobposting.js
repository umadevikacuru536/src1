import logo from  "../dashbord/pab bottom-logo (1).jpg";
import "./dashbord.css";
import { Link } from "react-router-dom";
function Jobposting(){
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
      <div class="buy">
<div className="container">
              <Link to="/buyservices">  <button className="databasebtn1">Data Base</button></Link>
              <Link to="/jobposting">  <button className="databasebtn">Job Posting</button></Link>
              <Link to="/comboproducts">  <button className="databasebtn1">Combo Products</button></Link>

            </div> 
            </div>
        <div style={{backgroundColor:"#d4cbda"}}>
        <div class="container  d-flex flex-row " >
       
        <div class="jobposting col-md-2 justify-content-center">
            <h5 class="freejob">Free Job Posting</h5>
            <div  class="o">
            <h5 class="px-5 py-2" ><i class="fa-solid fa-indian-rupee-sign rupee"></i>0</h5>

                <p class="px-5 py-2" >MONTH</p>
            </div>
            <p class="freedata">Maximum 20 unlocks next unlock 50 rupees per unlock or convert to premium</p>
            <button  class="getbuy">Get Started</button>
        </div>
        <div class="jobposting  col-md-2 justify-content-center">
            <h5 class="freejob">Premium Job Posting</h5>
            <div  class="o">
            <h5 class="px-5 py-2" ><i class="fa-solid fa-indian-rupee-sign rupee"></i>799+</h5>

                <p class="px-5 py-2" >MONTH</p>
            </div>
            <p class="freedata" >30 days live in site and untitled applications</p>
            <button  class="getbuy">Buy Now</button>
        </div>
        
        <div class="jobposting  col-md-2 justify-content-center">
            <h5 class="freejob">Express Job Posting</h5>
            <div  class="o">
            <h5 class="px-5 py-2" ><i class="fa-solid fa-indian-rupee-sign rupee"></i>1499+</h5>

                <p class="px-5 py-2" >MONTH</p>
            </div>
            <p class="freedata">150 direct relevant profiles</p>
            <button  class="getbuy">Buy Now</button>
        </div>
        
        <div class="jobposting  col-md-2 justify-content-center">
            <h5 class="freejob">Express premium Job Posting</h5>
            <div  class="o">
                <h5 class="px-5 py-2" ><i class="fa-solid fa-indian-rupee-sign rupee"></i>2299+</h5>
                <p class="px-5 py-2" >MONTH</p>
            </div>
            <p class="freedata">150 candidates + 30days live in site with unlimited applications</p>
            <button class="getbuy">Buy Now</button>
        </div>

      
    </div>
    <p style={{marginLeft:"80vh"}}>Note:Taxes are excluded in the above showing plans</p>
    </div>
    </div>
)
}
export default Jobposting;