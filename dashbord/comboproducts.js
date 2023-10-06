import logo from  "../dashbord/pab bottom-logo (1).jpg";
import "./dashbord.css";
import { Link } from "react-router-dom";
function Comboproducts(){
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
              <Link to="/jobposting">  <button className="databasebtn1">Job Posting</button></Link>
              <Link to="/comboproducts">  <button className="databasebtn">Combo Products</button></Link>

            </div> 
       </div>
       <div class="container  d-flex flex-row ">
        
        <div class="combo col-md-3 justify-content-center">
            <h4 className="U" >3 Months Plan</h4>
            <h6 style={{textAlign:"center"}}>2499+GST</h6>
            <div className="mx-4">
                <h5 >Monthly Limit</h5>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>3000 Excel Downloads</p>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>1500 profile Views</p>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>150 SMS</p>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>10 Job Posts</p>
                <hr style={{marginRight:"80px"}}/>
                <h5 >Daily Limit</h5>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>250 Excel Downloads</p>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>1000 profile Views</p>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>50 SMS</p>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>10 Job Posts</p>
                <button class="M" >Buy Now</button>
            </div>
        </div>
        
        <div class="combo col-md-3 justify-content-center">
            <h4 className="U"  >3 Months Plan</h4>
            <h6 style={{textAlign:"center"}}  >2499+GST</h6>
            <div>
                <p  >Monthly Limit</p>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>3000 Excel Downloads</p>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>1500 profile Views</p>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>150 SMS</p>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>10 Job Posts</p>
                <hr style={{marginRight:"80px"}}/>
                <p >Daily Limit</p>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>250 Excel Downloads</p>
                <p><i class="fa-regular fa-circle-check cricle" ></i>1000 profile Views</p>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>50 SMS</p>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>10 Job Posts</p>
                <button class="M" >Buy Now</button>
            </div>
        </div>
        
        <div class="combo col-md-3 justify-content-center">
            <h4 className="U"   >3 Months Plan</h4>
            <h6 style={{textAlign:"center"}}  >2499+GST</h6>
            <div>
                <p  >Monthly Limit</p>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>3000 Excel Downloads</p>
                <p><i class="fa-regular fa-circle-check cricle" ></i>1500 profile Views</p>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>150 SMS</p>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>10 Job Posts</p>
                <hr style={{marginRight:"80px"}}/>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>Daily Limit</p>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>250 Excel Downloads</p>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>1000 profile Views</p>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>50 SMS</p>
                <p ><i class="fa-regular fa-circle-check cricle" ></i>10 Job Posts</p>
                <button class="M" >Buy Now</button>
            </div>
        </div>
    </div>
        </div>
    )
}
export default Comboproducts