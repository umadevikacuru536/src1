import logo from "./pabjobs-logo.png";
import "./App.css";
import logo2 from "./Wipro_Primary_Logo_Color_RGB.svg.png";
import { Link } from "react-router-dom";

function Home1() {
  return (
    <div className="App">
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
              <li class="nav-item1">
                <i class="fa-solid fa-bell bellicon"></i>
              </li>
              <li class="nav-item1">
              <Link to="/profile">
                  <i class=" user fa-sharp fa-solid fa-circle-user  dropdown-toggle "></i></Link>
               
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container8">
        <div class="row">
          <div class="col-12">
            <h4 class="homeh2" style={{ color: "#2c0264",marginTop:"20px" }}>
              Find your dream job here
            </h4>
            <p class="homepara">5 lakh+ jobs for you to explore</p>
          </div>
          <div class="col-12 homebutton">
            <button class=" subhomebutton shadow w-25">
              <i class="fa-solid fa-magnifying-glass p-3 "></i>job Title or
              company<i class="fa-solid fa-sort-down p-3 "></i>
            </button>
            <button class=" subhomebutton shadow w-25">
              <i class="fa-solid fa-location-dot p-3"></i>city,province or
              Region<i class="fa-solid fa-sort-down p-3 "></i>
            </button>
          </div>
          <div class="homebutton1">
            <button
              class="subbutton1"
              style={{
                width: "100px",
                margintop: "30px",
                backgroundcolor: "#2c0264",
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div class="container9 mb-5">
                <div class="row">
                    <div class="col-12 col-md-2">
                    </div>
                    <div class="col-12 col-md-10">
                        <h class="topsearch">Top Searches</h>
                        <div class="card21 shadow p-2 m-3">
                            <div class="btngroup1 p-2 m-2">
                                <button class="btn1 p-2 m-1" style={{width: "100px"}}>Banking</button>
                                <button class="btn1 p-2 m-1"style={{width: "100px"}}>Sales</button>
                                <button class="btn1 p-2 m-1" style={{width: "140px"}}>HR Executive</button>
                                <button class="btn1 p-2 m-1" style={{width: "150px"}}>Manual Testing</button>
                                <button class="btn1 p-2 m-1" style={{width: "100px"}}>IT</button>
                                <button class="btn1 p-2 m-1" style={{width: "160px"}}>Devops Engineer</button>
                                <button class="btn1 p-2 m-1"style={{width: "160px"}}>Digital Marketing</button>
                            </div>
                            <div class="btngroup2 p-2 m-2">
                                <button class="btn1 p-2 m-1" style={{width: "160px"}}>Graphic Desiging</button>
                                <button class="btn1 p-2 m-1" style={{width: "120px"}}>Data Analyst</button>
                                <button class="btn1 p-2 m-1" style={{width: "120px"}}>Accounting</button>
                                <button class="btn1 p-2 m-1" style={{width: "120px"}}>Accounting</button>
                                <button class="btn1 p-2 m-1" style={{width: "180px"}}>Software Engineer</button>
                                <button class="btn1 p-2 m-1" style={{width: "120px"}}>Freshers</button>
                                <p style={{marginLeft:"900px", color: "#2c0264", fontsize: "10px" }}>more..</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-1">

                    </div>
                </div>
            </div>
      <div class="container-fluid container10 mb-5">
        <div class="row">
          <div class="col-12 col-md-1"></div>

          <div class="col-12 col-md-10  text-center search">
            <h6 class="searchlocate text-start" style={{marginLeft:"300px"}}>Search By Location</h6>
            <div className="ram">
            <button class="imgbutton p-2 m-2">
              <img
                src="https://www.indembassybern.gov.in/docs/1588678396_5.jpg"
                alt=""
                width="80px"
                height="50px"
                className="img21"
              />
              Hyderabad
            </button>
            <button class="imgbutton p-2 m-2">
              <img
                src="https://www.indembassybern.gov.in/docs/1588678396_5.jpg"
                alt=""
                width="80px"
                height="50px"
                className="img21"
              />
              Mumbai
            </button>
            <button class="imgbutton p-2 m-2">
              <img
                src="https://www.indembassybern.gov.in/docs/1588678396_5.jpg"
                alt=""
                width="80px"
                height="50px"
                className="img21"
              />
              Chennai
            </button>
            <button class="imgbutton p-2 m-2">
              <img
                src="https://www.indembassybern.gov.in/docs/1588678396_5.jpg"
                alt=""
                width="80px"
                height="50px"
                className="img21"
              />
              Pune
            </button>
            <button class="imgbutton p-2 m-2">
              <img
                src="https://www.indembassybern.gov.in/docs/1588678396_5.jpg"
                alt=""
                width="80px"
                height="50px"
                className="img21"
              />
              Bengaluru
            </button>
            <button class="imgbutton p-2 m-2">
              <img
                src="https://www.indembassybern.gov.in/docs/1588678396_5.jpg"
                alt=""
                width="80px"
                height="50px"
                className="img21"
              />
              Delhi
            </button>
            </div>
            <div className="col-12 col-md-11"></div>
            <div className="col-12 col-md-12 my-5">
            <p style={{ marginLeft:"900px", color: "#2c0264", fontsize: "10px" }}>
              View All Functional Cities
            </p></div>
          </div>
        
        </div>
      </div>

      <div class="container">
        <div class="row ">
          
          <div class="col-md-10">
            <div class="d-flex flex-column">
              <div>
                <h5 class="indus">Top Companies By Category</h5>
              </div>

              <div class="d-flex flex-row row ">
                <div
                  class="jobCard shadow col-md-2"
                  style={{ width: "220px",marginLeft:"50px",marginRight:"20px" }}
                >
                  <p>MNC's </p>
                  <p>1.5k jobs availabe</p>
                  <div class="d-flex flex-row">
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZAOLqO0ZPYOoXfNqSC-5gXklPGJwr8visCTunDV0QZmfqfm0_Lk6qOifnfmEo46G02Uk&usqp=CAU"
                        class="logoCard"
                        alt=""
                        style={{ width: "40px", padding: "5px" }}
                      />
                    </div>
                    <div>
                      <img
                        src={logo2}
                        class="logoCard"
                        alt=""
                        style={{ width: "40px", padding: "5px" }}
                      />
                    </div>
                    <div>
                      <img
                        src="https://w7.pngwing.com/pngs/443/269/png-transparent-logo-brand-fedex-product-desktop-hermes-staff-text-orange-logo.png"
                        class="logoCard"
                        alt=""
                        style={{ width: "40px", padding: "5px" }}
                      />
                    </div>
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0eI_MIAENiYLJlj05dGXUhgxt14UbTy7eHIc5kvUGw&s"
                        class="logoCard"
                        alt=""
                        style={{ width: "40px" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="jobCard shadow   mx-3  col-md-2"
                  style={{ width: "220px",marginLeft:"30px" }}
                >
                  <p>MNC's </p>
                  <p>1.5k jobs availabe</p>
                  <div class="d-flex flex-row">
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZAOLqO0ZPYOoXfNqSC-5gXklPGJwr8visCTunDV0QZmfqfm0_Lk6qOifnfmEo46G02Uk&usqp=CAU"
                        class="logoCard"
                        alt=""
                        style={{ width: "40px", padding: "5px" }}                      />
                    </div>
                    <div>
                      <img
                        src={logo2}
                        class="logoCard"
                        alt=""
                        style={{ width: "40px", padding: "5px" }}                      />
                    </div>
                    <div>
                      <img
                        src="https://w7.pngwing.com/pngs/443/269/png-transparent-logo-brand-fedex-product-desktop-hermes-staff-text-orange-logo.png"
                        class="logoCard"
                        alt=""
                        style={{ width: "40px", padding: "5px" }}                      />
                    </div>
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0eI_MIAENiYLJlj05dGXUhgxt14UbTy7eHIc5kvUGw&s"
                        class="logoCard"
                        alt=""
                        style={{ width: "40px" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="jobCard shadow  col-md-2"
                  style={{ width: "220px",marginLeft:"50px" }}                >
                  <p>MNC's </p>
                  <p>1.5k jobs availabe</p>
                  <div class="d-flex flex-row">
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZAOLqO0ZPYOoXfNqSC-5gXklPGJwr8visCTunDV0QZmfqfm0_Lk6qOifnfmEo46G02Uk&usqp=CAU"
                        class="logoCard"
                        alt=""
                        style={{ width: "40px", padding: "5px" }}                      />
                    </div>
                    <div>
                      <img
                        src={logo2}
                        class="logoCard"
                        alt=""
                        style={{ width: "40px", padding: "5px" }}                      />
                    </div>
                    <div>
                      <img
                        src="https://w7.pngwing.com/pngs/443/269/png-transparent-logo-brand-fedex-product-desktop-hermes-staff-text-orange-logo.png"
                        class="logoCard"
                        alt=""
                        style={{ width: "40px", padding: "5px" }}                      />
                    </div>
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0eI_MIAENiYLJlj05dGXUhgxt14UbTy7eHIc5kvUGw&s"
                        class="logoCard"
                        alt=""
                        style={{ width: "40px" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="jobCard shadow  col-md-2 "
                  style={{ width: "220px",marginLeft:"50px" }}
                >
                  <p>MNC's </p>
                  <p>1.5k jobs availabe</p>
                  <div class="d-flex flex-row">
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZAOLqO0ZPYOoXfNqSC-5gXklPGJwr8visCTunDV0QZmfqfm0_Lk6qOifnfmEo46G02Uk&usqp=CAU"
                        class="logoCard"
                        alt=""
                        style={{ width: "40px", padding: "5px" }}                      />
                    </div>
                    <div>
                      <img
                        src={logo2}
                        class="logoCard"
                        alt=""
style={{ width: "40px", padding: "5px" }}                      />
                    </div>
                    <div>
                      <img
                        src="https://w7.pngwing.com/pngs/443/269/png-transparent-logo-brand-fedex-product-desktop-hermes-staff-text-orange-logo.png"
                        class="logoCard"
                        alt=""
                        style={{ width: "30px", padding: "5px" }}
                      />
                    </div>
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0eI_MIAENiYLJlj05dGXUhgxt14UbTy7eHIc5kvUGw&s"
                        class="logoCard"
                        alt=""
                        style={{ width: "20px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row  m-2">
                <div class="col-10"></div>
                <div class="col-2">
                  <a href="#" class="textContent">
                    <i class="fa-solid fa-arrow-right-long"></i> View All
                    locations
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-1"></div>
        </div>
      </div>
      {/* <div class="container">
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-12 div">
            <div class="container skills m-4">
              <div class="row d-flex flex-row">
                <div class="col-md-4">
                  <img
                    src="https://www.jobsoid.com/wp-content/uploads/2022/01/21-Fun-Ways-to-Boost-Employee-Morale-blog-640x428.jpg"
                    class="joblogo"
                  />
                </div>
                <div class="col-md-7 d-flex flex-column">
                  <div>
                    <h3 class="skillHead p-2">SELL YOUR SKILLS</h3>
                  </div>
                  <div>
                    <p class="skillPara p-2" style={{ color: "white" }}>
                      what if you could use your skill and talent to earn money?
                      So that you can live the life you love?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div> */}
        <div class="container">
        <div class="row">
          {/* <div class="col-md-1"></div> */}
          <div class="col-md-12">
            <div class="container skills div m-4">
              <div class="row d-flex flex-row">
                <div class="col-md-4 mt-3">
                  <img
                    src="https://www.jobsoid.com/wp-content/uploads/2022/01/21-Fun-Ways-to-Boost-Employee-Morale-blog-640x428.jpg"
                    class="joblogo"
                  />
                </div>
                <div class="col-md-8 d-flex flex-column">
                  <div>
                  <h3 class="skillHead p-2">SELL YOUR SKILLS</h3>
                  </div>
                  <div>
                  <p class="skillPara p-2" style={{ color: "white" }}>
                      what if you could use your skill and talent to earn money?
                      So that you can live the life you love?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="col-md-1"></div> */}
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
        <h3 class="indus">Featured Jobs By Companies</h3>

        <div className="col-12 col-md-1"></div>
          <div class="col-md-10">
            <div class="d-flex flex-column">

              
 <marquee behavior="scroll" scrollamount="4" direction="left" class="m-2">
                                    <div class="logo">
                                        <img src="https://w7.pngwing.com/pngs/326/725/png-transparent-harman-international-industries-industry-harman-kardon-harman-professional-solutions-samsung-electronics-samsung-blue-text-logo-thumbnail.png" class="w-75" alt="Company 1"/>
                                    </div>
                                    <div class="logo">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1280px-Tata_Consultancy_Services_Logo.svg.png" class="w-75" alt="Company 2"/>
                                    </div>
                                    <div class="logo">
                                        <img src="https://cdn.imgbin.com/15/20/23/imgbin-capgemini-logo-business-insuretech-connect-cfo-rising-europe-summit-others-capgemini-logo-Yy2qm7xHfwk9vBN3cYREqKiKQ.jpg" class="w-75" alt="Company 3"/>
                                    </div>
                                    <div class="logo">
                                        <img src="https://w7.pngwing.com/pngs/443/269/png-transparent-logo-brand-fedex-product-desktop-hermes-staff-text-orange-logo.png" class="w-75" alt="Company6"/>
                                    </div>
                                    <div class="logo">
                                        <img src="https://w7.pngwing.com/pngs/34/977/png-transparent-infosys-bpm-mangalore-bangalore-business-business-blue-text-trademark-thumbnail.png" class="w-75" alt="Company5"/>
                                    </div>
                                    <div class="logo">
                                        <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01104836/1751.png" class="w-75" alt="Company 1"/>
                                    </div>
                                    <div class="logo">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3_IcIgH4PhdhUyxyk2rzStvlMSWzgNQJLwg&usqp=CAU" class="w-75" alt="Company 2"/>
                                    </div>
                                  
                                    <div class="logo">
                                        <img src="https://w7.pngwing.com/pngs/326/725/png-transparent-harman-international-industries-industry-harman-kardon-harman-professional-solutions-samsung-electronics-samsung-blue-text-logo-thumbnail.png" class="w-75" alt="Company6"/>
                                    </div>
                                    <div class="logo">
                                        <img src="https://media.licdn.com/dms/image/C560BAQEAOMY1IT0VIg/company-logo_200_200/0/1614081825631?e=2147483647&v=beta&t=o7kSEmSfcdH_gkLD0kAsGxX1fnZ2Fj9z8Skybb3na78" class="w-75" alt="Company5"/>
                                    </div>
                                    <div class="logo">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABO1BMVEX////+/v7//f/+/f///f5PgO31wynhFzsjv1pPgOtMge/iFjkavlVfxYb+/vxPf+8AtkmDo+9Beu+8x/BFfOX1wSvt8vn0xSpMguvhAC////rg
                                        ACvyvADiFzab167jFTvp7PbWABU9d+T9/O3dAB/r8PjfACuSq+vYAB/46u07dOn2vgDI0/DS2/OcuepxluNbieaqw/Gv2rySr+0Asj53mOqGpN6+z/RmjNo5c+Tb5vXL2u7x+/o6cvGht+NrkOVOhuitwuPszM3lhZLZK0LhdoPqt7/44qTyz2T3xlH33Iz589fbVV7sprD27bnWKUPUPVbbaXjtxDjajpjz19rvvsjcQlDZAADrznH76sHfYXLsrrHxyFeMsuPVZXr53pTaV2/dgoj78Obz4a349M/pmqHoz82B0JfeiJZGEpESAAAOOklEQVR4nO2beVvbSBKHS7KMV/ZMayxs43OxhTG2MDZsNmRkzpBACISQyUAmx8yQzIRdvv8n2KpuyafMEY6FPPX7Iw9gWa1XVV2XFAAWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVisIWnfu5jw4YsJH76Y8OGLCR++mPDhiwkfvpjw4YsJH76Y8OHrsoQPd+JxiauWcJnZcjmjgcg/OMwLLtgwACILrfZmKpVyUuZicqkjQBN3c2391/Htc7NzvyPQfgtzKdeJmlnTjMaj0ajtLrZW795fjX/9U+obFj6fEJqLriXxTPUPKm67jzL5OzYj/PjTD6h/3zAhlNuubaLhzCGlvCfibs0IP/7wD9RPoF/9q+M+MDSYdOKWFe2qC5g1s87j1TuNrbdAaGhi2c6acSsu6Szbdl0bfwn81Up17tKMN0+o50XbQRAynWV72XZr8smTydZG1rGzktIyFx+2DYX42TYVoePNobkExeq8iKy0HStLSt1pRL15QnhsyS0XtbyWIPnJCP8tL6+h95oZwPx/vcu+ymXeNCGsuyqo2BuzIAn7PoNmyozO0heNu9KNE0LHUbvNnRN5MUSIWbK8WBYQuTvpPULjRggFOFmZ391l0IwRQjIjrvmQCfPrjnLRJH6qhxBqWiSi/X8Ib8RLQUvFZXm2GdHx9GHfEvod8g0SXjmAhxE+lYnCdDtg4NnDAuY5hMbtEho3QrhIpZoZTYKgyw0NbuddjEwi598BdPtz7oSuDS0xfh9eonQcPQA6a1HLssiEV/NGI0JJ02jIXi4UUacj8jMzM+MOiOj4iVhdpfQb6d5c3CmjhDJDQ6MRuahtDCFct4kwvgFX22+4ztaz5xVSbHunEYKgwcyL3SJqvvhyb1+MHqCLfBPbUdf1Nuc66EGznTLJCLMhwNYXuVr91UHjPMYQwp+xo0AtobddgRCMg+fVXCKGSpQK1dKzxlA+MWB/
                                        +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
                                        FasG/bmqJ1RWMEG5V5aCkcuAj4VXt1Eqx6udwM44jxMrG8ocKttee7NBjexCdyWXP9p/pYyPgP8/AFn96WsbuM10Nb3ZipRjlCuw3hIQOGvy3X9UB+++VBSew35DJs6kelZheSw1CtXXHX36kPyQj0qCk+ktDnayxLYvxHJrxKoTde4j7zbbdNddxXHqU3/0bdjoBIfZPKknlKh9PD063sVqUxVTpOVqTPBe+Bi3w/MTeyYu9t2pj4q97IAmpzJAtsGl7ydbSetKzs9FxhA1sr2mEkKu8+3J6+uubimrAY5XjyxOqvbgpb6M/L1FDEzkbwp+ycsoRPJPCXZcLcnAulyupcI5h
                                        5giXVI+Q/57vTdjIfFP+zhSqoI/o2gbNaWjj2ZZNbUswcRshxG6mUvKVq6nlKD3WD67gpeq6xR9rlnTI7vRLjootquieUtvRO9Q4rMUGRBasH2G8858/9iN2Nb/bK7RFfsPxlwjealGvuowSUmBRgME0kRasnA7XTBcSoveVN9wQQovm0Rhg+x5LAfxZTQwSFt7JGY1PKOBDujgMeIKhtZcdxDJFtx6hO/fICifU4D+lwiBhjbo346qE2O/DAu6IvreGsJuwvccLIm9QTOwdiOHz+BC3R1BQYcF4ivuU1lPpA1165n2xjzFdfEmTxB4gxsSFTdvyCeOW14JkQGgMvvWFhza2a7L1VfOFXAGjDi0W8mrBRQ+nDCgvtddcWy5Nrw21l8pqWtF/FJ0cI+irSr2A+7BWqBxiBs73alQpXZs5maJZqZyY7n6gS9IHBOLJBq4lF5orQ5cQ6+B//leqW2RjBP1Sq1QLqGql9uWIWmd6CqKP6MLHb4Jq23Jzab3Vai01qVAVo8+9lW9g1tzaOTs7O9hqUGrHYwZ9hlLJ/ocXe3snf+8LkCXcyOVAZOXp+vrSCrVDihBbHHpspSSM7nKUJo4Pzs5Od45kYlQFyTcQoh9hQw/+KzWGHpFr+Jl7UFpwHSpra6PH6EZwSER51Mj1GCqjkm/r6lGtvQS91wakF2r+qbrchnYdQuEvLO1GP11O5xzpo/T9HNgP+j8yRN7LIqK9MtLBqcM0Ger0wdNem/CSfFcnRC9pbmCOjQQfoZc3rWwcK+PZkVGD+krkhgn9ZW+JEDLrmxheOnmt+1FetOVYPwojTzEDwsjoab+ZUF3T5QHHrhcuY8VLUTG/mfGfx1EpNClLVasFF3z5Al2ekCLJbRHqkJJvYUU3y/m8XEzAU0e+1ePN3iHhVXTVy2g6m2ou0sqoLibp0RQhGk+K0Ah5G4S3K1h2TGlG232cTCY3Pf+JvpOh/vtaZ74nhAa0LUmYVc+61X8NiK415WtL1znzfSHE4nqj21TIl8nRhnF3CWun74WQHNVVjhoQWm7Tfzp0rdPeH0IDOotrlv8/V7K4IZOroIvviRA7CLGwvOi5nuu6zmJrFmTBon0nsVRXz30FaOWVlZUFmnyJoH67nu4ZoazEZLsQ6ZWK19P9IwyqTfrTd0Z4S2JCJrz/YkImvP9iwvFvADwUhb+ezmKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8Vi3Wf9DxjU7EFPsvRMAAAAAElFTkSuQmCC" class="w-75" alt="Company 2"/>
                                    </div>
                                    <div class="logo">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_8BHByJknwHFf30cOiTwSYDjN9HCOet5hg&usqp=CAU" class="w-75" alt="Company 3"/>
                                    </div>
                                    <div class="logo">
                                        <img src="https://w7.pngwing.com/pngs/398/106/png-transparent-tata-hd-logo-thumbnail.png" class="w-75" alt="Company6"/>
                                    </div>
                                    <div class="logo">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDcKZ2Hxh7oAWlVn9bm7bKgxchp2KrLeAfA&usqp=CAU" class="w-75" alt="Company5"/>
                                    </div>




                                </marquee>
   <div className="col-12 col-md-1"></div>
   <div class="row  m-2">
                <div class="col-10"></div>
                <div class="col-2">
                  <a href="#" class="textContent">
                    <i class="fa-solid fa-arrow-right-long"></i> View All
                    locations
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="col-md-1"></div> */}
        </div>
      </div>
      <section class="industry p-5">
        <div class="container43 m-4">
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
              <div class=" d-flex flex row">
                <div>
                  <h3 class="indus" style={{ color: "#2c0264" }}>
                    Browse Jobs By Designation
                  </h3>
                </div>
                <div class="row">
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-120 p-2 m-1">
                      ABAP Consultant
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">
                      BPO Executive
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">
                      Chef
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">
                      BPO Executive
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">
                      Chef
                    </button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">
                      Editor
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">
                      Finance Manager
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">
                      Game Designer
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">
                      Finance Manager
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">
                      Game Designer
                    </button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">
                      HR Assistant
                    </button>
                  </div>
                  <div class="col-md  m-1">
                    <button class="custom-btn btn-10 w-100 m-1">
                      Industrial Engineer
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">
                      java Developer
                    </button>
                  </div>
                  <div class="col-md  m-1">
                    <button class="custom-btn btn-10 w-100  m-1">
                      Industrial Engineer
                    </button>
                  </div>
                  <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">
                      Java Developer
                    </button>
                  </div>
                </div>
                <div class="row  m-2">
                  <div class="col-10"></div>
                  <div class="col-2">
                    <a href="#" class="textContent">
                      <i class="fa-solid fa-arrow-right-long"></i> View All
                      locations
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="row">
          {/* <div class="col-md-1"></div> */}
          <div class="col-md-12">
            <div class="container skills div m-4">
              <div class="row d-flex flex-row">
                <div class="col-md-4 mt-3">
                  <img
                    src="https://www.jobsoid.com/wp-content/uploads/2020/01/How-to-Deliver-an-Outstanding-Candidate-Experience-640x427.jpg"
                    class="joblogo"
                  />
                </div>
                <div class="col-md-8 d-flex flex-column">
                  <div>
                    <h3 class=" p-3" style={{ color: "white",marginLeft:"90px" }}>
                      POST YOUR{" "}
                      <span style={{ color: "#61dafb" }}>DAY JOB</span>
                    </h3>
                  </div>
                  <div>
                    <p class="skillPara p-3 " style={{ color: "white",marginLeft:"90px" }}>
                      It's time to work on your flexible day job
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="col-md-1"></div> */}
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          {/* <div class="col-md-2"></div> */}
          <div class="col-md-12">
            <div class="d-flex flex-row skills2 m-2 mb-5">
              <div>
                <p class="p-2 m-4 callText" style={{color:"white"}}>
                  Find better & faster jobs with pab jobs service Call : 1800
                  833 9448 Now!{" "}
                </p>
              </div>
              <div class="d-flex flex-row mt-3 px-5">
                <div>
                  <input
                    type="text"
                    placeholder="Enter Your Mobile Number"
                    class="abs"
                  />
                </div>
                <div>
                  <button class="bg-warning bgt">
                    Get call back
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="col-md-2"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Home1;
