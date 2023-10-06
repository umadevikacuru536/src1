
import "./browesjobs.css";
import logo from "./pabjobs-logo.png";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Jobcompany() {
  const [blogslist, setblogslist] = useState([]);
  

  const [selectCompany, setselectCompany] = useState([]);
  const navigate=useNavigate();

 
  const handlecompany = (company) => {
    if (selectCompany.includes(company)) {
      setselectCompany((blogslist) =>
        blogslist.filter((item) => item !== company)
      );
    } else {
      setselectCompany((blogslist) => [...blogslist, company]);
    }
  };

  const removeitem = (_id) => {
    const updateditem = [...selectCompany];
    updateditem.splice(_id, 1);
    setselectCompany(updateditem);
  };
  const handleClick = () => {
    navigate("/browesjobs", { state: { location: selectCompany } });
  };

  useEffect(() => {
    fetchblogs();
  }, []);

  const fetchblogs = async () => {
    const api = "http://localhost:5010/allbrowsers";
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s";
    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setblogslist(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

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
              <li class="nav-item" style={{ marginLeft: "400px" }}>
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
                  <i class=" user fa-sharp fa-solid fa-circle-user  dropdown-toggle "></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
      <div class="text-center align-items-center justify-content-center secondContainer p-4">
    <span class="">Home  Jobs</span>
    <div class="text-center align-items-center justify-content-center d-flex row m-2">
        <div class="d-flex p-1 align-items-center seacrhMainContainer m-2 col-md-4">
            <div class="">
                <i class="fa-solid fa-magnifying-glass p-3"></i>
                <input type="text" placeholder="Job title skills or company " class=" p-1 searchBox "/>
            </div>
            <div>
                <i class="fa-solid fa-sort-down p-2 "></i>
            </div>
        </div>
        <div class="d-flex p-1 align-items-center seacrhMainContainer m-2 col-md-4">
            <div class="">
                <i class="fa-solid fa-location-dot p-3"></i>
                <input type="text" placeholder="City, Province or region " class=" p-1 searchBox "/>
            </div>
            <div>
                <i class="fa-solid fa-sort-down p-2 "></i>
            </div>
        </div>


    </div>
    <button class=" registerButton">Search</button>

</div>
      <div className="container buttoncontainer">
        <div className="row">
          <div className="col-12 col-md-2">
            <Link to="/jobs" style={{ color: "white" }}>
              <button className="card shadow jobbutton ">All Jobs</button>
            </Link>
          </div>
          <div className="col-12 col-md-2">
            <Link to="/joblocations" style={{ color: "white" }}>
              <button className="card shadow jobbutton ">
                Job By Location
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-2">
            <Link to="/joblocompany">
              {" "}
              <button className="card shadow jobbutton bg-primary ">
                Jobs By Company
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-2">
            <Link to="/jobcategory" style={{ color: "white" }}>
              <button className="card shadow jobbutton  ">
                {" "}
                Jobs By Category
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-2">
            <button className="card shadow jobbutton ">
              Jobs By Designation
            </button>
          </div>
          <div className="col-12 col-md-2">
            <button className="card shadow jobbutton ">Jobs By Skills</button>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-4">
            <h5>Featured Jobs By Company</h5>
          </div>
          <div className="col-12 col-md-5"></div>

          <div className="col-12 col-md-3">
            <div class="input-group">
              <div class="form-outline">
                <input
                  type="search"
                  id="form1"
                  class="form-control"
                  placeholder="search"
                />
              </div>
              <button
                type="button"
                class="btn btn-primary"
                 
              >
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-12 d-flex">
            <button className="buttonalpha ">A</button>
            <button className="buttonalpha ">B</button>
            <button className="buttonalpha ">C</button>
            <button className="buttonalpha ">D</button>
            <button className="buttonalpha ">E</button>
            <button className="buttonalpha ">F</button>
            <button className="buttonalpha ">G</button>
            <button className="buttonalpha ">H</button>
            <button className="buttonalpha ">I</button>
            <button className="buttonalpha ">J</button>
            <button className="buttonalpha ">K</button>
          </div>
          <div className="col-12 col-md-12 d-flex">
            <button className="buttonalpha ">L</button>
            <button className="buttonalpha ">M</button>
            <button className="buttonalpha ">N</button>
            <button className="buttonalpha ">O</button>
            <button className="buttonalpha ">P</button>
            <button className="buttonalpha ">Q</button>
            <button className="buttonalpha ">R</button>
            <button className="buttonalpha ">S</button>
            <button className="buttonalpha ">T</button>
            <button className="buttonalpha ">U</button>
            <button className="buttonalpha ">V</button>
          </div>
          <div className="col-12 col-md-12 d-flex">
            <button className="buttonalpha ">W</button>
            <button className="buttonalpha ">X</button>
            <button className="buttonalpha ">Y</button>
            <button className="buttonalpha ">Z</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {selectCompany.length > 0 ? (
            selectCompany.map((location, index) => (
              <div className="" key={index}>
                <h2>{location}    <span onClick={removeitem}>X</span></h2>
               
                <button onClick={handleClick}>Filter Array</button> 
              </div>
            ))
          ) : (
            <div className="notFound"></div>
          )}
        </div>
      </div>

      <div className="container mt-5">
        <div className="row mt-2">
          {blogslist.length === 0 ? (
            <p>No results found.</p>
          ) : (
            blogslist.map((blog, index) => (
              <div className="col-12 col-md-3" key={index}>
                <button
                  className="buttonlocation  mb-3"
                  onClick={() => handlecompany(blog.companyname)}
                >
                  {blog.companyname}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobcompany;
