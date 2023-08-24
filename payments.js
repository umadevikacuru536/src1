import './App.css'
import logo from "./pabjobs-logo.png";
import { Link } from "react-router-dom";
function Payments() {
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
            <div class="bg-container">
                <div class="d-flex flex-row">
                    <div class="col-md-1"></div>
                    <div class=" col-12 col-md-6">
                        <div class="card" style={{ borderradius: "20px",width:"40vw" }}>

                            <h1 class="heading" style={{ textalign: "center" }}>Payment Request</h1>
                            <div> 
                                <div class="mb-3 mt-3">
                                    <label for=" Name" class="form-label" id="fullname"> Name</label><br />
                                    <input type="text" class="control w-75 " id="email" style={{ padding: "10px " }}
                                        placeholder="Enter your full Name" />
                                </div>
                                <div class="mb-3">
                                    <label for="Email id" class="form-label">Email ID</label><br />
                                    <input type="text" class="control w-75" id="pwd" style={{ padding: "10px" }}
                                        placeholder="Enter your Email ID" />
                                </div>

                                <label class="form-label">moblie Number</label><br />

                                <div class="">
                                    <select style={{ width: "55px", height: "40px", borderradius: "20px",marginRight:"5px" }}>
                                        <option>+91</option>
                                    </select>
                                    <input type="text" class="control1 w-70" style={{ padding: "10px" }}
                                        placeholder="Enter your moblie number" />
                                </div>


                                <div class="mb-3 mt-3">
                                    <label for=" Name" class="form-label" id="fullname">Amount</label><br />
                                    <input type="text" class="control w-75" id="email" style={{ padding: "10px" }}
                                        placeholder="Enter amount in rupees" />
                                </div>

                                <button type="Register" class="button1" style={{ width: "450px" }}>Make Payment</button>

                            </div>
                        </div>
                    </div>

                    <div class=" col-12 col-md-5 remove">
                        <div class=" card1 d-flex flex-column">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/646/297/small_2x/e-wallet-digital-payment-online-transaction-with-woman-standing-and-holding-mobile-phone-concept-illustration-free-vector.jpg"
                                alt="pic" class="image2" style={{ height: "500px", width: "400px" }} id="img" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Payments;